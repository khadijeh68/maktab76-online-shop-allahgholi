import DatePicker from "react-multi-date-picker";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../../index.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Button, Form, Table } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const useStyles = makeStyles({
  body: {
    fontFamily: "Vazir-Medium",
  },
});

function OrdersDisplayModal({ item }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDeliverd = (item) => {
    item.delivered = "true";
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} size="sm">
        بررسی سفارش
      </Button>
      <Modal show={show} className={classes.body}>
        <Modal.Header onClick={handleClose}>
          <Modal.Title>نمایش سفارش</Modal.Title>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            style={{ marginRight: "280px" }}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mt-2">
              <Form.Label> نام مشتری:</Form.Label>
              <Form.Control
                type="text"
                value={item.username + " " + item.lastname}
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>آدرس :</Form.Label>
              <Form.Control type="address" value={item.address} />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>تلفن :</Form.Label>
              <Form.Control type="tel" value={item.tel} />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>زمان تحویل :</Form.Label>
              <div style={{ direction: "rtl" }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  value={new Date(item.expectAt).toLocaleDateString("fa-IR")}
                />
              </div>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>زمان سفارش :</Form.Label>
              <div style={{ direction: "rtl" }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  value={new Date(item.createdAt).toLocaleDateString("fa-IR")}
                />
              </div>
            </Form.Group>

            <Table
              striped
              bordered
              hover
              className="w-75 text-center order_table mx-5"
            >
              <thead>
                <tr>
                  <th>کالا</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.products[0].name}</td>
                  <td>
                    {digitsEnToFa(
                      item.products[0].price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                    )}
                  </td>
                  <td>{digitsEnToFa(item.products[0].count)}</td>
                </tr>
              </tbody>
            </Table>
            {item.delivered === "false" ? (
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => handleDeliverd(item)}
              >
                تحویل شد
              </button>
            ) : (
              <p>
                زمان تحویل :{" "}
                {new Date(item.expectAt).toLocaleDateString("fa-IR")}
              </p>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrdersDisplayModal;

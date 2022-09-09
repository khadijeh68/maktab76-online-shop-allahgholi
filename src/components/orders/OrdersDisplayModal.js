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

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        بررسی سفارش
      </Button>
      <Modal show={show} onHide={handleClose} className={classes.body}>
        <Modal.Header closeButton>
          <Modal.Title>نمایش سفارش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group  className="mt-2">
              <Form.Label> نام مشتری:</Form.Label>
              <Form.Control type="text" value={item.username + " " + item.lastname} />
            </Form.Group >
            <Form.Group  className="mt-2">
              <Form.Label>آدرس :</Form.Label>
              <Form.Control type="address" value={item.address} />
            </Form.Group >
            <Form.Group  className="mt-2">
              <Form.Label>تلفن :</Form.Label>
              <Form.Control type="tel" value={item.phone} />
            </Form.Group >
            <Form.Group  className="mt-2">
              <Form.Label>زمان تحویل :</Form.Label>
              <div style={{ direction: "rtl" }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  value={new Date(item.expectAt).toLocaleDateString("fa-IR")}
                />
              </div>
            </Form.Group >
            <Form.Group  className="mt-2">
              <Form.Label>زمان سفارش :</Form.Label>
              <div style={{ direction: "rtl" }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  value={new Date(item.createdAt).toLocaleDateString("fa-IR")}
                />
              </div>
            </Form.Group >

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
                  <td>{digitsEnToFa(item.products[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،"))}</td>
                  <td>{digitsEnToFa(item.products[0].count)}</td>
                </tr>
              </tbody>
            </Table>
            <button type="submit" className="btn btn-success">
              تحویل شد
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrdersDisplayModal;

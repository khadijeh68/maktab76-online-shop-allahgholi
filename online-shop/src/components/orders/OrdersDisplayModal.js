import DatePicker from "react-multi-date-picker";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../../index.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CartItem from "../cart/CartItem";
import { Button, Table } from "react-bootstrap";

function OrdersDisplayModal({ item }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        بررسی سفارش
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>نمایش سفارش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mt-2">
              <label> نام مشتری:</label>
              <input type="text" value={item.username + " " + item.lastname} />
            </div>
            <div className="mt-2">
              <label>آدرس :</label>
              <input type="address" value={item.address} />
            </div>
            <div className="mt-2">
              <label>تلفن :</label>
              <input type="tel" value={item.phone} />
            </div>
            <div className="mt-2">
              <label>زمان تحویل :</label>
              <div style={{ direction: "rtl" }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  value={new Date(item.expectAt).toLocaleDateString("fa-IR")}
                />
              </div>
            </div>
            <div className="mt-2">
              <label>زمان سفارش :</label>
              <div style={{ direction: "rtl" }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  value={new Date(item.createdAt).toLocaleDateString("fa-IR")}
                />
              </div>
            </div>

            <Table
              striped
              bordered
              hover
              className="w-50 text-center order_table mx-5"
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
                  <td>{item.products[0].price}</td>
                  <td>{item.products[0].count}</td>
                </tr>
              </tbody>
            </Table>
            <button type="submit" className="btn btn-success">
              تحویل شد
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrdersDisplayModal;

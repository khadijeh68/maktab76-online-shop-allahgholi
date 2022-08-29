
import DatePicker from "react-multi-date-picker";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../../index.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CartItem from "../cart/CartItem";

function OrdersDisplayModal(props) {
  const { show, setShow, order } = props;
  const handleClose = () => setShow(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [time, setTime] = useState("");
  const [orderTime, setOrderTime] = useState("");
  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>نمایش سفارش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mt-2">
              <label> نام مشتری:</label>
              <input
                type="text"
                value={order.username + " " + order.lastname}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label>آدرس :</label>
              <input
                type="address"
                onChange={(e) => setAddress(e.target.value)}
                value={order.address}
              />
            </div>
            <div className="mt-2">
              <label>تلفن :</label>
              <input
                type="tel"
                onChange={(e) => setTel(e.target.value)}
                value={order.phone}
              />
            </div>
            <div className="mt-2">
              <label>زمان تحویل :</label>
              <div style={{ direction: "rtl" }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  onChange={(e) => setTime(e.target.value)}
                  value={new Date(order.expectAt).toLocaleDateString("fa-IR")}
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
                  onChange={(e) => setOrderTime(e.target.value)}
                  value={new Date(order.createdAt).toLocaleDateString("fa-IR")}
                />
              </div>
            </div>
            <CartItem />
            <button type="submit" className=" btn btn-primary">
              ذخیره
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrdersDisplayModal;

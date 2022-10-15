import Modal from "react-bootstrap/Modal";
import "../../index.css";
import { Button, Table } from "react-bootstrap";
import style from "./Orders.module.css"
import { useDispatch } from "react-redux";
import {
  fetchDelivered,
  fetchOrders,
} from "../../redux/features/orders/ordersSlice";
import { useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";


function OrdersDisplayModal({ item }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const handleDeliverd = (id) => {
    dispatch(fetchDelivered(id));
    dispatch(fetchOrders());
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} size="sm">
        بررسی سفارش
      </Button>
      <Modal show={show} className={style.body}>
        <Modal.Header onClick={handleClose}>
          <Modal.Title className={style.titr}>نمایش سفارش</Modal.Title>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            style={{ marginRight: "280px" }}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <p>
                نام مشتری: {item.username} {item.lastname}
              </p>
              <p>آدرس : {item.address}</p>
              <p>تلفن : {item.tel}</p>
              <p>
                زمان تحویل :
                {new Date(item.expectAt).toLocaleDateString("fa-IR")}
              </p>
              <p>
                زمان سفارش :
                {new Date(item.createdAt).toLocaleDateString("fa-IR")}
              </p>
            </div>

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
                    {item.products[0].price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, "،")}
                  </td>
                  <td>{digitsEnToFa(item.products[0].count)}</td>
                </tr>
              </tbody>
            </Table>
            {item.delivered === false ? (
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => handleDeliverd(item.id)}
              >
                تحویل شد
              </button>
            ) : (
              <p>
                زمان تحویل :
                {new Date(item.expectAt).toLocaleDateString("fa-IR")}
              </p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrdersDisplayModal;

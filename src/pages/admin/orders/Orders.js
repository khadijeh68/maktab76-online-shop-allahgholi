import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../redux/features/orders/ordersSlice";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import OrdersDisplayModal from "../../../components/orders/OrdersDisplayModal";
import style from "./Orders.module.css";

function Orders() {
  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.orders.ordersList);
  const total = useSelector((state) => state.orders.total);
  const [currentPage, setCurrentPage] = useState(1);
  const [delivered, setDelivered] = useState(true);
  const limit = 5;
  const count = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(fetchOrders({ delivered, currentPage }));
  }, [delivered, currentPage, dispatch]);

  return (
    <div className={style.orders}>
      <div className="d-flex flex-row justify-content-between">
        <h6 className={style.manage}>مدیریت سفارش ها</h6>
        <div className="d-flex flex-row mx-3">
          <span className="px-2">سفارش های تحویل شده </span>
          <input
            type="radio"
            name="group1"
            onClick={() => setDelivered(true)}
            defaultChecked
          />
          <span className="px-2" style={{ marginRight: "20px" }}>
            سفارش های در حال انتظار
          </span>
          <input
            type="radio"
            name="group1"
            onClick={() => setDelivered(false)}
          />
        </div>
      </div>
      <Table striped bordered hover className={style.table}>
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ به تومان</th>
            <th>زمان ثبت سفارش</th>
            <th>وضعیت سفارش</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordersList.length &&
            ordersList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    {item.username} {item.lastname}
                  </td>
                  <td>
                    {digitsEnToFa(
                      item.prices
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                    )}
                  </td>
                  <td>
                    {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td>
                    {item.delivered === true ? "تحویل شد" : "در حال انتظار"}
                  </td>
                  <td>
                    <OrdersDisplayModal item={item} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Pagination
        className={style.page}
        count={count}
        variant="outlined"
        color="secondary"
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
}

export default Orders;

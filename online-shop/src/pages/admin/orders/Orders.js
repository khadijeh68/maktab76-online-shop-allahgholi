import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../redux/features/orders/ordersSlice";
import { makeStyles } from "@material-ui/core";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const useStyles = makeStyles({
  page: {
    direction: "ltr",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px"
  }
})

function Orders() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.orders.ordersList);
  const [currentPage, setCurrentPage] = useState(1);
  const [delivered, setDelivered] = useState(true);

  useEffect(() => {
    dispatch(fetchOrders(delivered,currentPage ));
  }, [delivered,currentPage,  dispatch]);

  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between">
        <h6 className="mx-2">مدیریت سفارش ها</h6>

        <div className="d-flex flex-row mx-3">
          <span className="px-2">سفارش های تحویل شده </span>
          <input type="radio" name="group1" onClick={() => setDelivered(true)} defaultChecked={true}/>

          <span className="px-2" style={{ marginRight: "20px" }}>
            سفارش های در حال انتظار
          </span>
          <input type="radio" name="group1" onClick={() => setDelivered(false)}/>
        </div>
      </div>

      <Table striped bordered hover className="w-75 text-center order_table">
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ به تومان</th>
            <th>زمان ثبت سفارش</th>
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
                  <td>{digitsEnToFa(item.prices)}</td>
                  <td>{new Date(item.createdAt).toLocaleDateString('fa-IR') }</td>
                  <td>
                    <Button variant="warning">بررسی سفارش</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination className={classes.page}
        count={2} variant="outlined" color="secondary"
        onClick={(e) => setCurrentPage(e.target.textContent)}
      />
    </div>
  );
}

export default Orders;

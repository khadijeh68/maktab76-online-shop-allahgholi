import { Link } from "@mui/material";
import React from "react";
import { Form, Table } from "react-bootstrap";

function Orders() {
  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between">
        <h6 className="mx-2">مدیریت سفارش ها</h6>

        <div className="d-flex flex-row mx-3">
          <span className="px-2">سفارش های تحویل شده </span>
          <Form.Check type="radio" aria-label="radio 1" name="group1" />

          <span className="px-2" style={{ marginRight: "20px" }}>
            سفارش های در حال انتظار{" "}
          </span>
          <Form.Check type="radio" aria-label="radio 1" name="group1" />
        </div>
      </div>

      <Table striped bordered hover className="w-75 text-center order_table">
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ </th>
            <th>زمان ثبت سفارش</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><Link>بررسی سفارش</Link></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><Link>بررسی سفارش</Link></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><Link>بررسی سفارش</Link></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><Link>بررسی سفارش</Link></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Orders;

import { makeStyles } from "@material-ui/core/styles";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config/api";
import {
  calculateTotals,
  decrease,
  getTotals,
  increase,
  removeItem,
} from "../../redux/features/cart/cartSlice";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "70px 20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  total: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    marginRight: "750px",
  },
});

function Basket() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartItems]);
  console.log(cartItems);
  // const calculateTotals = () => {
  //   basket.map((item) => console.log(item.price * item.quantity)
  //   )
  // }

  // useEffect(() => {
  //   setBasket(JSON.parse(localStorage.getItem("basket")));
  //   calculateTotals()
  // }, []);

  const removeItem = (id) => {
    // const arr = basket.filter((item) => item.id !== id);
    // console.log(arr);
    // setBasket(arr);
  };

  const increase = (id) => {
    // const items = basket.find((item) => item.id === id);
    //   console.log(items);
    //   items.quantity = items.quantity + 1;
    //   console.log(items.quantity);
  };

  const decrease = (id) => {
    // const items = basket.find((item) => item.id === id);
    //   console.log(items);
    //   items.quantity = items.quantity - 1;
    //   console.log(items.quantity);
  };

  const classes = useStyles();
  return (
    <div className={classes.title}>
      <h4 className="m-3">سبد خرید</h4>
      <Table striped bordered hover className="w-75 text-center">
        <thead>
          <tr>
            <th>تصویر کالا</th>
            <th>نام کالا</th>
            <th>قیمت کالا</th>
            <th>تعداد</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={`${BASE_URL}/files/${item.image}`} alt="mobile" />
              </td>
              <td>
                <h6>{item.name}</h6>
              </td>
              <td>{item.price}</td>
              <td>
                {/* <p>{digitsEnToFa(item.quantity)}</p> */}
                <div className="d-flex flex-direction-row">
                  <Button
                    variant="success"
                    onClick={() => {
                      // dispatch(increase(item.id));
                      increase(item.id);
                    }}
                  >
                    +
                  </Button>
                  <td>
                    <p>{item.quantity}</p>
                  </td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      if (item.quantity === 1) {
                        removeItem(item.id);
                        localStorage.removeItem("basket");
                        return;
                      }
                      decrease(item.id);
                    }}
                  >
                    -
                  </Button>
                </div>
              </td>
              <td>
                <Button variant="danger" onClick={() => removeItem(item.id)}>
                  حذف
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={classes.total}>
        <div>
          <h5>
            جمع:
            {cartTotalAmount &&
              cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h5>
        </div>
        <div className={classes.btn}>
          <Button variant="success">
            <Link to="/checkout" className="text-white text-decoration-none">
              نهایی کردن سبد خرید
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Basket;

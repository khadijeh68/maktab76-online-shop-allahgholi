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
    marginRight: "625px",
  },
});

function Basket() {
  const dispatch = useDispatch();
  const [basket, setBasket] = useState([]);
  const total = useSelector((state) => state.cart.total);

  console.log(total);
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")));
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);
  const removeItem = (id) => {
    const arr = basket.filter((item) => item.id !== id);
    console.log(arr)
    setBasket(arr);
    // handlePrice();
  };

  const classes = useStyles();
  return (
    <div className={classes.title}>
      <h4 className="m-3">سبد خرید</h4>
      <Table striped bordered hover className="w-50 ">
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
          {basket.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={`${BASE_URL}/files/${item.image}`} alt="mobile" />
              </td>
              <td>
                <h6>{item.name}</h6>
              </td>
              <td>
                <p>
                  {digitsEnToFa(
                    item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                  )}
                </p>
              </td>
              <td>
                {/* <p>{digitsEnToFa(item.quantity)}</p> */}
                <div>
                  <button
                    onClick={() => {
                      dispatch(increase(item.id));
                    }}
                  >
                    +
                  </button>
                  <button>{item.quantity}</button>
                  <button
                    onClick={() => {
                      if (item.quantity === 1) {
                        dispatch(removeItem(item.id));
                        return;
                      }
                      dispatch(decrease(item.id));
                    }}
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  حذف
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={classes.total}>
        <div>
          <h5>جمع:{total} </h5>
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

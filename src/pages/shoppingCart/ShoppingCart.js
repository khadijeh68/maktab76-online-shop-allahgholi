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

  const calculateTotals = () => {
    basket.map((item) => console.log(item.price * item.quantity)
    )
  }


  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")));
    calculateTotals()
  }, []);


  const removeItem = (id) => {
    const arr = basket.filter((item) => item.id !== id);
    console.log(arr);
    setBasket(arr);
  }

  const increase = (id) => {
    const items = basket.find((item) => item.id === id);
      console.log(items);
      items.quantity = items.quantity + 1;
      console.log(items.quantity);
  }


  const decrease = (id) => {
    const items = basket.find((item) => item.id === id);
      console.log(items);
      items.quantity = items.quantity - 1;
      console.log(items.quantity);
  }

 

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
                {digitsEnToFa(
                  item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                )}
              </td>
              <td>
                {/* <p>{digitsEnToFa(item.quantity)}</p> */}
                <div className="d-flex flex-direction-row">
                  <Button variant="success"
                    onClick={() => {
                      // dispatch(increase(item.id));
                 increase(item.id);
                    }}
                  >
                    +
                  </Button>
                  <td><p>{digitsEnToFa(item.quantity)}</p></td>
                  <Button variant="warning"
                    onClick={() => {
                      if (item.quantity === 1) {
                       removeItem(item.id);
                       localStorage.removeItem("basket")
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
                <Button
                  variant="danger"
                  onClick={() => removeItem(item.id)}
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

import { makeStyles } from "@material-ui/core/styles";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../config/api";
import { getTotals } from "../../redux/features/cart/cartSlice";
import {removeItem} from "../../redux/features/cart/cartSlice"
import DeleteModal from "./DeleteModal";

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
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartItems]);

  // const calculateTotals = () => {
  //   basket.map((item) => console.log(item.price * item.quantity)
  //   )
  // }

  // useEffect(() => {
  //   setBasket(JSON.parse(localStorage.getItem("basket")));
  //   calculateTotals()
  // }, []);



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
      <Table bordered className="w-75 text-center">
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
                <Link to={`products/${item.id}`}>
                  <img src={`${BASE_URL}/files/${item.image}`} alt="mobile" />
                </Link>
              </td>
              <td>
                <Link to={`products/${item.id}`}>{item.name}</Link>
              </td>
              <td>{digitsEnToFa(item.price)}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => {
                    // dispatch(increase(item.id));
                    increase(item.id);
                  }}
                >
                  +
                </Button>
              </td>
              <td>
                <p>{digitsEnToFa(item.quantity)}</p>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => {
                    if (item.quantity === 1) {
                      dispatch(removeItem(item.id));
                      localStorage.removeItem("cartItems");
                      return;
                    }
                    decrease(item.id);
                  }}
                >
                  -
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  // onClick={() => dispatch(removeItem(item.id))}
                  onClick={handleOpenDelete}
                >
                  حذف
                </Button>
                <DeleteModal
                      openDelete={openDelete}
                      handleCloseDelete={handleCloseDelete}
                      itemId={item.id}
                      setOpenDelete={setOpenDelete}
                    />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={classes.total}>
        <div>
          <h5>
            جمع :
            {digitsEnToFa(
              cartTotalAmount &&
                cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            )}
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

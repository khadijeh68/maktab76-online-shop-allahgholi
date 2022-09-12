import { makeStyles } from "@material-ui/core";
import { Link, NavLink, useParams } from "react-router-dom";
import "../../index.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearLocalStorage } from "../../redux/features/cart/cartSlice";

const useStyles = makeStyles({
  nav: {
    direction: "rtl",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff7fd",
    width: "100vw",
    height: "60px",
    boxShadow: "0 0 6px rgb(0 0 0 / 30%)",
    position: "fixed",
    zIndex: "100",
  },
  span: {
    textDecoration: "none",
    margin: "15px",
    fontFamily: "Vazir-Medium",
    color: "inherit",
  },
  basket: {
    display: "flex",
    justifyContent: "center",
  },
  leftNav: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  form: {
    backgroundColor: "whitesmoke",
  },
  logo: {
    color: "#C14795",
  },
  h4: {
    marginTop: "100px",
    fontFamily: "Vazir-Medium",
    margin: "20px",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    width: "50px",
    height: "52px",
  },
  success: {
    width: "100px",
    height: "90px",
  },
});

function SuccessPaymant() {
  const dispatch = useDispatch();
  const params = useParams();
  const query = params.query;
  const cartItems = useSelector((state) => state.cart.cartItems);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };
  const classes = useStyles();
  const clearCart = () => {
    fetch(`http://localhost:3002/orders`, {
      method: "POST",
      body: JSON.stringify(cartItems),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  
  };

  // useEffect(() => {
  //     dispatch(clearLocalStorage());
  // }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <div className={classes.rightNav}>
          <NavLink to="/" className={classes.span} style={navLinkStyles}>
            <img
              className={classes.img}
              src={`../../../image/logo.png`}
              alt="logo"
            />
            <span className={classes.logo}>
              فروشگاه آنلاین موبایل و لوازم جانبی
            </span>
          </NavLink>
        </div>

        <div className={classes.leftNav}>
          <NavLink to="/login" className={classes.span} style={navLinkStyles}>
            <span>مدیریت </span>
          </NavLink>
        </div>
      </div>

      <div className={classes.h4}>
      <h4>نتیجه پرداخت </h4>
      <div className={classes.body}>
          <img
            className={classes.success}
            src={`../../../image/success.png`}
            alt="success"
          />
          <div>
          <p className="mt-3">
            با تشکر از پرداخت شما، سفارش شما ثبت شده و <br /> جهت هماهنگی ارسال
            با شما تماس گرفته خواهد شد
          </p>
          <Button onClick={clearCart}>پاک کردن سبد خرید</Button>
          <Link to="/admin/orders" className="text-decoration-none">صفحه سفارشات</Link>
          </div>
          
          </div>
      </div>
    </div>
  );
}

export default SuccessPaymant;

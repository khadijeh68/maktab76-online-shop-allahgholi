import style from "./SuccessPaymant.module.css";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  createOrder,
} from "../../redux/features/orders/ordersSlice";
import { clearLocalStorage } from "../../redux/features/cart/cartSlice";
import logo from "../../assets/image/logo.png"
import success from "../../assets/image/success.png"

function SuccessPaymant() {
  const dispatch = useDispatch();

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItems"));
    const newOrder = JSON.parse(localStorage.getItem("userInfo"));
    newOrder.products = data;
    dispatch(createOrder(newOrder)).unwrap().then(() => dispatch(clearLocalStorage()))
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div className={style.rightNav}>
          <NavLink to="/" className={style.span} style={navLinkStyles}>
            <img
              className={style.img}
              src={logo}
              alt="logo"
            />
            <span className={style.logo}>
              فروشگاه آنلاین موبایل و لوازم جانبی
            </span>
          </NavLink>
        </div>

        <div className={style.leftNav}>
          <NavLink to="/login" className={style.span} style={navLinkStyles}>
            <span>مدیریت </span>
          </NavLink>
        </div>
      </div>

      <div className={style.h4}>
        <h5>نتیجه پرداخت </h5>
        <div className={style.body}>
          <img
            className={style.success}
            src={success}
            alt="success"
          />
          <div>
            <p className="mt-3">
              با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی
              ارسال با شما تماس گرفته خواهد شد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPaymant;

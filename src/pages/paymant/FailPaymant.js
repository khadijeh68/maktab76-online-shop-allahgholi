import style from "./FailPaymant.module.css";
import { NavLink } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useSelector } from "react-redux";
import fail from "../../assets/image/fail.png"
import logo from "../../assets/image/logo.png"

function FailPaymant() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };

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

          <NavLink
            to="/shoppingCart"
            className={style.span}
            style={navLinkStyles}
          >
            <div className={style.basket}>
              <ShoppingCartSharpIcon />
              <span className="bag-quantity">{cartTotalQuantity}</span>
            </div>
          </NavLink>
        </div>
      </div>

      <div className={style.h4}>
        <h5>نتیجه پرداخت</h5>
        <div className={style.body}>
          <img
            className={style.fail}
            src={fail}
            alt="fail"
          />
          <p className="mt-3">
            پرداخت موفقیت آمیز نبود، سفارش شما <br />
            در انتظار پرداخت است
          </p>
        </div>
      </div>
    </div>
  );
}

export default FailPaymant;

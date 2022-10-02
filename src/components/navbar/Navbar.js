import { NavLink } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import "../../index.css";
import { useSelector } from "react-redux";
import style from "./Navbar.module.css";

function Navbar() {
  // const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };

  return (
    <div>
      <div className={style.nav}>
        <div>
          <NavLink to="/" className={style.span} style={navLinkStyles}>
            <span className={style.logo}>
              <img
                className={style.img}
                src={`../../../image/logo.png`}
                alt="logo"
              />
              <span className={style.name}>
                فروشگاه آنلاین موبایل و لوازم جانبی
              </span>
            </span>
          </NavLink>
        </div>

        <div className={style.leftNav}>
          {isLoggedIn ? (
            <NavLink
              to="/admin/orders"
              className={style.span}
              style={navLinkStyles}
            >
              <span>مدیریت </span>
            </NavLink>
          ) : (
            <NavLink to="/login" className={style.span} style={navLinkStyles}>
              <span>مدیریت </span>
            </NavLink>
          )}
          <NavLink
            to="/shoppingCart"
            className={style.span}
            style={navLinkStyles}
          >
            <div className={style.basket}>
              <ShoppingCartSharpIcon />
              <span className="bag-quantity">{cartItems.length}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

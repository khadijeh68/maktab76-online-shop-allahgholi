import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import "../../index.css";

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
    margin: "30px",
    fontFamily: "Vazir-Medium",
    color: "inherit",
  },

  basket: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  img: {
    width: "50px",
    height: "52px",
  },
});

function Navbar() {
  const classes = useStyles();
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };
  return (
    <div>
      <div className={classes.nav}>
        <div className={classes.rightNav}>
          <NavLink to="/" className={classes.span} style={navLinkStyles}>
            <span className={classes.logo}>
              <img
                className={classes.img}
                src={`../../../image/logo.png`}
                alt="logo"
              />
              فروشگاه آنلاین موبایل و لوازم جانبی
            </span>
          </NavLink>
        </div>

        <div className={classes.leftNav}>
          <NavLink to="/login" className={classes.span} style={navLinkStyles}>
            <span>مدیریت </span>
          </NavLink>

          <NavLink
            to="/shoppingCart"
            className={classes.span}
            style={navLinkStyles}
          >
            <div className={classes.basket}>
              <ShoppingCartSharpIcon />
              {/* <span>سبد خرید </span> */}
              <span className="bag-quantity">0</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

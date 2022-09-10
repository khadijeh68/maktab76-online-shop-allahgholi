import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

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
  fail: {
    width: "100px",
    height: "90px",
  },
});

function FailPaymant() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };
  const classes = useStyles();
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

          <NavLink
            to="/shoppingCart"
            className={classes.span}
            style={navLinkStyles}
          >
            <div className={classes.basket}>
              <ShoppingCartSharpIcon />
              <span>سبد خرید </span>
            </div>
          </NavLink>
        </div>
      </div>

      <div className={classes.h4}>
        <h4>نتیجه پرداخت</h4>
        <div className={classes.body}>
          <img
            className={classes.fail}
            src={`../../../image/fail.png`}
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

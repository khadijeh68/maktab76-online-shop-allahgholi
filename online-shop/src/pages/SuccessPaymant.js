import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  nav: {
    direction: "rtl",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100vw",
    height: "50px",
    boxShadow: "0 0 6px rgb(0 0 0 / 40%)",
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
    color: "#D43C37",
  },
  h4: {
    marginTop: "100px",
    fontFamily: "Vazir-Medium",
    margin: '10px'
  },
  container: {
    display: "flex",
    flexDirection: "column",
  }
});

function SuccessPaymant() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
            <div className={classes.rightNav}>
            <NavLink to="/" className={classes.span}>
                <span className={classes.logo}>
                فروشگاه آنلاین موبایل و لوازم جانبی{" "}
                </span>
            </NavLink>

            <NavLink to="/" className={classes.span}>
                <span>صفحه اصلی </span>
            </NavLink>

            <NavLink to="/categories" className={classes.span}>
                <span>دسته بندی کالاها </span>
            </NavLink>

            <NavLink to="/products" className={classes.span}>
                <span>کالاها</span>
            </NavLink>
            </div>

            <div className={classes.leftNav}>
            <NavLink to="/login" className={classes.span}>
                <span>مدیریت </span>
            </NavLink>
            </div>
      </div>

      <div  className={classes.h4}>
        <h4>نتیجه پرداخت</h4>
        <p>پرداخت با موفقیت انجام شد</p>
      </div>
    </div>
  );
}

export default SuccessPaymant;

import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import "../../index.css";

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
  nav_link: {
    margin: "10px",
    fontFamily: "Vazir-Medium",
    textDecoration: "none",
    color: "black",
  },
});

function AdminNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <h4 className={classes.nav_link}>پنل مدیریت فروشگاه</h4>
      <div>
        <NavLink to="/product" className={classes.nav_link}>
          <span>کالاها</span>
        </NavLink>

        <NavLink to="/inventory" className={classes.nav_link}>
          <span className={classes.nav_link}>موجودی و قیمت ها</span>
        </NavLink>

        <NavLink to="/orders" className={classes.nav_link}>
          <span className={classes.nav_link}>سفارش ها</span>
        </NavLink>

        <NavLink to="/" className={classes.nav_link}>
          <span className={classes.nav_link}>بازگشت به سایت</span>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminNavbar;

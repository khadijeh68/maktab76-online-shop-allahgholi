import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
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
  nav_link: {
    margin: "30px",
    fontFamily: "Vazir-Medium",
    textDecoration: "none",
    color: "black",
  },
});

const AdminNavbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <span className={classes.nav_link}>پنل مدیریت فروشگاه</span>
      <div>
        <NavLink
          to="product"
          className={classes.nav_link}
          style={navLinkStyles}
        >
          <span>کالاها</span>
        </NavLink>

        <NavLink
          to="inventory"
          className={classes.nav_link}
          style={navLinkStyles}
        >
          <span>موجودی و قیمت ها</span>
        </NavLink>

        <NavLink to="orders" className={classes.nav_link} style={navLinkStyles}>
          <span>سفارش ها</span>
        </NavLink>

        <NavLink to="/" className={classes.nav_link} style={navLinkStyles}>
          <span>بازگشت به سایت</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminNavbar;

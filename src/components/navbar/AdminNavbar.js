import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { IS_LOGGGED_IN } from "../../config/constants";
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
  const classes = useStyles();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem(IS_LOGGGED_IN, false);
    navigate("/login");
  }

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };


  return (
    <div className={classes.nav}>
      <NavLink to="orders" className={classes.nav_link} style={navLinkStyles}>
        <span>پنل مدیریت فروشگاه</span>
      </NavLink>

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

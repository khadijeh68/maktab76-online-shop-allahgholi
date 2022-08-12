import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import "../../index.css"

const useStyles = makeStyles({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Vazir-Medium",
  },
  nav_link:{
    margin: "10px",
    fontFamily: "Vazir-Medium",
  
  }
});

function AdminNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <h3>پنل مدیریت فروشگاه</h3>
      <div>
        <NavLink to="/products" className={classes.nav_link}>
          <span>کالاها</span>
        </NavLink>

        <NavLink to="/quantity" className={classes.nav_link}>
          <span>موجودی و قیمت ها</span>
        </NavLink>

        <NavLink to="/orders" className={classes.nav_link}>
          <span>سفارش ها</span>
        </NavLink>

        <NavLink to="/" className={classes.nav_link}>
          <span>بازگشت به سایت</span>
        </NavLink>

      
      </div>
    </div>
  );
}

export default AdminNavbar;

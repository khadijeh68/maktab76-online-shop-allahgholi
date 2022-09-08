import { makeStyles } from "@material-ui/core";
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
    margin: "10px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    width: "50px",
    height: "52px",
  },
});

function SuccessPaymant() {
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
        </div>
      </div>

      <div className={classes.h4}>
        <h4>نتیجه پرداخت </h4>
        <p>پرداخت با موفقیت انجام شد</p>
      </div>
    </div>
  );
}

export default SuccessPaymant;

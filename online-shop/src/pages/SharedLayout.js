import { NavLink, Outlet } from "react-router-dom";
import { IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import "../index.css";

const useStyles = makeStyles({
  nav: {
    direction: "rtl",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "15px",
    padding: "10px",
  },
  span: {
    textDecoration: "none",
    margin: "10px",
    fontFamily: "Vazir-Bold",
    color: "inherit",
  },
  input: {
    width: "600px",
    borderRadius: "5px",
  },
  basket: {
    display: "flex",
    justifyContent: "center",
  },
  leftNav: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginRight: "217px",
  },
  form: {
    backgroundColor: "whitesmoke",
  },
});

const SharedLayout = () => {
  const classes = useStyles();
  return (
    <div className="main">
      <div className={classes.nav}>
        <div className={classes.rightNav}>
          <NavLink to="/" className={classes.span}>
            <span>فروشگاه آنلاین موبایل و لوازم جانبی </span>
          </NavLink>
          <NavLink to="/" className={classes.span}>
            <span>صفحه اصلی </span>
          </NavLink>

          <NavLink to="/category" className={classes.span}>
            <span>دسته بندی </span>
          </NavLink>
        </div>
        <div className={classes.input}>
          <Paper component="form" className={classes.form}>
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="جستجو..." />
          </Paper>
        </div>
        <div className={classes.leftNav}>
          <NavLink to="/adminPanel" className={classes.span}>
            <span>مدیریت </span>
          </NavLink>
          <NavLink to="/basket" className={classes.span}>
            <div className={classes.basket}>
              <ShoppingCartSharpIcon />
              <span>سبد خرید </span>
            </div>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default SharedLayout;

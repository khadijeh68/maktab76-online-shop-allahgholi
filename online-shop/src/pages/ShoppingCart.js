import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "70px 20px",
  },
});

function Basket() {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <p>سبد خرید</p>
      <Link to="/checkout">نهایی کردن سبد خرید</Link>
    </div>
  );
}

export default Basket;

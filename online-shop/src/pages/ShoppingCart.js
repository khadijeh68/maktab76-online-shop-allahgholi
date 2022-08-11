import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  h3: {
    fontFamily: "Vazir-Medium",
    margin: "70px 20px",
  },
});

function Basket() {
  const classes = useStyles();
  return <div className={classes.h3}>سبد خرید</div>;
}

export default Basket;

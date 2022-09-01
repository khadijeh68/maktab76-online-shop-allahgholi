import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
import ProductsCard from "../../components/product/ProductCard";

const useStyles = makeStyles({
  h3: {
    fontFamily: "Vazir-Medium",
    display: "flex",
    flexDirection: "column",
  },
});

function SharedCategoryLayout() {
  const classes = useStyles();
  return (
    <div className={classes.h3}>
      <Outlet />
    </div>
  );
}

export default SharedCategoryLayout;

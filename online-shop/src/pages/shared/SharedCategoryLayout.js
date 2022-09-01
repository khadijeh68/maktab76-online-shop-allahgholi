import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
import CategoriesCard from "../../pages/categories/CategoriesCard";

const useStyles = makeStyles({
  h3: {
    fontFamily: "Vazir-Medium",
    display: "flex",
    flexDirection: "column",
  },
});

function SharedLayoutProducts() {
  const classes = useStyles();
  return (
    <div className={classes.h3}>
     <CategoriesCard />
      <Outlet />
    </div>
  );
}

export default SharedLayoutProducts;
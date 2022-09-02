import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
=======
import CategoriesCard from "../../pages/categories/CategoriesCard";
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f

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
<<<<<<< HEAD
=======
     <CategoriesCard />
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
      <Outlet />
    </div>
  );
}

export default SharedCategoryLayout;

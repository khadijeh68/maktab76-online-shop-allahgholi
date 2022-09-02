import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
=======
import CategoriesCard from "../../pages/categories/CategoriesCard";
>>>>>>> origin/develop

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
>>>>>>> origin/develop
      <Outlet />
    </div>
  );
}

export default SharedCategoryLayout;

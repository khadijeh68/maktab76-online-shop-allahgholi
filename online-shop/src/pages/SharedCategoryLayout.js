import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    margin: "70px 20px",
    fontFamily: "Vazir-Medium",
  },
});
const SharedCategoryLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Outlet />
    </div>
  );
};
export default SharedCategoryLayout;

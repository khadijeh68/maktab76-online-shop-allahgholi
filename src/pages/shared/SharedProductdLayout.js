import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles({
  h3: {
    fontFamily: "Vazir-Medium",
    display: "flex",
    flexDirection: "column",
  },
});

function SharedProductdLayout() {
  const classes = useStyles();
  return (
    <div className={classes.h3}>
      <Outlet />
    </div>
  );
}

export default SharedProductdLayout;

import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/navbar/AdminNavbar";

const useStyles = makeStyles({
  h3: {
    fontFamily: "Vazir-Medium",
    display: "flex",
    flexDirection: "column",
  },
});

function SharedAdminLayout() {
  const classes = useStyles();
  return (
    <div className={classes.h3}>
      <AdminNavbar />
      <Outlet />
    </div>
  );
}

export default SharedAdminLayout;

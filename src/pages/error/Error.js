import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const useStyles = makeStyles({
  notFound: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(68, 68, 68)",
    fontFamily: "Vazir-Medium",
    marginTop: "200px"
  }
})
  const Error = () => {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <h2>{digitsEnToFa(404)}</h2>
      <p>صفحه پیدا نشد</p>
      <Link to="/" className="text-decoration-none">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};
export default Error;

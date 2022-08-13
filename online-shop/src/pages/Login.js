import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";


const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Vazir-Medium",
    alignItems: "center",
    textAlign: "center",
  },
});

function Login() {
  const navigate = useNavigate();
  const classes = useStyles();

  const navigateAdmin = () => {
    navigate('/admin');
  };

  return (
    <div className={classes.form}>
      <h3>ورود به پنل مدیریت فروشگاه</h3>
      <form action="">
        <div>
          <label htmlFor="">نام کاربری</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">رمز عبور</label>
          <input type="text" />
        </div>

        <button onClick={navigateAdmin}>ورود</button>
      </form>
      <Link to="/" className={classes.nav_link}>
        <span>بازگشت به سایت </span>
      </Link>
    </div>
  );
}

export default Login;

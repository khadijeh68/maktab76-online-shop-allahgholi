import { makeStyles } from "@material-ui/core/styles";
import { Button, Form } from "react-bootstrap";
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
    navigate("/admin");
  };

  return (
    <div className={classes.form}>
      <h4 className="mt-4">ورود به پنل مدیریت فروشگاه</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="mt-5">نام کاربری</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>رمز عبور</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Button type="submit" className="mt-3" onClick={navigateAdmin}>
          ورود
        </Button>
      </Form>
      <Link to="/" className="mt-3 text-decoration-none">
        <span>بازگشت به سایت </span>
      </Link>
    </div>
  );
}

export default Login;

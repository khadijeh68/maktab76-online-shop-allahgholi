import { makeStyles } from "@material-ui/core/styles";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css"

const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Vazir-Medium",
    alignItems: "center",
    marginTop: '50px'
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
      <h5 className="mt-4">ورود به پنل مدیریت فروشگاه</h5>
      <Form className="form_data">
        <Form.Group className="mb-3">
          <Form.Label className="mt-2 text-white">نام کاربری :</Form.Label>
          <Form.Control type="text" className="w-100"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label  className="mt-3 text-white">رمز عبور :</Form.Label>
          <Form.Control type="email" className="w-100"/>
        </Form.Group>

        <Button type="submit" className="mt-3" onClick={navigateAdmin}>
          ورود
        </Button>
        <Link to="/" className="mt-3 text-decoration-none text-white ">
        <span>بازگشت به سایت </span>
      </Link>
      </Form>
      
    </div>
  );
}

export default Login;

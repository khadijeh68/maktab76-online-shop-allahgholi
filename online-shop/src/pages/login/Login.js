import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import { login } from "../../redux/features/user/usersSlice";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Vazir-Medium",
    alignItems: "center",
    marginTop: "50px",
  },
});

function Login() {
<<<<<<< HEAD
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    if (isLoggedIn) {
      navigate("/admin/orders");
    } else navigate("/login");
  };

  return (
    <div className={classes.form}>
      <h5 className="mt-4">ورود به پنل مدیریت فروشگاه</h5>
      <Form className="form_data" onSubmit={handleSubmit}>
        {error && <h6 className="text-white">نام کاربری و پسورد صحیح نمی باشد</h6>}
=======
  // const initialValues = {
  //   username: "",
  //   password: "",
  // };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    dispatch(login({username,password }));
  };

  const validate = (values) => {
    const errors = {};

    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } else if (!values.username) {
      errors.username = "نام کاربری اجباری است";
    } else if (!values.password) {
      errors.password = "پسورد اجباری است";
    }
    return errors;
  };


  const navigate = useNavigate();
  const classes = useStyles();

  if (isLoggedIn) return <Navigate to={"/admin"} />;
  return (
    <div className={classes.form}>
      <h5 className="mt-4">ورود به پنل مدیریت فروشگاه</h5>

      <Form className="form_data" onSubmit={handleSubmit}>
        {error && <h6 className="text-white">{error}</h6>}
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
        <Form.Group className="mb-3" controlId="username">
          <Form.Label className="mt-2 text-white">نام کاربری :</Form.Label>
          <Form.Control
            type="text"
            className="w-100"
            autoFocus
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="mt-3 text-white">رمز عبور :</Form.Label>
          <Form.Control
            type="password"
            className="w-100"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" className="mt-3" >
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

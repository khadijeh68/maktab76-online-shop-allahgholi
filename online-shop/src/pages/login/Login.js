import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";

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
  const initialValues = {
    username: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};

    if (formValues.username === "admin" && formValues.password === "admin") {
      navigate("/admin");
    }
    //  else {
    //   errors.username = "نام کاربری صحیح نیست";
    //   errors.password = "رمز عبور صحیح نیست";
    // }
    if (!values.username) {
      errors.username = "نام کاربری اجباری است";
    } 
    // else if (/\d/.test(values.username)) {
    //   errors.username = "نام نباید شامل اعداد باشد";
    // }
    //  else if (values.username.length < 5) {
    //   errors.username = "نام باید حداکثر 5 کاراکتر باشد";
    // }
    if (!values.password) {
      errors.password = "پسورد اجباری است";
    } 
    // else if (!/\d/.test(values.password)) {
    //   errors.password = "پسورد نباید شامل اعداد باشد";
    // } else if (values.password.length < 5) {
    //   errors.password = "پسورد باید حداکثر 5 کاراکتر باشد";
    // }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();
  const classes = useStyles();

  // const navigateAdmin = () => {
  //   if (formValues.username  === "admin" && formValues.password === "admin"){
  //     navigate("/admin");
  //   }
  //   else{
  //     errors.username
  //   }

  // };

  return (
    <div className={classes.form}>
      <h5 className="mt-4">ورود به پنل مدیریت فروشگاه</h5>

      <Form className="form_data" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label className="mt-2 text-white">نام کاربری :</Form.Label>
          <Form.Control
            type="text"
            className="w-100"
            autoFocus
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </Form.Group>
        <p className="text-white">{formErrors.username}</p>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="mt-3 text-white">رمز عبور :</Form.Label>
          <Form.Control
            type="password"
            className="w-100"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </Form.Group>
        <p className="text-white">{formErrors.password}</p>
        <Button type="submit" className="mt-3">
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

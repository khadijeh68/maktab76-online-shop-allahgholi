import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import { login } from "../../redux/features/user/usersSlice";

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
      console.log(isLoggedIn)
      navigate("/admin/orders");
    } else navigate("/login");
  };

  return (
    <div className={classes.form}>
      <h5 className="mt-4">ورود به پنل مدیریت فروشگاه</h5>
      <Form className="form_data" onSubmit={handleSubmit}>
        {error && <h6 className="text-white">نام کاربری و رمز عبور صحیح نمی باشد</h6>}
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

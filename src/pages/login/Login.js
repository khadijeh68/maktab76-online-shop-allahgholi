
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { login } from "../../redux/features/user/usersSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.users);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password })).unwrap().then(() => navigate("/admin/orders"))
  };


  return (
    <div className={style.form}>
      <h5 className="mt-4">ورود به پنل مدیریت فروشگاه</h5>
     
      <Form className={style.form_data} onSubmit={handleSubmit}>
        {error && (
          <h6 className="text-white">نام کاربری و رمز عبور صحیح نمی باشد</h6>
        )}
        
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

        <Button type="submit" className="mt-3">
          ورود
        </Button>
        <Link to="/" className="mt-3 text-decoration-none text-white ">
          <span>بازگشت به سایت </span>
        </Link>
      </Form>
      <h6 className="mt-4">نام کاربری و رمز عبور، admin می باشد</h6>
    </div>
  );
}

export default Login;

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="">
      <h2>404</h2>
      <p>صفحه پیدا نشد</p>
      <Link to="/" className="">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};
export default Error;

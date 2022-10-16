import style from "./Checkout.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { getTotals } from "../../redux/features/cart/cartSlice";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "تعداد کاراکتر کمتر از حد مجاز است")
    .max(50, "تعداد کاراکتر بیشتر از حد مجاز است")
    .required("نام اجباری است"),
  lastname: Yup.string()
    .min(2, "تعداد کاراکتر کمتر از حد مجاز است")
    .max(50, "تعداد کاراکتر بیشتر از حد مجاز است")
    .required("نام خانوادگی اجباری است"),
  address: Yup.string().required("آدرس اجباری است"),
  tel: Yup.number().required("شماره تماس اجباری است"),
  // expectAt: Yup.date().default(function () {
  //   return new Date();
  // }),
});

function Checkout() {
  const [date, setDate] = useState();
  const [props, setProps] = useState({
    value: new Date().toLocaleDateString("fa-IR"),
    format: "YYYY-MM-DD",
    onChange: (date) => {
      date.format();
      setDate(new Date(date.format()));
    },
    calendar: persian,
    locale: persian_fa
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  const handle = (data) => {
    dispatch(getTotals());
    const userInfo = {
      username: data.username,
      lastname: data.lastname,
      address: data.address,
      tel: data.tel,
      expectAt: date,
      prices: data.prices,
      delivered: data.delivered,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    console.log(userInfo)
  };

  return (
    <div className={style.title}>
      <h5>نهایی کردن خرید</h5>
      <div>
        <Formik
          initialValues={{
            username: "",
            lastname: "",
            address: "",
            tel: "",
            expectAt: "",
            delivered: false,
            products: [],
            prices: cartTotalAmount,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // window.location.href = "http://localhost:3000/PaymantPanel";
            // navigate("/paymantPanel");
            handle(values);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form className={style.form}>
              <div>
                <div>
                  <label>نام:</label>
                </div>
                <Field
                  name="username"
                  type="text"
                  className={style.input}
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && touched.username ? (
                  <div className="text-danger">{errors.username}</div>
                ) : null}
              </div>
              <div>
                <div>
                  <label className="mt-3">نام خانوادگی:</label>
                </div>
                <Field
                  name="lastname"
                  type="text"
                  className={style.input}
                  value={values.lastname}
                  onChange={handleChange}
                />
                {errors.lastname && touched.lastname ? (
                  <div className="text-danger">{errors.lastname}</div>
                ) : null}
              </div>
              <div>
                <div>
                  <label className="mt-3">آدرس:</label>
                </div>
                <Field
                  name="address"
                  type="address"
                  value={values.address}
                  onChange={handleChange}
                  className={style.input}
                />
                {errors.address && touched.address ? (
                  <div className="text-danger">{errors.address}</div>
                ) : null}
              </div>
              <div>
                <div>
                  <label className="mt-3">شماره همراه:</label>
                </div>
                <Field
                  name="tel"
                  type="tel"
                  className={style.input}
                  value={values.tel}
                  onChange={handleChange}
                />
                {errors.tel && touched.tel ? (
                  <div className="text-danger">{errors.tel}</div>
                ) : null}
              </div>
              <div>
                <div>
                  <label className="mt-3">تاریخ تحویل :</label>
                </div>
                <div>
                  <DatePicker
                    {...props}
                    onPropsChange={setProps}
                    name="expectAt"
                    type="date"
                  />
                </div>
                {/* <Field
                  name="expectAt"
                  type="date"
                  className={style.input}
                  value={values.date}
                  onChange={handleChange}
                />
                {errors.expectAt && touched.expectAt ? (
                  <div className="text-danger">{errors.expectAt}</div>
                ) : null} */}
              </div>
              <button type="submit" className="btn btn-primary m-3">
                پرداخت
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Checkout;

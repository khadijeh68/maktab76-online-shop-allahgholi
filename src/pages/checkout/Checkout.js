import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { getTotals, userOrder } from "../../redux/features/cart/cartSlice";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import ordersSlice, {
  createOrder,
  fetchOrders,
} from "../../redux/features/orders/ordersSlice";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    marginTop: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#efdada",
    width: "500px",
    height: "600px",
    marginTop: "20px",
    borderRadius: "5px",
  },
});

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "تعداد کاراکتر کمتر از حد مجاز است")
    .max(50, "تعداد کاراکتر بیشتر از حد مجاز است")
    .required("نام اجباری است"),
  lastName: Yup.string()
    .min(2, "تعداد کاراکتر کمتر از حد مجاز است")
    .max(50, "تعداد کاراکتر بیشتر از حد مجاز است")
    .required("نام خانوادگی اجباری است"),
  address: Yup.string().required("آدرس اجباری است"),
  tel: Yup.number().required("شماره تماس اجباری است"),
  expectAt: Yup.date().default(function () {
    return new Date();
  }),
});

function Checkout() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);

  const handle = (data) => {
    dispatch(getTotals());
    const userInfo = {
      username: data.username,
      lastName: data.lastName,
      address: data.address,
      tel: data.tel,
      expectAt: Date.now(data.expectAt),
      prices: data.prices,
      delivered: data.delivered
    };
   
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  return (
    <div className={classes.title}>
      <h3>نهایی کردن خرید</h3>
      <div>
        <Formik
          initialValues={{
            username: "",
            lastName: "",
            address: "",
            tel: "",
            expectAt: "",
            delivered: false,
            products: [],
            prices: cartTotalAmount,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            window.location.href = "http://localhost:3001/";
            handle(values);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form className={classes.form}>
              <div>
                <div>
                  <label>نام:</label>
                </div>
                <Field
                  name="username"
                  type="text"
                  className={classes.input}
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
                  name="lastName"
                  type="text"
                  className={classes.input}
                  value={values.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-danger">{errors.lastName}</div>
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
                  className={classes.input}
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
                  className={classes.input}
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
                <Field
                  name="expectAt"
                  type="date"
                  className={classes.input}
                  value={values.date}
                  onChange={handleChange}
                />
                {/* <div style={{ direction: "rtl" }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  value={new Date(Yup.date).toLocaleDateString("fa-IR")}
                />
              </div> */}
                {errors.expectAt && touched.expectAt ? (
                  <div className="text-danger">{errors.expectAt}</div>
                ) : null}
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

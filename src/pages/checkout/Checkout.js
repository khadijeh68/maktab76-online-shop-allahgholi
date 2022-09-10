import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";

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
    borderRadius: "5px"
  },
});

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "تعداد کاراکتر کمتر از حد مجاز است")
    .max(50, "تعداد کاراکتر بیشتر از حد مجاز است")
    .required("نام اجباری است"),
  lastName: Yup.string()
    .min(2, "تعداد کاراکتر کمتر از حد مجاز است")
    .max(50, "تعداد کاراکتر بیشتر از حد مجاز است")
    .required("نام خانوادگی اجباری است"),
  address: Yup.string().required("آدرس اجباری است"),
  tel: Yup.number().required("شماره تماس اجباری است"),
  data: Yup.date().default(function () {
    return new Date();
  }),
});

function Checkout() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    //   navigate("http://localhost:3001/paymentPanel");
  };

  return (
    <div className={classes.title}>
      <h3>نهایی کردن خرید</h3>
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            address: "",
            tel: "",
            date: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            localStorage.setItem("userData", JSON.stringify(values));
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}  onSubmit={handleSubmit}>
              <div>
                <div>
                  <label>نام:</label>
                </div>
                <Field name="firstName" type="text" />
                {errors.firstName && touched.firstName ? (
                  <div className="text-danger mt-2">{errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <div>
                  <label className="mt-3">نام خانوادگی:</label>
                </div>
                <Field name="lastName" type="text" />
                {errors.lastName && touched.lastName ? (
                  <div className="text-danger mt-2">{errors.lastName}</div>
                ) : null}
              </div>
              <div>
                <div>
                  <label className="mt-3">آدرس:</label>
                </div>
                <Field name="address" type="address" />
                {errors.address && touched.address ? (
                  <div className="text-danger mt-2">{errors.address}</div>
                ) : null}
              </div>
              <div>
                <div>
                  <label className="mt-3">
                    شماره همراه:
                  </label>
                </div>
                <Field name="tel" type="tel" />
                {errors.tel && touched.tel ? (
                  <div className="text-danger mt-2">{errors.tel}</div>
                ) : null}
              </div>
              <div>
                <div>
                  <label className="mt-3">تاریخ تحویل :</label>
                </div>
                <Field name="date" type="date" />
                {errors.date && touched.date ? (
                  <div className="text-danger mt-2">{errors.date}</div>
                ) : null}
              </div>
              {/* <Link to="http://localhost:3001/paymentPanel"> */}

              <button type="submit" className="btn btn-primary m-3">
                پرداخت
              </button>
              {/* </Link> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Checkout;

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Link } from "react-router-dom";
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

export const ValidationSchemaExample = () => (
  <div>
      <h3>نهایی کردن خرید</h3>
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
        <Form>
          <div>
            <label>نام:</label>
            <Field name="firstName" type="text" />
            {errors.firstName && touched.firstName ? (
              <div className="text-danger">{errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <label>نام خانوادگی:</label>
            <Field name="lastName" type="text" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
          </div>
          <div>
            <label>آدرس:</label>
            <Field name="address" type="address" />
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
          </div>
          <div>
            <Field name="tel" type="tel" />
            {errors.tel && touched.tel ? <div>{errors.tel}</div> : null}
          </div>
          <div>
            <Field name="date" type="date" />
            {/* <DatePicker

            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          /> */}
            {errors.date && touched.date ? <div>{errors.date}</div> : null}
          </div>
          <Link to="http://localhost:3001/paymentPanel">
            <button type="submit" className="btn btn-primary">
              پرداخت
            </button>
          </Link>
        </Form>
      )}
    </Formik>
  </div>
);

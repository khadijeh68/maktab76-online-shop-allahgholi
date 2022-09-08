import { makeStyles } from "@material-ui/core/styles";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-multi-date-picker";
import { useNavigate } from "react-router-dom";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "70px 20px",
  },
});

function Checkout() {
  const [validated, setValidated] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    navigate("/paymantPanel");
  };

  const navigatePaymantPanel = () => {
    navigate("/paymantPanel");
  };

  return (
    <div className={classes.title}>
      <h3>نهایی کردن خرید</h3>

      <Form
        noValidate
        validated={validated}
        className="w-25"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>نام</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          نام اجباری است
        </Form.Control.Feedback>
        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>نام و نام خانوادگی</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          نام خانوادگی اجباری است
        </Form.Control.Feedback>
        <Form.Group className="mb-3" controlId="validationCustom03">
          <Form.Label>آدرس</Form.Label>
          <Form.Control type="address" as="textarea" required />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          آدرس اجباری است
        </Form.Control.Feedback>
        <Form.Group className="mb-3" controlId="validationCustom04">
          <Form.Label>تلفن همراه</Form.Label>
          <Form.Control type="tel" required />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          شماره تماس اجباری است
        </Form.Control.Feedback>
        <Form.Group className="mb-3" controlId="validationCustom05">
          <Form.Label>تاریخ تحویل</Form.Label>
          <DatePicker
            required
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          تاریخ تحویل اجباری است
        </Form.Control.Feedback>
        <Button variant="primary" type="submit">
          پرداخت
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;

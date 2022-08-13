import { makeStyles } from "@material-ui/core/styles";
import { Button, Form } from "react-bootstrap";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "70px 20px",
  },
});

function Checkout() {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <h3>نهایی کردن خرید</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>نام</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>نام و نام خانوادگی</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>آدرس</Form.Label>
          <Form.Control type="address" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>تلفن همراه</Form.Label>
          <Form.Control type="tel" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>تاریخ تحویل</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit">
          پرداخت
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;

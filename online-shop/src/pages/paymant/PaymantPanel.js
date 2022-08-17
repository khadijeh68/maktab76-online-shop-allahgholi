import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "30px 20px",
  },
});

function PaymantPanel() {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateSuccessPaymant = () => {
    navigate("/successPaymant");
  };

  const navigateFailPaymant = () => {
    navigate("/failPaymant");
  };

  return (
    <div className={classes.title}>
      <p>درگاه اینترنتی</p>
      <Button variant="success" type="submit" onClick={navigateSuccessPaymant}>
        پرداخت
      </Button>{" "}
      <Button variant="danger" type="submit" onClick={navigateFailPaymant}>
        انصراف
      </Button>{" "}
    </div>
  );
}

export default PaymantPanel;

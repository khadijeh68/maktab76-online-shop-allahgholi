import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "30px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    width: "650px",
    height: "500px",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
});

function PaymantPanel() {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateSuccessPaymant = () => {
    navigate("/successPaymant");
     localStorage.removeItem("cartItems")
  };

  const navigateFailPaymant = () => {
    navigate("/failPaymant");
  };

  return (
    <div className={classes.title}>
      <img
        className={classes.img}
        src={`../../../image/sepehr3.png`}
        alt="dargah"
      />
      <div className={classes.btn}>
        <Button
          variant="success"
          type="submit"
          className="mx-3"
          onClick={navigateSuccessPaymant}
        >
          پرداخت
        </Button>
        <Button variant="danger" className="mx-3"  type="submit" onClick={navigateFailPaymant}>
          انصراف
        </Button>
      </div>
    </div>
  );
}

export default PaymantPanel;

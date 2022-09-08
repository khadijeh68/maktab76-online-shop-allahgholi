import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/features/cart/cartSlice";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "30px 20px",
  },
 img: {
  backgroundImage: "url('logo.png')"
 }
});

function PaymantPanel() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const navigateSuccessPaymant = () => {
    navigate("/successPaymant");
    dispatch(clearCart())
  };
  // useEffect(() => {
  //   dispatch(calculateTotals());
  // }, [dispatch]);

  const navigateFailPaymant = () => {
    navigate("/failPaymant");
  };

  return (
    <div className={classes.title}>
      <p className={classes.img}>درگاه اینترنتی</p>
      {/* <img className={classes.img} src={`../../../image/sepehr.png`} alt="dargah" /> */}
      <Button variant="success" type="submit" onClick={navigateSuccessPaymant}>
        پرداخت
      </Button>
      <Button variant="danger" type="submit" onClick={navigateFailPaymant}>
        انصراف
      </Button>
    </div>
  );
}

export default PaymantPanel;

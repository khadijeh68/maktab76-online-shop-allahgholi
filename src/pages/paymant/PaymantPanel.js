import style from "./PaymantPanel.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import sepehr3 from "../../assets/image/sepehr3.png"

function PaymantPanel() {
  const navigate = useNavigate();

  const navigateSuccessPaymant = () => {
    navigate("/successPaymant");
  };

  const navigateFailPaymant = () => {
    navigate("/failPaymant");
  };

  return (
    <div className={style.title}>
      <img
        className={style.img}
        src={sepehr3}
        alt="dargah"
      />
      <div className={style.btn}>
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

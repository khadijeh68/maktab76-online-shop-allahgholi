import { makeStyles } from "@material-ui/core/styles";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config/api";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "70px 20px",
    display: "flex",
    justifyContent:"center",
    flexDirection: "column",
    alignItems:"center"
  },
  total: {
    display: "flex",
    flexDirection: "row",
  },
  btn:{
    marginRight:"625px"
  }
});

function Basket() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(
      JSON.parse(localStorage.getItem("basket")) //
    );
  }, []);
  console.log(basket);
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <h4 className="m-3">سبد خرید</h4>
      <Table striped bordered hover className="w-50 ">
        <thead>
          <tr>
            <th>تصویر کالا</th>
            <th>نام کالا</th>
            <th>قیمت کالا</th>
            <th>تعداد</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => (
            <tr>
              <td>
                <img src={`${BASE_URL}/files/${item.image}`} alt="mobile" />
              </td>
              <td>
                <h6>{item.name}</h6>
              </td>
              <td>
                <p>{digitsEnToFa(item.price.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, "،"))}</p>
              </td>
              <td>
                <p>{digitsEnToFa(item.quantity)}</p>
              </td>
              <td>
                <Button variant="danger">حذف</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={classes.total}>
        <div>
          <h5>جمع: </h5>
        </div>
        <div className={classes.btn}>
          <Button variant="success">
            <Link to="/checkout" className="text-white text-decoration-none">
              نهایی کردن سبد خرید
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Basket;

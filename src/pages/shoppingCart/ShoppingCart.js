import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "70px 20px",
  },
});

function Basket() {
  const [basket, setBasket] = useState([])

  useEffect(() => {
    setBasket(
      JSON.parse(localStorage.getItem('basket')), //
    )
  }, [])
  console.log(basket)
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <p>سبد خرید</p>
      {/* <table>
        <thead>
          <tr>
            <td>image</td>
            <td>name</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => (
            <tr>
              <td>
                <img src={item.image} alt="jpg" />
              </td>
              <td>
                <h6>
                  {item.name} {item.brand}
                </h6>
              </td>
              <td>
                <p>{item.price}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Link to="/checkout">نهایی کردن سبد خرید</Link>
    </div>
  );
}

export default Basket;

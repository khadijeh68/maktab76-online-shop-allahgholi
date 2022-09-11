import { makeStyles } from "@material-ui/core/styles";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../config/api";
import {
  addToCart,
  clearCart,
  decrease,
  getTotals,
  increase,
} from "../../redux/features/cart/cartSlice";
import { removeItem } from "../../redux/features/cart/cartSlice";
import DeleteModal from "../../components/cart/DeleteModal";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Medium",
    margin: "70px 20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  total: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    marginRight: "750px",
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(68, 68, 68)",
    fontFamily: "Vazir-Medium",
    marginTop: "200px",
  },
});

function Basket() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartItems]);

  const handleDecreaseCart = (product) => {
    dispatch(decrease(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={classes.title}>
      {cartItems.length === 0 ? (
        <div className={classes.cart}>
          <h5>سبد خرید شما خالی است</h5>
          <h6 className="mt-3">
            <Link to="/" className="text-decoration-none text-success">
              بازگشت به صفحه اصلی
            </Link>
          </h6>
        </div>
      ) : (
        <div>
          <h4 className="m-3">سبد خرید</h4>
          <Table bordered className="w-100 text-center">
            <thead>
              <tr>
                <th>تصویر کالا</th>
                <th>نام کالا</th>
                <th>قیمت کالا</th>
                <th>افزودن تعداد</th>
                <th>تعداد</th>
                <th>کاستن تعداد</th>
                <th>مبلغ قابل پرداخت</th>
                <th>حذف کالا</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={`${BASE_URL}/files/${item.image}`}
                        alt="mobile"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/products/${item.id}`}  className="text-decoration-none text-black">{item.name}</Link>
                  </td>
                  <td>{digitsEnToFa((item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،"))}</td>
                  <td>
                    <Button
                      variant="success" size="sm"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </Button>
                  </td>
                  <td>
                    <p>{digitsEnToFa(item.cartQuantity)}</p>
                  </td>
                  <td>
                    <Button
                      variant="warning" size="sm"
                      onClick={() => {
                        dispatch(handleDecreaseCart(item));
                      }}
                    >
                      -
                    </Button>
                  </td>
                  <td>
                    <div className="cart-product-total-price">
                      {digitsEnToFa((item.price * item.cartQuantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،"))} تومان
                    </div>
                  </td>
                  <td>
                    <Button variant="danger" onClick={handleOpenDelete} size="sm">
                      حذف
                    </Button>
                    <DeleteModal
                      openDelete={openDelete}
                      handleCloseDelete={handleCloseDelete}
                      itemId={item.id}
                      setOpenDelete={setOpenDelete}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className={classes.total}>
            <div>
              <h5>
                جمع :
                {digitsEnToFa(
                  cartTotalAmount &&
                    cartTotalAmount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}
              </h5>
            </div>
            <div className={classes.btn}>
              <Button variant="success" size="sm">
                <Link
                  to="/checkout"
                  className="text-white text-decoration-none"
                >
                  نهایی کردن سبد خرید
                </Link>
              </Button>
              <Button
                variant="warning"
                size="sm"
                className="text-white text-decoration-none mx-1"
                onClick={() => dispatch(clearCart())}
              >
                پاک کردن سبد خرید
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;

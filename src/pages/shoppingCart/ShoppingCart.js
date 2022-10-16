import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { BASE_URL } from "../../config/api";
import {
  addToCart,
  clearCart,
  decrease,
  getTotals,
} from "../../redux/features/cart/cartSlice";
import DeleteModal from "../../components/cart/DeleteModal";
import style from "./ShoppingCart.module.css";
import {
  BsTrashFill,
  BsPlusCircleFill,
  BsDashCircleFill,
} from "react-icons/bs";

function Basket() {
  const dispatch = useDispatch();
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
    <div className={style.title}>
      {cartItems.length === 0 ? (
        <div className={style.cart}>
          <h5>سبد خرید شما خالی است</h5>
          <h6 className="mt-3">
            <Link to="/" className="text-decoration-none text-success">
              بازگشت به صفحه اصلی
            </Link>
          </h6>
        </div>
      ) : (
        <div>
          <h5 style={{ textAlign: "center", margin: "15px" }}>سبد خرید</h5>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Table striped bordered hover className={style.table}>
              <thead>
                <tr>
                  <th>تصویر کالا</th>
                  <th>نام کالا</th>
                  <th>قیمت کالا</th>
                  {/* <th>
                  <FaArrowUp />
                </th> */}
                  <th>تعداد</th>
                  {/* <th>
                  <FaArrowDown />
                </th> */}
                  {/* <th className={style.price}>مبلغ قابل پرداخت</th> */}
                  <th>حذف کالا</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className={style.align}>
                      <Link to={`/products/${item.id}`}>
                        <img
                          src={`${BASE_URL}/files/${item.image}`}
                          alt="mobile"
                        />
                      </Link>
                    </td>
                    <td className={style.align}>
                      <Link
                        to={`/products/${item.id}`}
                        className="text-decoration-none text-black"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className={style.align}>
                      {digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}{" "}
                      تومان
                    </td>
                    <td className={style.count}>
                      <Button
                        variant="outline-success"
                        style={{ border: "none" }}
                        onClick={() => handleAddToCart(item)}
                        disabled={
                          item.cartQuantity >= item.quantity ? "disabled" : ""
                        }
                      >
                        <BsPlusCircleFill />
                      </Button>
                      <p style={{ marginBottom: 0 }}>
                        {digitsEnToFa(item.cartQuantity)}
                      </p>
                      <Button
                        variant="outline-warning"
                        style={{ border: "none" }}
                        onClick={() => {
                          dispatch(handleDecreaseCart(item));
                        }}
                      >
                        <BsDashCircleFill />
                      </Button>
                    </td>
                    {/* <td className={style.align}>
                    
                  </td>
                  <td className={style.align}>
                   
                  </td> */}
                    {/* <td className={style.align}>
                    <div className={style.totalPrice}>
                      {digitsEnToFa(
                        (item.price * item.cartQuantity)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}{" "}
                      تومان
                    </div>
                  </td> */}
                    <td>
                      <Button
                        variant="outline-danger"
                        onClick={handleOpenDelete}
                        style={{ border: "none" }}
                        className={style.trash}
                      >
                        <BsTrashFill />
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
          </div>
          <div className={style.total}>
            <div>
              <h5>
                جمع :
                {digitsEnToFa(
                  cartTotalAmount &&
                    cartTotalAmount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}{" "}
                تومان
              </h5>
            </div>
            <div className={style.btn}>
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

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/features/productDetail/productDetailSlice";
import "../../index.css";
import { BASE_URL } from "../../config/api";
import { addToCart, decrease } from "../../redux/features/cart/cartSlice";
import style from "./ProductDetails.module.css"

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [orderCount, setOrderCount] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    dispatch(getDetails(id))
      .unwrap()
      .then((res) => setProduct(res));
  }, [dispatch, id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setOrderCount(orderCount + 1);
  };

  const handleDecreaseCart = (product) => {
    dispatch(decrease(product));
    setOrderCount(orderCount - 1);
  };

  return (
    <div className={style.productDetails}>
      <div>
        <img
          className={style.imgProduct}
          variant="top"
          src={`${BASE_URL}/files/${product.image}`}
          alt="mobile"
        />
      </div>
      <div className={style.font}>
        <h5>{product.name}</h5>
        <p>{`رنگ: ${product.color}`}</p>
        <p>{`قیمت: ${(product.price)}`} تومان</p>
        <div className="d-flex flex-direction-row align-items-center">
          <div>تعداد: </div>
          <Button
            variant="success"
            size="sm"
            className="mx-2"
            onClick={() => {handleAddToCart(product)}}
            disabled={orderCount >= product.quantity ? "disabled" : ""}
          >
            +
          </Button>
          <div>{orderCount}</div>
          <Button
            variant="warning"
            size="sm"
            className="mx-2"
            onClick={() => {
              dispatch(handleDecreaseCart(product));
            }}
            disabled={orderCount <= 0 ? "disabled" : ""}
          >
            -
          </Button>
        </div>
        <div  className="mt-2" dangerouslySetInnerHTML={{ __html: product.description }} />
        <Button variant="primary" className={style.btn} onClick={() => handleAddToCart(product)}  disabled={orderCount >= product.quantity || orderCount < 0 ? "disabled" : ""}>
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;

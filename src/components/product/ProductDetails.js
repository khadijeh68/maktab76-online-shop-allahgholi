import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/features/productDetail/productDetailSlice";
import "../../index.css";
import { BASE_URL } from "../../config/api";
import { addToCart, decrease } from "../../redux/features/cart/cartSlice";

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
    <div className="product-details">
      <div>
        <img
          className="mx-5 img-product-details"
          variant="top"
          src={`${BASE_URL}/files/${product.image}`}
          alt="mobile"
        />
      </div>
      <div>
        <h5>{product.name}</h5>
        <p>{`رنگ: ${product.color}`}</p>
        <p>{`قیمت: ${product.price}`}</p>
        <div className="d-flex flex-direction-row align-items-center">
          <div>تعداد: </div>
          <Button
            variant="success"
            size="sm"
            className="mx-2"
            onClick={() => {handleAddToCart(product)}}
            disabled={orderCount > product.quantity ? "disabled" : ""}
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
            disabled={orderCount < 0 ? "disabled" : ""}
          >
            -
          </Button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
        <Button variant="primary" onClick={() => handleAddToCart(product)}  disabled={orderCount > product.quantity || orderCount < 0 ? "disabled" : ""}>
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;

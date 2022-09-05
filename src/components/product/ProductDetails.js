import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/features/productDetail/productDetailSlice";
import "../../index.css";
import { BASE_URL } from "../../config/api";
import { getProduct } from "../../redux/features/cart/cartSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems)
  const [product, setProduct] = useState([]);

  useEffect(() => {
    dispatch(getDetails(id))
      .unwrap()
      .then((res) => setProduct(res));
      dispatch(getProduct(id))
  }, [dispatch, id]);

  const addToCart = (id) => {
    console.log(cartItems);
    const clickedItem = cartItems.filter((product) => product.id === id);
    console.log(clickedItem);
    const Basket = JSON.parse(localStorage.getItem("basket")) ?? []; //
    localStorage.setItem("basket", JSON.stringify([...Basket, ...clickedItem]));
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
        <p>{`سیستم عامل: ${product.os}`}</p>
        <p>{`وزن: ${product.weight}`}</p>
        <p>{`اندازه: ${product.size}`}</p>
        <p>{`قیمت: ${product.price}`}</p>
        <div>
          <label>تعداد: </label>
          <input type="number" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
        <Button variant="primary" onClick={() => addToCart(product.id)}>
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;

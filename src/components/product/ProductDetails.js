import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/features/productDetail/productDetailSlice";
import "../../index.css";
import { BASE_URL } from "../../config/api";
import { addToCart } from "../../redux/features/cart/cartSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    dispatch(getDetails(id))
      .unwrap()
      .then((res) => setProduct(res));
  }, [dispatch, id]);



  // const addToCart = (item) => {
  //   const clickedItem = cartItems.filter((product) => product.id === item);
  //   const Basket = JSON.parse(localStorage.getItem("basket")) ?? []; //
  //   // if (clickedItem.indexOf(item) !== -1) return;
  //   // Basket.amount = 0
  //   localStorage.setItem("basket", JSON.stringify([...Basket, ...clickedItem]));
  //   console.log(clickedItem)
  // };

  
  const handleChange = (item) => {
    console.log(cartItems.indexOf(item))
    // if (basket.indexOf(item) !== -1) return;
    // setBasket([...basket, item]);
  }

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
        <div>
          <label>تعداد: </label>
          <input type="number" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;

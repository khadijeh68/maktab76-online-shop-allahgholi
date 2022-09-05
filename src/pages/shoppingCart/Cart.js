import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/features/cart/cartSlice";

function Cart() {
  const [orderNumber, setOrderNumber] = useState(0);
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  const addToCart = (id) => {
    const clickedItem = cart.filter((item) => item.id === id)
    const Basket = JSON.parse(localStorage.getItem('basket')) ?? [] //
    localStorage.setItem('basket', JSON.stringify([...Basket, ...clickedItem]))
  }
  return <div>Cart</div>;
}

export default Cart;

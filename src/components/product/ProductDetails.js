import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/features/productDetail/productDetailSlice";
import "../../index.css";
import { BASE_URL } from "../../config/api";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    dispatch(getDetails(id))
      .unwrap()
      .then((res) => setProduct(res));
  }, [dispatch, id]);

  return (
    <div className="product-details">
      <div >
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
        <Button variant="primary">افزودن به سبد خرید</Button>
      </div>
    </div>
  );
}

export default ProductDetails;

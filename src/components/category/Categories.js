import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import AppleProduct from "../product/productCard/AppleProduct";
import SamsungProduct from "../product/productCard/SamsungProduct";
import XiaomiProduct from "../product/productCard/XiaomiProduct";
import HuaweiProduct from "../product/productCard/HuaweiProduct";
import HonorProduct from "../product/productCard/HonorProduct";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../../redux/features/product/productSlice";
import ProductCard from "../product/ProductCard";
import { getList } from "../../redux/features/fiestPage/firstPage";
import { useState } from "react";

const useStyles = makeStyles({
  container: {
    textDecoration: "none",
    fontFamily: "Vazir-Medium",
    fontSize: "20px",
  },
  Categories: {
    marginRight: "15px",
    marginTop: "70px",
  },
});

function Categories() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const productsList = useSelector((state) => state.products.productsList);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getList());
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
      {categoryList.map((category) => {
        return (
          <div>
            <Link
              to={`/categories/${category.id}`}
              key={category.id}
              className={classes.container}
            >
              {category.name}
            </Link>

            <ProductCard productsList={productsList} id={category.id} />
          </div>
        );
      })}
    </>
  );
}

export default Categories;

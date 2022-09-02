import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";


import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppleProduct from "../product/productCard/AppleProduct";
import SamsungProduct from "../product/productCard/SamsungProduct";
import XiaomiProduct from "../product/productCard/XiaomiProduct";
import HuaweiProduct from "../product/productCard/HuaweiProduct";
import HonorProduct from "../product/productCard/HonorProduct";

import ProductCard from "../product/ProductCard";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  container: {
    fontFamily: "Vazir-Light",
    // display: "flex",
    // flexDirection: "row",
  },
  sidebar: {
    width: "200px",
    borderLeft: "3px solid black",
    height: "1210px",
    marginTop: "70px",
  },
  Categories: {
    marginRight: "15px",
    marginTop: "70px",
  },
});

function Categories() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);


  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <>
     <AppleProduct/>
      <SamsungProduct/>
      <XiaomiProduct/>
      <HuaweiProduct/>
      <HonorProduct/>

    
      

    </>
  );
}

export default Categories;

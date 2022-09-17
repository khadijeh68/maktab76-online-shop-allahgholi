import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import AppleProduct from "../product/productCard/AppleProduct";
import SamsungProduct from "../product/productCard/SamsungProduct";
import XiaomiProduct from "../product/productCard/XiaomiProduct";
import HuaweiProduct from "../product/productCard/HuaweiProduct";
import HonorProduct from "../product/productCard/HonorProduct";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/features/product/productSlice";
import ProductCard from "../product/ProductCard";
import { getList } from "../../redux/features/fiestPage/firstPage";
import { useState } from "react";

const useStyles = makeStyles({
  container: {
    fontFamily: "Vazir-Light",
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
  },
  sidebar: {
    width: "200px",
    height: "1210px",
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 30%)",
  },
  Categories: {
    marginRight: "15px",
    marginTop: "70px",
  },
});

function Categories() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const categoryList = useSelector((state) => state.categories.categoryList);
  // const list = useSelector((state) => state.list.list);
  // console.log(list)
  const productsList = useSelector((state) => state.products.productsList);

  const classes = useStyles();

  // useEffect(() => {
  //   dispatch(fetchCategory());
  //   categoryList.map((item) => {
  //     return (
  //       dispatch(getList(item.id))
      
  //       // setData([...data, list]);
  //     )
  //   });
  // }, [categoryList, dispatch]);

  return (
    <>
      {categoryList.map((category) => {
        return (
          <div>
            <Link to={`/categories/${category.name}`} key={category.id}>
              {category.name}
            </Link>

            <ProductCard />
          </div>
        );
      })}

      {/* <AppleProduct />
      <SamsungProduct />
      <XiaomiProduct />
      <HuaweiProduct />
      <HonorProduct /> */}
    </>
  );
}

export default Categories;

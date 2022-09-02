import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppleProduct from "../product/productCard/AppleProduct";
import SamsungProduct from "../product/productCard/SamsungProduct";
import XiaomiProduct from "../product/productCard/XiaomiProduct";
import HuaweiProduct from "../product/productCard/HuaweiProduct";
import HonorProduct from "../product/productCard/HonorProduct";

=======
import ProductCard from "../product/ProductCard";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f

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

<<<<<<< HEAD

=======
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
<<<<<<< HEAD
    // <>
    //   <div className={classes.container}>
    //     {categoryList.map((category) => {
    //       return (
    //         <div className="mt-5" key={category.id}>
    //           <Link to={`/categories/${category.id}`}>
    //             {category.name}
    //             {/* <ProductCard category={category.id} /> */}
    //             {/* <AppleProduct/> */}
    //           </Link>
    //         </div>
    //       );
    //     })}
    //     <Outlet />
    //   </div>
    // </>
    <>
     <AppleProduct/>
      <SamsungProduct/>
      <XiaomiProduct/>
      <HuaweiProduct/>
      <HonorProduct/>
=======
    <>
      <div className={classes.container}>
        {categoryList.map((category) => {
          return (
            <div className="mt-5" >
              <Link to={`/categories/${category.id}`} key={category.id}>
                {category.name}
              </Link>
              <ProductCard  />
                  {/* {category.name}{category.map(( <ProductCard category={category.id} />))} */}
            </div>
          );
        })}
        <Outlet />
      </div>
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
    </>
  );
}

export default Categories;

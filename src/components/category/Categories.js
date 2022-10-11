import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import { getList } from "../../redux/features/product/productSlice";
import style from "./Category.module.css";
import { BsFillCaretLeftFill } from "react-icons/bs";

function Categories() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const productsList = useSelector((state) => state.products.productsList);

  useEffect(() => {
    dispatch(getList());
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
      {categoryList.map((category) => {
        return (
          <div key={category.id}>
            <Link to={`/categories/${category.id}`} className={style.container}>
              {category.name}<BsFillCaretLeftFill/>
            </Link>

            <ProductCard productsList={productsList} id={category.id} />
          </div>
        );
      })}
    </>
  );
}

export default Categories;

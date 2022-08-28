import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
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
  const productsList = useSelector((state) => state.products.productsList);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <>
      <div className={classes.container}>
        {categoryList.map((category) => {
          return (
            <div className="mt-5">
              <Link to={`/categories/${category.id}`} key={category.id}>
                {category.name}
                <ProductCard category={category.id} 
                                
                             />
              </Link>
            </div>
          );
        })}
        <Outlet />
      </div>
    </>
  );
}

export default Categories;

import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { fetchCategory } from "../../redux/features/category/categorySlice";

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
    padding:"20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 30%)",
  

  },
  Categories: {
    marginRight: "15px",
    marginTop: "70px",
  },
});

//Categories : <Sidebar/> , <Products/>

function CategoriesCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        {categoryList.map((category) => {
          return (
            <div  key={category.id}>
              <Link to={`/categories/${category.id}`} key={category.id}>
                {category.name}
              </Link>
            </div>
          );
        })}
      </div>
      <ProductCard/>
    </div>

  );
}

export default CategoriesCard;

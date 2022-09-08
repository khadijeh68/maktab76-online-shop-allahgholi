import { makeStyles } from "@material-ui/core/styles";
import { dialogClasses } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { getCategory, getList } from "../../redux/features/fiestPage/firstPage";

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
  const [validated, setValidated] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();
  console.log(category)



  useEffect(() => {
    dispatch(getCategory());
    dispatch(getList(categoryId))
      .unwrap()
      .then((res) => setCategory(res));
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
      <div className="mt-3">
      {category.map((item)=> {
          return (
            <div>{item.name}</div>
          )
        })}
      </div>
 
    </div>

  );
}

export default CategoriesCard;

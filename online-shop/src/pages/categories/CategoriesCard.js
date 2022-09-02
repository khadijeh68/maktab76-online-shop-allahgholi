import { makeStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
import { dialogClasses } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { getCategory, getList } from "../../redux/features/fiestPage/firstPage";
=======
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import { fetchCategory } from "../../redux/features/category/categorySlice";
>>>>>>> origin/develop

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
<<<<<<< HEAD
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();
  console.log(category)


  useEffect(() => {
    dispatch(getCategory());
    dispatch(getList(categoryId))
      .unwrap()
      .then((res) => setCategory(res));
  }, [dispatch]);
=======

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

>>>>>>> origin/develop
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        {categoryList.map((category) => {
          return (
<<<<<<< HEAD
            <div  key={category.id}>
=======
            <div>
>>>>>>> origin/develop
              <Link to={`/categories/${category.id}`} key={category.id}>
                {category.name}
              </Link>
            </div>
          );
        })}
<<<<<<< HEAD
       
      </div>
      <div className="mt-3">
      {category.map((item)=> {
          return (
            <div>{item.name}</div>
          )
        })}
      </div>
 
    </div>

=======
      </div>
      <ProductCard/>
    </div>

    // <div>
    //   <Link to="/" className={classes.link}>
    //     گوشی موبایل اپل
    //   </Link>
    //   <p>اپل</p>
    //   <p>اپل</p>
    //   <p>اپل</p>
    //   <p>اپل</p>
    //   <p>اپل</p>
    //   <p>اپل</p>
    // </div>
>>>>>>> origin/develop
  );
}

export default CategoriesCard;

import { makeStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
import SamsungProduct from "../../components/product/productCard/SamsungProduct";
import AppleProduct from "../../components/product/productCard/AppleProduct";
import XiaomiProduct from "../../components/product/productCard/XiaomiProduct";
import HuaweiProduct from "../../components/product/productCard/HuaweiProduct";
import HonorProduct from "../../components/product/productCard/HonorProduct";
import Categories from "../../components/category/Categories";
=======
import Categories from "../../components/category/Categories";

>>>>>>> origin/develop
const useStyles = makeStyles({
  category: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginTop: "70px",
  },
  link: {
    marginTop: "20px",
    fontFamily: "Vazir-Light",
    color: "inherit",
  },
  h4: {
    marginTop: "20px",
    fontFamily: "Vazir-Medium",
  },
});


function Home() {
 
  const classes = useStyles();
  return (
    <div className={classes.category}>
      <Categories/>
<<<<<<< HEAD
     
=======
      {/* <Link to="/categories" className={classes.link}>
        گوشی موبایل اپل
      </Link>
      <img
        src="http://localhost:3002/files/2318b36a701e3687514700df5927fb66"
        alt="apple"
      />
      نمایش 6 محصول */}
      {/* <Link to="/categories" className={classes.link}>
        گوشی سامسونگ
      </Link>
      نمایش 6 محصول
      <Link to="/categories" className={classes.link}>
        گوشی شیائومی
      </Link>
      نمایش 6 محصول
      <Link to="/categories" className={classes.link}>
        گوشی هوآوی
      </Link>
      نمایش 6 محصول
      <Link to="/categories" className={classes.link}>
        گوشی آنر
      </Link>
      نمایش 6 محصول
      <Link to="/categories" className={classes.link}>
        گوشی نوکیا
      </Link>
      نمایش 6 محصول */}
>>>>>>> origin/develop
    </div>
  );
}

export default Home;

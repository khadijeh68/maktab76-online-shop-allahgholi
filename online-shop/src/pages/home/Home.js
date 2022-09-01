import { makeStyles } from "@material-ui/core/styles";
import SamsungProduct from "../../components/product/productCard/SamsungProduct";
import AppleProduct from "../../components/product/productCard/AppleProduct";
import XiaomiProduct from "../../components/product/productCard/XiaomiProduct";
import HuaweiProduct from "../../components/product/productCard/HuaweiProduct";
import HonorProduct from "../../components/product/productCard/HonorProduct";
import Categories from "../../components/category/Categories";
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
     
    </div>
  );
}

export default Home;

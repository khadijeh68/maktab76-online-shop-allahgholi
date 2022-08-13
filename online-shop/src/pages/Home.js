import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "../components/product/ProductCard"

const useStyles = makeStyles({
  category: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginTop: "20px",
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

       <Link to="/categories" className={classes.link}>
        گوشی موبایل
      </Link>
      <ProductCard/>

      <Link to="/categories" className={classes.link}>
        هدفون و هندزفری
      </Link>
      <ProductCard/>

      <Link to="/categories" className={classes.link}>
        کیف و کاور
      </Link>
      <ProductCard/>

      <Link to="/categories" className={classes.link}>
        محافظ صفحه نمایش
      </Link>
      <ProductCard/>
      
      <Link to="/categories" className={classes.link}>
        ساعت هوشمند
      </Link>
      <ProductCard/>
    </div>
  );
}

export default Home;

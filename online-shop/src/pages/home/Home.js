import { makeStyles } from "@material-ui/core/styles";
import Categories from "../../components/category/Categories";

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

//Home : <Categories/> , <Products/>

function Home() {
 
  const classes = useStyles();
  return (
    <div className={classes.category}>
      <Categories/>
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
    </div>
  );
}

export default Home;

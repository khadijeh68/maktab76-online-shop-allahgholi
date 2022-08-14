import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
      <Link to="/categories" className={classes.link}>
        گوشی موبایل
      </Link>
      نمایش 6 محصول
      <Link to="/categories" className={classes.link}>
        هدفون و هندزفری
      </Link>
      نمایش 6 محصول
      <Link to="/categories" className={classes.link}>
        کیف و کاور
      </Link>
      نمایش 6 محصول
      <Link to="/categories" className={classes.link}>
        محافظ صفحه نمایش
      </Link>
      نمایش 6 محصول
      <Link to="/categories" className={classes.link}>
        ساعت هوشمند
      </Link>
      نمایش 6 محصول
    </div>
  );
}

export default Home;

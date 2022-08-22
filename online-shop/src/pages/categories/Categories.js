import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { fetchCategory } from "../../redux/features/category/categorySlice";

const useStyles = makeStyles({
  container: {
    fontFamily: "Vazir-Light",
    display: "flex",
    flexDirection: "row",
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

//Categories : <Sidebar/> , <Products/>

function Categories() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div>
          <Link to="/" className={classes.link}>
            گوشی موبایل اپل
          </Link>
          <p>اپل</p>
          <p>اپل</p>
          <p>اپل</p>
          <p>اپل</p>
          <p>اپل</p>
          <p>اپل</p>
        </div>

        <div>
          <Link to="/" className={classes.link}>
           گوشی سامسونگ
          </Link>
          <p>سامسونگ</p>
          <p>سامسونگ</p>
          <p>سامسونگ</p>
          <p>سامسونگ</p>
          <p>سامسونگ</p>
          <p>سامسونگ</p>
        </div>

        <div>
          <Link to="/" className={classes.link}>
          گوشی شیائومی
          </Link>
          <p>شیائومی</p>
          <p>شیائومی</p>
          <p>شیائومی</p>
          <p>شیائومی</p>
          <p>شیائومی</p>
          <p>شیائومی</p>
        </div>

        <div>
          <Link to="/" className={classes.link}>
            گوشی هوآوی
          </Link>
          <p>هوآوی</p>
          <p>هوآوی</p>
          <p>هوآوی</p>
          <p>هوآوی</p>
          <p>هوآوی</p>
          <p>هوآوی</p>
        </div>

        <div>
          <Link to="/" className={classes.link}>
        گوشی آنر
          </Link>
          <p>آنر</p>
          <p>آنر</p>
          <p>آنر</p>
          <p>آنر</p>
          <p>آنر</p>
          <p>آنر</p>
        </div>
      </div>

      <div className={classes.Categories}>
        <Link to="/" className={classes.link}>
          گوشی نوکیا
        </Link>
        <p>نوکیا</p>
        <p>نوکیا</p>
        <p>نوکیا</p>
        <p>نوکیا</p>
        <p>نوکیا</p>
        <p>نوکیا</p>
      </div>
    </div>
  );
}

export default Categories;

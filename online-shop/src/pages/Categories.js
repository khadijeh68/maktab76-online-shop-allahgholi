import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
  },
  Categories: {
    marginRight: "15px",
  },
});

function Categories() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div>
          <Link to="/" className={classes.link}>
            گوشی موبایل
          </Link>
          <p>اپل</p>
          <p>سامسونگ</p>
          <p>شیائومی</p>
          <p>هوآوی</p>
          <p>نوکیا</p>
        </div>

        <div>
          <Link to="/" className={classes.link}>
            هدفون و هندزفری
          </Link>
          <p>اپل</p>
          <p>سامسونگ</p>
          <p>شیائومی</p>
          <p>هوآوی</p>
          <p>نوکیا</p>
        </div>

        <div>
          <Link to="/" className={classes.link}>
            کیف و کاور
          </Link>
          <p>اپل</p>
          <p>سامسونگ</p>
          <p>شیائومی</p>
          <p>هوآوی</p>
          <p>نوکیا</p>
        </div>

        <div>
          <Link to="/" className={classes.link}>
            محافظ صفحه نمایش
          </Link>
          <p>اپل</p>
          <p>سامسونگ</p>
          <p>شیائومی</p>
          <p>هوآوی</p>
          <p>نوکیا</p>
        </div>

        <div>
          <Link to="/" className={classes.link}>
            ساعت هوشمند
          </Link>
          <p>اپل</p>
          <p>سامسونگ</p>
          <p>شیائومی</p>
          <p>هوآوی</p>
          <p>آنر</p>
        </div>
      </div>

      <div className={classes.Categories}>
        <Link to="/" className={classes.link}>
          گوشی موبایل
        </Link>
        <p>اپل</p>
        <p>سامسونگ</p>
        <p>شیائومی</p>
        <p>هوآوی</p>
        <p>نوکیا</p>
      </div>
    </div>
  );
}

export default Categories;

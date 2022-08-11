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

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.category}>
      <p className={classes.h4}>دسته بندی کالاها</p>
      <Link to="/" className={classes.link}>
        گوشی موبایل
      </Link>
      <Link to="/" className={classes.link}>
        هدفون و هندزفری
      </Link>
      <Link to="/" className={classes.link}>
        کیف و کاور
      </Link>
      <Link to="/" className={classes.link}>
        محافظ صفحه نمایش
      </Link>
      <Link to="/" className={classes.link}>
        ساعت هوشمند
      </Link>
    </div>
  );
}

export default Home;

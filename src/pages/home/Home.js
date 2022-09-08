import { makeStyles } from "@material-ui/core/styles";
import Categories from "../../components/category/Categories";

const useStyles = makeStyles({
  category: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginTop: "70px",
    alignItems:"center"
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

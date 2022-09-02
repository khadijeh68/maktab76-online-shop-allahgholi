import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    margin: "70px 20px",
    fontFamily: "Vazir-Medium",
  },
});

function Products() {
  const classes = useStyles();
  return <div className={classes.title}>کالاها</div>;
}

export default Products;

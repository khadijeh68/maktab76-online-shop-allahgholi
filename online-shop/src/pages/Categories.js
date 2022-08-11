import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontFamily: "Vazir-Light",
  },
});

function Categories() {
  const classes = useStyles();
  return <div className={classes.title}>کالاها</div>;
}

export default Categories;

// import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    fontSize: 14,
    backgroundColor: "#eee",
    width: "100vw",
    height: "50px",
    position: 'fixed',
    bottom: 0,
    textAlign: 'center'
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>Footer Text</p>
    </div>
  );
}

export default Footer;

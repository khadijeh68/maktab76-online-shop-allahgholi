import { Button, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config/api";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const useStyles = makeStyles({
  page: {
    display: "inline-flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Vazir-Medium",
    color: "black",
    textAlign:"center"
  },
  img: {
    width: "14rem",
    height: "20rem",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 20%)",
  },
});

function ProductCard({productsList,id}) {
  const classes = useStyles();

  return (
    <div>
      {productsList.filter((item) => item.category == id).slice(0, 6).map((product) => {
        return (
          <Link to={`/products/${product.id}`} className="text-decoration-none"  key={product.id}>
            <div className={classes.page}>
              <Card className={classes.img}>
                <Card.Img
                  style={{ width: "100px" }}
                  variant="top"
                  src={`${BASE_URL}/files/${product.image}`}
                  alt="mobile"
                />
                <Card.Body>
                  <Card.Text>{product.name}</Card.Text>
                  <Card.Text>{digitsEnToFa(product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،"))} تومان</Card.Text>
                  <Button  variant="outline-primary" size="sm">توضیحات بیشتر...</Button>
                </Card.Body>
              </Card>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductCard;

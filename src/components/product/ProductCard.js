import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config/api";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import style from "./ProductCard.module.css"

function ProductCard({productsList,id}) {

  return (
    <div>
      {productsList.filter((item) => item.category == id).slice(0, 6).map((product) => {
        return (
          <Link to={`/products/${product.id}`} className="text-decoration-none"  key={product.id}>
            <div className={style.page}>
              <Card className={style.img}>
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

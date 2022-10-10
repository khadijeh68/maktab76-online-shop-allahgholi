import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../config/api";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Card } from "react-bootstrap";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { BsFillExclamationCircleFill } from "react-icons/bs";

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
    textAlign: "center",
    marginTop: "70px",
  },
  img: {
    width: "14rem",
    height: "20rem",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 20%)",
  },
  notFound: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(68, 68, 68)",
    fontFamily: "Vazir-Medium",
    marginTop: "200px"
  }
});

function SearchResult() {
  const { query } = useParams();
  const [data, setData] = useState([]);
  const classes = useStyles();

  const getData = () => {
    axios
      .get(`${BASE_URL}/products?q=${query}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, [query]);

  return data.length === 0 ? (
    <div className={classes.notFound}> <BsFillExclamationCircleFill style={{color: "#ffd400", marginLeft: "5px"}}/>
      نتیجه ای یافت نشد! </div>
  ) : (
    <div>
      {data.map((product) => {
        return (
          <Link
            to={`/products/${product.id}`}
            className="text-decoration-none"
            key={product.id}
          >
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
                  <Card.Text>
                    {digitsEnToFa(
                      product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                    )}{" "}
                    تومان
                  </Card.Text>
                  <Button variant="outline-primary" size="sm">
                    توضیحات بیشتر...
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchResult;

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../config/api";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import style from "./SearchResult.module.css"

function SearchResult() {
  const { query } = useParams();
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`${BASE_URL}/products?q=${query}`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, [query]);

  return data.length === 0 ? (
    <div className={style.notFound}>
      <div className="mb-3">
        <BsFillExclamationCircleFill
          style={{ color: "#ffd400", marginLeft: "5px" }}
        />
        نتیجه ای یافت نشد!
      </div>
      <div>
        <Link to="/" className="text-decoration-none">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  ) : (
    <div>
      {data.map((product) => {
        return (
          <Link
            to={`/products/${product.id}`}
            className="text-decoration-none"
            key={product.id}
          >
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

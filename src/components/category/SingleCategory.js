import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchCategory,
} from "../../redux/features/category/categorySlice";
import { Button, Card } from "react-bootstrap";
import { BASE_URL } from "../../config/api";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { getLists } from "../../redux/features/fiestPage/firstPage";
import styles from "./Sidebar.module.css"

const SingleCategory = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(getLists(categoryId))
      .unwrap()
      .then((res) => setCategory(res));
  }, [dispatch, categoryId]);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {categoryList.map((item) => {
          return (
            <div key={item.id}>
              <Link
                to={`/categories/${item.id}`}
                key={item.id}
                className="text-decoration-none mt-5"
              >
               {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.body}>
        {category.map((item) => {
          return (
            <Link
              to={`/products/${item.id}`}
              className="text-decoration-none"
              key={item.id}
            >
              <div className={styles.page}>
                <Card className={styles.img}>
                  <Card.Img
                    style={{ width: "100px" }}
                    variant="top"
                    src={`${BASE_URL}/files/${item.image}`}
                    alt="mobile"
                  />
                  <Card.Body>
                    <Card.Text style={{textAlign: "center"}}  className={styles.price}>{item.name}</Card.Text>
                    <Card.Text style={{textAlign: "center"}} className={styles.price}>
                      {digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )} تومان 
                    </Card.Text>
                    <Button variant="outline-primary" size="sm">توضیحات بیشتر...  </Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCategory;

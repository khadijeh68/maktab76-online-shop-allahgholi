import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { getCategory, getList } from "../../redux/features/fiestPage/firstPage";
import { Button, Card } from "react-bootstrap";
import { BASE_URL } from "../../config/api";

const useStyles = makeStyles({
  container: {
    fontFamily: "Vazir-Light",
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
  },
  sidebar: {
    width: "200px",
    height: "1210px",
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 30%)",
    fontSize: "18px",
  },
  Categories: {
    marginRight: "15px",
    marginTop: "70px",
  },
  body: {
    margin: "50px",
  },
  page: {
    display: "inline-flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    margin: "20px",
    padding: "20px",
    fontFamily: "Vazir-Medium",
  },
  img: {
    width: "14rem",
    height: "28rem",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 20%)",
  },
});
const SingleCategory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();
  console.log(category);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getList(categoryId))
      .unwrap()
      .then((res) => setCategory(res));
  }, [dispatch, categoryId]);
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        {categoryList.map((category) => {
          return (
            <div key={category.id}>
              <Link
                to={`/categories/${category.id}`}
                key={category.id}
                className="text-decoration-none mt-5"
              >
                {category.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={classes.body}>
        {category.map((item) => {
          return (
            <Link to={`/products/${item.id}`} className="text-decoration-none">
              <div className={classes.page}>
                <Card className={classes.img}>
                  <Card.Img
                    style={{ width: "100px" }}
                    variant="top"
                    src={`${BASE_URL}/files/${item.image}`}
                    alt="mobile"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.os}</Card.Text>
                    <Card.Text>{item.weight}</Card.Text>
                    <Card.Text>{item.size}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    <Button variant="primary">افزودن به سبد خرید</Button>
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

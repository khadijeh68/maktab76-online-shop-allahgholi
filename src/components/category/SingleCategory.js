import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategory, getList } from "../../redux/features/fiestPage/firstPage";
import { Button, Card } from "react-bootstrap";
import { BASE_URL } from "../../config/api";
import { digitsEnToFa } from "@persian-tools/persian-tools";

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
    padding: "20px",
    fontFamily: "Vazir-Medium",
    color: "black"
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

const SingleCategory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();

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
                to={"/categories/" + category.name}
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
                    <Card.Text>{item.name}</Card.Text>
                    <Card.Text>{item.os}</Card.Text>
                    <Card.Text>{item.weight}</Card.Text>
                    <Card.Text>{item.size}</Card.Text>
                    <Card.Text>{digitsEnToFa(item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،"))} تومان </Card.Text>
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

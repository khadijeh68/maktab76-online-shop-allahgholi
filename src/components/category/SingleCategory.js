import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchCategory,
} from "../../redux/features/category/categorySlice";
import { Button, Card } from "react-bootstrap";
import { BASE_URL } from "../../config/api";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { getLists } from "../../redux/features/fiestPage/firstPage";

const useStyles = makeStyles({
  container: {
    fontFamily: "Vazir-Light",
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
   
  },
  sidebar: {
    width: "200px",
    height: "1100px",
    marginTop: "40px",
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
    color: "black",
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
    dispatch(fetchCategory());
    dispatch(getLists(categoryId))
      .unwrap()
      .then((res) => setCategory(res));
  }, [dispatch, categoryId]);

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        {categoryList.map((item) => {
          return (
            <div key={item.id}>
              <Link
                to={"/categories/" + item.name}
                key={item.id}
                className="text-decoration-none mt-5"
              >
               {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={classes.body}>
        {category.map((item) => {
          return (
            <Link
              to={`/products/${item.id}`}
              className="text-decoration-none"
              key={item.id}
            >
              <div className={classes.page}>
                <Card className={classes.img}>
                  <Card.Img
                    style={{ width: "100px" }}
                    variant="top"
                    src={`${BASE_URL}/files/${item.image}`}
                    alt="mobile"
                  />
                  <Card.Body>
                    <Card.Text style={{textAlign: "center"}}>{item.name}</Card.Text>
                    <Card.Text style={{textAlign: "center"}}>
                      {digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )} تومان 
                    </Card.Text>
                    <Button style={{marginRight: "22px"}} variant="outline-primary" size="sm">توضیحات بیشتر...  </Button>
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

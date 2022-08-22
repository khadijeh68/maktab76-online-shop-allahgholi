import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/features/product/productSlice";
import { URL } from "../../../api/http";
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { fetchCategory } from "../../../redux/features/category/categorySlice";


const useStyles = makeStyles({
  page: {
    direction: "ltr",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
});

function Product() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const categoryList = useSelector((state) => state.categories.categoryList);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
    dispatch(fetchCategory());
  }, [currentPage, dispatch]);
  console.log(categoryList)
  // console.log(productsList.length)
  return (
    
    <div className="orders">
      <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت کالا ها</h6>

        <div>
          <Button variant="success" type="submit">
            افزودن کالا
          </Button>
        </div>
      </div>

      <Table striped bordered hover className="w-75 text-center order_table ">
        <thead>
          <tr>
            <th>تصویر</th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
     
          {productsList.length &&
            productsList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={`${URL}/files/${item.image}`} alt="mobile" />
                  </td>
                  <td>{item.name}</td>
                  {/* <td>{categoryList.find(categoty => categoty.id === item.categoty).name}</td> */}
                  <td>-</td>
                  <td>
                    <Button variant="warning" className="mx-1">
                      ویرایش{" "}
                    </Button>
                    <Button variant="danger">حذف</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination
        className={classes.page}
        count={7}
        variant="outlined"
        color="secondary"
        onClick={(e) => setCurrentPage(e.target.textContent)}
      />
    </div>
  );
}

export default Product;

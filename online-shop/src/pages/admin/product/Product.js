import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
} from "../../../redux/features/product/productSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { fetchCategory } from "../../../redux/features/category/categorySlice";
import ProductAddModal from "../../../components/product/ProductAddModal";
import { unwrapResult } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../config/api";
import ProductEditModal from "../../../components/product/ProductEditModal";
import categoryList from "../../../redux/features/category/categorySlice"
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
  const total = useSelector((state) => state.products.total);
 
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const count = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(fetchProducts(currentPage))
      dispatch(fetchCategory());
  }, [currentPage, dispatch]);


  const handleDelete = (id) => {
  dispatch(deleteProduct(id));
  dispatch(fetchProducts())
  };
  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت کالا ها</h6>
      </div>
      <ProductAddModal categoryList={categoryList}/>
    
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
                    {item.id < 30 ? (
                      <img src={`${BASE_URL}/files/${item.image}`} alt="mobile" />
                    ) : (
                      <img src={item.image} alt="mobile" />
                    )}
                  </td>
                  <td>{item.name}</td>
                  <td>
                    {/* {
                      categoryList.find(
                        (category) => category.id === item.category
                      ).name
                    } */}
                  </td>
                  <td>
                    {/* <Button
                      variant="warning"
                      className="mx-1"
                      onClick={handleOpenEdit}
                    >
                      ویرایش
                    </Button> */}
                    <ProductEditModal item={item}/>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      حذف
                    </Button>
                  </td>
               
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination
        className={classes.page}
        count={count}
        variant="outlined"
        color="secondary"
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
}

export default Product;

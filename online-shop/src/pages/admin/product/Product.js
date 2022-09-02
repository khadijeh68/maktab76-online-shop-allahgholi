import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
} from "../../../redux/features/product/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { fetchCategory } from "../../../redux/features/category/categorySlice";
<<<<<<< HEAD
import ProductAddModal from "../../../components/product/ProductAddModal";
import { BASE_URL } from "../../../config/api";
import ProductEditModal from "../../../components/product/ProductEditModal";
=======
import ProductEditModal from "../../../components/product/ProductEditModal";

>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f

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

  const [showEdit, setShowEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const handleOpenEdit = (id) => {
    setShowEdit(true);
    setCurrentProduct(productsList.filter((product) => product.id === id)[0]);
  };

  const [currentPage, setCurrentPage] = useState(1);
<<<<<<< HEAD
  const limit = 5;
  const count = Math.ceil(total / limit);
=======
  // const [state, setState] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
    dispatch(fetchCategory());
  }, [currentPage, dispatch]);

<<<<<<< HEAD
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    // dispatch(fetchProducts());
  };

  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت کالا ها</h6>
      </div>
      <ProductAddModal categoryList={categoryList} />

=======
  // const handleDelete = (id) => {
  //   axios
  //     .delete(`${URL}/products/${id}`)
  //     .then((response) => setState({ productsList: response.filter((f) => f.id !== id)}))
  //     .catch((error) => {
  //       setErrorMessage(error.message);
  //       console.error("There was an error!", error);
  //     });
  // };
  // const handleDelete = async (id) => {
  //   await fetch(`${URL}/products/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //   })

  //   await setState(productsList.filter(p => p.id !== id))
  // }

  const handleEdit = () => {};
  return (
    // `${URL}/products?category=3`
    <div className="orders">
      <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت کالا ها</h6>

        {/* <div>
          <Button variant="success" type="submit" >
            افزودن کالا
          </Button>
        </div> */}
      </div>
      <ProductEditModal />
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
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
                      <img
                        src={`${BASE_URL}/files/${item.image}`}
                        alt="mobile"
                      />
                    ) : (
                      <img src={item.image} alt="mobile" />
                    )}
                  </td>
                  <td>{item.name}</td>
                  <td>
<<<<<<< HEAD
                    {/* {
                      categoryList.find(
                        (category) => category.id === item.category
                      ).name
                    } */}
=======
                    {
                      categoryList.find(
                        (category) => category.id === item.category
                      ).name
                    }
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      className="mx-1"
<<<<<<< HEAD
                      onClick={() => handleOpenEdit(item.id)}
                    >
                      ویرایش
                    </Button>

                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
=======
                      onClick={handleEdit}
                    >
                      ویرایش
                    </Button>
                    <Button variant="danger" >
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
                      حذف
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
<<<<<<< HEAD
      <ProductEditModal showEdit={showEdit} item={currentProduct} setShowEdit={setShowEdit}/>
=======

>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
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

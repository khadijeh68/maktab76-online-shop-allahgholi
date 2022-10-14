import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/features/product/productSlice";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "@mui/material";
import { fetchCategory } from "../../../redux/features/category/categorySlice";
import ProductAddModal from "../../../components/product/ProductAddModal";
import { BASE_URL } from "../../../config/api";
import ProductEditModal from "../../../components/product/ProductEditModal";
import ProductDeleteModal from "../../../components/product/ProductDeleteModal";
import style from "./Product.module.css";
import AdminNavbar from "../../../components/navbar/AdminNavbar";

function Product() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const categoryList = useSelector((state) => state.categories.categoryList);
  const total = useSelector((state) => state.products.total);
  const [showEdit, setShowEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const count = Math.ceil(total / limit);

  const handleOpenEdit = (id) => {
    setShowEdit(true);
    setCurrentProduct(productsList.filter((product) => product.id === id)[0]);
  };

  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
    dispatch(fetchCategory());
  }, [currentPage, dispatch]);

  return (
    <>
    <div className={style.orders}>
      <div className={style.add}>
        <h6>مدیریت کالا ها</h6>
        <ProductAddModal categoryList={categoryList} />
      </div>
     
      <div style={{display: "flex",justifyContent: "center" }}>
      <Table striped bordered hover className={style.table}>
        <thead>
          <tr>
            <th>تصویر</th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th></th>
          </tr>
        </thead>
        <tbody  style={{verticalAlign: "middle" }}>
          {productsList.length &&
            productsList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    {
                      <img
                        src={`${BASE_URL}/files/${item?.image ?? "-"}`}
                        alt="mobile"
                      />
                    }
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {item?.name ?? "-"}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  {item?.category
                      ? categoryList.find(
                          (category) => category.id === item?.category
                        )?.name
                      : "-"}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Button
                      variant="warning"
                      className={style.edit}
                      onClick={() => handleOpenEdit(item.id)}
                      size="sm"
                    >
                      ویرایش
                    </Button>

                    <Button
                      variant="danger"
                      onClick={handleOpenDelete}
                      size="sm"
                      className={style.delete}
                    >
                      حذف
                    </Button>
                    <ProductDeleteModal
                      openDelete={openDelete}
                      handleCloseDelete={handleCloseDelete}
                      itemId={item.id}
                      setOpenDelete={setOpenDelete}
                      currentPage={currentPage}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      </div>
      <ProductEditModal
        showEdit={showEdit}
        item={currentProduct}
        setShowEdit={setShowEdit}
        currentPage={currentPage}
      />
      <Pagination
        className={style.page}
        count={count}
        variant="outlined"
        color="secondary"
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
    </>
  );
}

export default Product;

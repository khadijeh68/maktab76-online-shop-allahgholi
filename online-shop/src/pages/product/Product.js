import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product/productSlice";
import { URL } from "../../api/constants";
import Pagination from "../../components/pagination/Pagination";

// let active = 1;
// let items = [];
// for (let number = 1; number <= 6; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

function Product() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = productsList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                    <img
                      src={`${URL}/files/${item.image}`}
                      alt="mobile"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
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
        productsPerPage={productsPerPage}
        totalProducts={productsList.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Product;

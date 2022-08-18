import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/product/productSlice";
import { URL } from "../../api/http";

function Product() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
    </div>
  );
}

export default Product;

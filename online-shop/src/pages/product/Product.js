import { Link } from "@mui/material";
import { Button,  Table } from "react-bootstrap";

function Product() {
  return ( <div className="orders">
    <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت کالا ها</h6>

        <div>
          <Button variant="success" type="submit">
            افزودن کالا
          </Button>
        </div>
      </div>

  <Table striped bordered hover className="w-75 text-center order_table">
    <thead>
      <tr>
        <th>تصویر</th>
        <th>نام کالا</th>
        <th>دسته بندی</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td><Link className="mx-1">ویرایش </Link><Link>حذف</Link></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td><Link className="mx-1">ویرایش </Link><Link>حذف</Link></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td><Link className="mx-1">ویرایش </Link><Link>حذف</Link></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td><Link className="mx-1">ویرایش </Link><Link>حذف</Link></td>
      </tr>
    </tbody>
  </Table>
</div>)
}

export default Product;

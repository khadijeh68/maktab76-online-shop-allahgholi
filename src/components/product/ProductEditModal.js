import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  fetchProducts,
  updateProduct,
} from "../../redux/features/product/productSlice";
import instance from "../../api/http";
import { makeStyles } from "@material-ui/core";
import { Button, Form } from "react-bootstrap";

const useStyles = makeStyles({
  body: {
    fontFamily: "Vazir-Medium",
  },
});

function ProductEditModal({ showEdit, item, setShowEdit }) {
  const classes = useStyles();
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState();

  const dispatch = useDispatch();
  const handleClose = () => setShowEdit(false);

  const handlePicture = (e) => {
    let file = e.target.files[0];
    const form = new FormData();
    form.append("image", file);
    instance.post("/upload", form).then((res) => setImage([res.data.filename]));
    let pic = URL.createObjectURL(file);
  };

  const [newProduct, setNewProduct] = useState({
    name: item.name,
    // image:item.image,
    color: item.color,
    price: item.price,
    quantity: item.quantity,
    category: item.category,
    // description:item.description
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // const { name, category, colors, price } = newProduct;
  const handleSubmit = (e) => {
    e.preventDefault();
    const productId = item.id;
    const data = { ...newProduct, image, description };
    console.log(data);
    dispatch(updateProduct({ id: productId, product: data }));
    dispatch(fetchProducts());
  };

  return (
    <div>
      <Modal show={showEdit} className={classes.body}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>افزودن/ ویرایش کالا</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="m-2">
              <Form.Label>تصویر کالا:</Form.Label>
              <Form.Control type="file" onChange={(e) => handlePicture(e)} />
              {/* <img src={item.image} alt="" /> */}
            </Form.Group>

            <Form.Group className="m-2">
              <Form.Label>نام کالا:</Form.Label>
              <Form.Control
                type="text"
                required
                name="name"
                value={item.name}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>دسته بندی:</Form.Label>
              <Form.Select
                name="category"
                required
                value={item.category}
                onChange={(e) => handleChange(e)}
              >
                <option value="DEFAULT" disabled>
                  انتخاب کنید
                </option>
                <option>اپل</option>
                <option>سامسونگ</option>
                <option>شیائومی</option>
                <option>هوآوی</option>
                <option>آنر</option>
                <option>نوکیا</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>رنگ :</Form.Label>
              <Form.Select
                name="color"
                required
                value={item.color}
                onChange={(e) => handleChange(e)}
              >
                <option value="DEFAULT" disabled>
                  انتخاب کنید
                </option>
                <option>طلایی</option>
                <option>نقره ای</option>
                <option>آبی</option>
                <option>مشکی</option>
                <option>سبز</option>
                <option>صورتی</option>
                <option>سفید</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>تعداد:</Form.Label>
              <Form.Control
                type="number"
                required
                name="name"
                value={item.quantity}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>قیمت کالا:</Form.Label>
              <Form.Control
                type="text"
                required
                name="price"
                value={item.price}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Label className="m-2"> توضیحات:</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data={item.description}
              name="description"
              sx={{ height: 50 }}
              initData="<p>Hello from CKEditor 4!</p>"
              onChange={(e, editor) => setDescription(editor.getData())}
            />
            <Button type="submit" className="m-2" variant="success">
              ذخیره
            </Button>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              بستن
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProductEditModal;

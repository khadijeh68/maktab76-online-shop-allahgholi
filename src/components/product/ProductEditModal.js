import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  body: {
    fontFamily: "Vazir-Medium",
  },
});

function ProductEditModal({ showEdit, item, setShowEdit, currentPage }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(item.quantity);
  const [color, setColor] = useState(item.color);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);
  const handleClose = () => setShowEdit(false);
  const categoryList = useSelector((state) => state.categories.categoryList);

  const handlePicture = (e) => {
    let file = e.target.files[0];
    const form = new FormData();
    form.append("image", file);
    instance.post("/upload", form).then((res) => setImage([res.data.filename]));
  };

  const handleSubmit = (e, id) => {
    const newProduct = { name, price, quantity, color, category: Number(category), description };
    e.preventDefault();
    dispatch(updateProduct({ id, newProduct }))
      .then(unwrapResult)
      .then(() => {
        toast.success("ویرایش کالا با موفقیت انجام شد", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(fetchProducts(currentPage));
      });
    setShowEdit(false);
  };

  return (
    <div>
      <Modal show={showEdit} className={classes.body}>
        <Modal.Header onClick={handleClose}>
          <Modal.Title>افزودن/ ویرایش کالا</Modal.Title>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            style={{ marginRight: "230px" }}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e, item.id)}>
            <Form.Group className="m-2">
              <Form.Label>تصویر کالا:</Form.Label>
              <Form.Control type="file" onChange={(e) => handlePicture(e)} />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>نام کالا:</Form.Label>
              <Form.Control
                type="text"
                required
                name="name"
                defaultValue={item.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>دسته بندی:</Form.Label>
              <Form.Select
                name="category"
                required
                defaultValue={item.category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryList.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>رنگ :</Form.Label>
              <Form.Select
                name="color"
                required
                defaultValue={item.color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option selected disabled>
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
                defaultValue={item.quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>قیمت کالا:</Form.Label>
              <Form.Control
                type="text"
                required
                name="price"
                defaultValue={item.price}
                onChange={(e) => setPrice(Number(e.target.value))}
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

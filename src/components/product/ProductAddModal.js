import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createProduct,
  fetchProducts,
} from "../../redux/features/product/productSlice";
import "../../index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { instance } from "../../api/http";
import { makeStyles } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  body: {
    fontFamily: "Vazir-Medium",
  },
});

function ProductAddModal() {
  const classes = useStyles();
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [color, setColor] = useState();
  const [description, setDescription] = useState();
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const handlePicture = (e) => {
    let file = e.target.files[0];
    const form = new FormData();
    form.append("image", file);
    instance.post("/upload", form).then((res) => setImage([res.data.filename]));
    let pic = URL.createObjectURL(file);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    e.preventDefault();
    const data = newProduct();
    dispatch(createProduct(data))
      .then(unwrapResult)
      .then(() => {
        toast.success("کالا با موفقیت اضافه شد", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        dispatch(fetchProducts());
      });
    setShow(false);
    setImage("");
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setColor("");
    setDescription("");
  };
  const newProduct = () => {
    const product = {
      image,
      name,
      category,
      price,
      quantity,
      color,
      description,
    };
    return product;
  };

  return (
    <>
      <Button variant="success" onClick={handleOpen} className="btn-products">
        افزودن کالا
      </Button>
      <Modal show={show} className={classes.body}>
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
          <Form onSubmit={(e) => handleSubmit(e)} validated={validated}>
            <Form.Group className="m-2" controlId="validationCustom01">
              <Form.Label>تصویر کالا:</Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => handlePicture(e)}
              />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              تصویر کالا ا وارد کنید
            </Form.Control.Feedback>
            <Form.Group className="m-2" controlId="validationCustom02">
              <Form.Label>نام کالا:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              نام کالا را وارد کنید
            </Form.Control.Feedback>
            <Form.Group className="m-2" controlId="validationCustom03">
              <Form.Label>دسته بندی:</Form.Label>
              <Form.Select
                defaultValue={"DEFAULT"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
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
            <Form.Control.Feedback type="invalid">
              دسته بندی کالا را انتخاب کنید
            </Form.Control.Feedback>
            <Form.Group className="m-2" controlId="validationCustom04">
              <Form.Label>رنگ :</Form.Label>
              <Form.Select
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                defaultValue={"DEFAULT"}
                required
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
            <Form.Control.Feedback type="invalid">
              رنگ کالا را وارد کنید
            </Form.Control.Feedback>
            <Form.Group className="m-2" controlId="validationCustom05">
              <Form.Label>تعداد کالا:</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                name="quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
              />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              تعداد کالا را وارد کنید
            </Form.Control.Feedback>
            <Form.Group className="m-2" controlId="validationCustom06">
              <Form.Label>قیمت کالا:</Form.Label>
              <Form.Control
                type="text"
                value={price}
                name="price"
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              قیمت کالا را وارد کنید
            </Form.Control.Feedback>
            <Form.Label className="m-2"> توضیحات:</Form.Label>
            <CKEditor
              editor={ClassicEditor}
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
    </>
  );
}

export default ProductAddModal;

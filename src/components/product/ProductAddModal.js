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

function ProductAddModal() {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [colors, setColors] = useState();
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
    e.preventDefault();
    const data = newProduct();
    dispatch(createProduct(data));
    console.log(data);
    dispatch(fetchProducts());
    setShow(false);
  };
  const newProduct = () => {
    const product = {
      image,
      name,
      category,
      price,
      quantity,
      colors,
      description,
    };
    return product;
  };

  return (
    <>
      <Button variant="success" onClick={handleOpen} className="btn-products">
        افزودن کالا
      </Button>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>افزودن/ ویرایش کالا</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mt-2">
              <label>تصویر کالا:</label>
              <input type="file" onChange={(e) => handlePicture(e)} />
            </div>
            <div className="mt-2">
              <label>نام کالا:</label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label>دسته بندی:</label>
              <select
                defaultValue={"DEFAULT"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              </select>
            </div>
            <div className="mt-2">
              <label>رنگ :</label>
              <select
                name="color"
                value={colors}
                onChange={(e) => setColors(e.target.value)}
                defaultValue={"DEFAULT"}
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
              </select>
            </div>
            <div className="mt-2">
              <label>تعداد کالا:</label>
              <input
                type="number"
                value={quantity}
                name="quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <div className="mt-2">
              <label>قیمت کالا:</label>
              <input
                type="text"
                value={price}
                name="price"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <label> توضیحات:</label>
            <CKEditor
              editor={ClassicEditor}
              sx={{ height: 50 }}
              initData="<p>Hello from CKEditor 4!</p>"
              onChange={(e, editor) => setDescription(editor.getData())}
            />
            <button type="submit" className=" btn btn-primary">
              ذخیره
            </button>
            <button
              type="submit"
              className=" btn btn-primary"
              onClick={handleClose}
            >
              بستن
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductAddModal;

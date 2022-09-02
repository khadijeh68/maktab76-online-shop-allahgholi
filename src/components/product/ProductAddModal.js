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
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function ProductAddModal() {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = newProduct();
    dispatch(createProduct(data));
    console.log(data)
    dispatch(fetchProducts());
    setShow(false);
  };
  const newProduct = () => {
    const product = {
      image,
      name,
      category,
      description,
    };
    return product;
  };

  const handlePicture = (e) => {
    let file = e.target.files[0];
    let pic = URL.createObjectURL(file);
    setImage(pic);
  };
  return (
    <>
      <Button variant="success" onClick={handleOpen} className="btn-products">
        افزودن کالا
      </Button>
      <Modal show={show} >
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
            <label> توضیحات:</label>
            <CKEditor
              editor={ClassicEditor}
              sx={{ height: 50 }}
              initData="<p>Hello from CKEditor 4!</p>"
              onChange={(e, editor) => setDescription(editor.getData())}
            />
            <button type="submit" className=" btn btn-primary" >
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

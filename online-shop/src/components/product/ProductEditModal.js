<<<<<<< HEAD
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { BASE_URL } from "../../config/api";
import {
  fetchProducts,
  updateProduct,
} from "../../redux/features/product/productSlice";
import { Button } from "react-bootstrap";

function ProductEditModal({ item }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleOpenEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);
 
  const dispatch = useDispatch();
  
  const [description, setDescription] = useState("");
  const [newProduct, setNewProduct] = useState({
    image: item.image,
    name: item.name,
    category: item.category,
  });
  console.log(newProduct);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const { image, name, category } = newProduct;
  const handleSubmit = (e) => {
    e.preventDefault();
    const productId = item.id;
    dispatch(updateProduct(productId, newProduct));
    dispatch(fetchProducts());
    setShowEdit(false);
=======
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Edit from "./Edit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/product/productSlice";


function ProductEditModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setImage(e.target.value);
    setName(e.target.value);
    setCat(e.target.value);
    setDes(e.target.value);
  };

  const handleSubmit = () => {
    if (image.length && name.length && cat.length && des.length > 0) {
      dispatch(
        addProduct({
          image: image,
          name: name,
          category: cat,
          description: des,
        })
      );
      setImage("");
      setName("");
      setCat("");
      setDes("");
    }
>>>>>>> origin/develop
  };

  return (
    <>
<<<<<<< HEAD
      <Button
        variant="warning"
        onClick={handleOpenEdit}
        className="btn-product"
      >
        ویرایش
      </Button>
      <Modal showEdit={showEdit}>
        <Modal.Header closeButton onClick={handleCloseEdit}>
          <Modal.Title>افزودن/ ویرایش کالا</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mt-2">
              <label>تصویر کالا:</label>
              <input
                type="file"
                name="image"
                value={image}
                src={`${BASE_URL}/files/${item.image}`}
              />
            </div>
            <div className="mt-2">
              <label>نام کالا:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-2">
              <label>دسته بندی:</label>
              <select name="category" value={category} onChange={(e) => handleChange(e)}>
=======
      <Button variant="success" onClick={handleShow} className="w-25">
        افزودن کالا
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>افزودن/ ویرایش کالا</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3 ">
              <Form.Label>تصویر کالا:</Form.Label>
              <Form.Control type="file" onChange={handleChange} />
              <Form.Label>نام کالا:</Form.Label>
              <Form.Control type="text" value={name} onChange={handleChange} />
              <Form.Label>دسته بندی:</Form.Label>
              <Form.Select  onChange={handleChange}>
>>>>>>> origin/develop
                <option disabled selected>
                  انتخاب کنید
                </option>
                <option>اپل</option>
                <option>سامسونگ</option>
                <option>شیائومی</option>
                <option>هوآوی</option>
                <option>آنر</option>
<<<<<<< HEAD
                <option>نوکیا</option>
              </select>
            </div>
            <label> توضیحات:</label>
            <CKEditor
              editor={ClassicEditor}
              value={description}
              name="description"
              sx={{ height: 50 }}
              initData="<p>Hello from CKEditor 4!</p>"
              onChange={(e, editor) => setDescription(editor.getData())}
            />
            <button type="submit" className=" btn btn-success">
              ذخیره
            </button>
          </form>
        </Modal.Body>
      </Modal>
=======
              </Form.Select>
              <Form.Label> توضیحات:</Form.Label>
              <Edit onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Product name={name}/> */}
>>>>>>> origin/develop
    </>
  );
}

export default ProductEditModal;

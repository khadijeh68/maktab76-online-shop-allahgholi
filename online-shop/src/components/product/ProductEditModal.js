import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Edit from "./Edit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/product/productSlice";
import Product from "../../pages/admin/product/Product";

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
  };

  return (
    <>
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
                <option disabled selected>
                  انتخاب کنید
                </option>
                <option>اپل</option>
                <option>سامسونگ</option>
                <option>شیائومی</option>
                <option>هوآوی</option>
                <option>آنر</option>
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
    </>
  );
}

export default ProductEditModal;

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

  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   setImage(e.target.value);
  //   setName(e.target.value);
  //   setCat(e.target.value);
  //   setDes(e.target.value);
  // };

  const handleSubmit = (e) => {
    // console.log("hello");
    e.preventDefault();

    dispatch(
      addProduct({
        image: image,
        name: name,
        category: category,
        description: description,
      })
    );
    handleClose();
  };

  const handlePicture = (e) => {
    let file = e.target.files[0]
    let pic = URL.createObjectURL(file)
    setImage(pic)
    }
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>تصویر کالا:</label>
            <input type="file"  onChange={(e) => handlePicture(e)}/>
            <label>نام کالا:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>دسته بندی:</label>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option disabled selected>
                انتخاب کنید
              </option>
              <option>اپل</option>
              <option>سامسونگ</option>
              <option>شیائومی</option>
              <option>هوآوی</option>
              <option>آنر</option>
            </select>
            <label> توضیحات:</label>
            <Edit value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">اضافه کردن</button>
          </form>
          {/* <Form>
            <Form.Group
              controlId="formFile"
              className="mb-3 "
              onSubmit={(e) => handleSubmit(e)}
            >
              <label>تصویر کالا:</label>
              <input type="file" />
              <Form.Label>نام کالا:</Form.Label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label>دسته بندی:</Form.Label>
              <Form.Select onChange={(e) => setCat(e.target.value)}>
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
              <Edit value={des} onChange={(e) => setDes(e.target.value)} />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              بستن
            </Button>
            <Button variant="primary" type="submit">
              ذخیره
            </Button>
          </Form> */}
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
      {/* <Product name={name}/> */}
    </>
  );
}

export default ProductEditModal;

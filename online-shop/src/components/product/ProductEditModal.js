import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Edit from "./Edit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/product/productSlice";
import "../../index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function ProductEditModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
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
    let file = e.target.files[0];
    let pic = URL.createObjectURL(file);
    setImage(pic);
  };
  return (
    <>
      <Button variant="success" onClick={handleShow} className="btn-product">
        افزودن کالا
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>افزودن/ ویرایش کالا</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div className="mt-2">
              <label>تصویر کالا:</label>
              <input type="file" onChange={(e) => handlePicture(e)} />
            </div>
            <div className="mt-2">
              <label>نام کالا:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-2">
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
            {/* <Edit
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            /> */}
            <button type="submit" className=" btn btn-primary">
              ذخیره
            </button>
          </form>
      
        </Modal.Body>

        
      </Modal>

    </>
  );
}

export default ProductEditModal;

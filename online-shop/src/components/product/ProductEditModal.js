import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../index.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  fetchProducts,
  updateProduct,
} from "../../redux/features/product/productSlice";

function ProductEditModal({ showEdit, item, setShowEdit }) {
  const dispatch = useDispatch();
  const handleClose = () => setShowEdit(false);
  console.log(item);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  console.log("showEdit", showEdit);

  // useEffect(() => {
  //   setShowEdit(showEdit);
  //   console.log(showEdit)
  // }, [setShowEdit, showEdit]);

  const [newProduct, setNewProduct] = useState({
    // image: item.image,
    name: item.name,
    category: item.category,
    os: item.os,
    price: item.price,
  });
  const [description, setDescription] = useState([]);
  console.log(newProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const { name, category, os, price } = newProduct;
  const handleSubmit = (e) => {
    e.preventDefault();
    const productId = item.id;
    dispatch(updateProduct(productId, newProduct));
    dispatch(fetchProducts());
  };

  return (
    <>
      {/* <Button
        variant="warning"
        onClick={handleOpenEdit}
        className="btn-product"
      >
        ویرایش
      </Button> */}
      <Modal show={showEdit}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>افزودن/ ویرایش کالا</Modal.Title>
        </Modal.Header>
        <div className="mt-2">
          {/* <label>تصویر کالا:</label>
              <input
                type="file"
                name="image"
                value={image}
                src={`${BASE_URL}/files/${item.image}`}
              /> */}
        </div>
        <Modal.Body>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mt-2">
              <label>دسته بندی:</label>
              <select
                name="category"
                value={category}
                onChange={(e) => handleChange(e)}
                defaultValue={"DEFAULT"}
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
              <label>نام کالا:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-2">
              <label>سیستم عامل :</label>
              <input
                type="text"
                name="os"
                value={os}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-2">
              <label>قیمت کالا:</label>
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => handleChange(e)}
              />
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
    </>
  );
}

export default ProductEditModal;

import Modal from "react-bootstrap/Modal";
import {  useState } from "react";
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
    description:item.description
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // const { name, category, colors, price } = newProduct;
  const handleSubmit = (e) => {
    e.preventDefault();
    const productId = item.id;
    const data = { ...newProduct,image};
    console.log(data)
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="m-2">
              <label>نام کالا:</label>
              <input
                type="text"
                required
                name="name"
                value={item.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="m-2">
              <label>تصویر کالا:</label>
              <input type="file" onChange={(e) => handlePicture(e)} />
              <img src={item.image} alt="" />
            </div>
            <div className="m-2">
              <label>رنگ :</label>
              <select
                name="color"
                required
                value={item.color}
                onChange={(e) => handleChange(e)}
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
            <div className="m-2">
              <label>قیمت کالا:</label>
              <input
                type="text"
                required
                name="price"
                value={item.price}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="m-2">
              <label>تعداد:</label>
              <input
                type="number"
                required
                name="name"
                value={item.quantity}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="m-2">
              <label>دسته بندی:</label>
              <select
                name="category"
                required
                value={item.category}
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

            <label className="m-2"> توضیحات:</label>
            <CKEditor
              editor={ClassicEditor}
              data={item.description}
              name="description"
              sx={{ height: 50 }}
              initData="<p>Hello from CKEditor 4!</p>"
              onChange={(e, editor) => setDescription(editor.getData())}
            />
            <button type="submit" className=" btn btn-success m-2">
              ذخیره
            </button>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              بستن
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProductEditModal;

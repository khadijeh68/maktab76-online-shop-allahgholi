import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import style from "./DeleteModal.module.css";
import { removeItem } from "../../redux/features/cart/cartSlice";

function DeleteModal({ openDelete, handleCloseDelete, itemId, setOpenDelete }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeItem(id));
    setOpenDelete(false);
  };

  return (
    <Modal show={openDelete} animation={true} className={style.body}>
      <Modal.Header onClick={handleCloseDelete} className={style.modalHeader}>
        <Modal.Title className={style.modalTitle}>حذف کالا</Modal.Title>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          style={{margin: 0, fontSize: "12px"}}
        ></button>
      </Modal.Header>
      <Modal.Body className={style.modalBody}>
        <p>کالای مورد نظر از لیست کالا حذف شود؟</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" size="sm" onClick={() => handleDelete(itemId)}>
          بله
        </Button>
        <Button variant="danger" size="sm" onClick={handleCloseDelete}>
          خیر
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;

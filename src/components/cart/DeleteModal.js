import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import { removeItem } from "../../redux/features/cart/cartSlice";


const useStyles = makeStyles({
  body: {
    fontFamily: "Vazir-Medium",
  },
});

function DeleteModal({ openDelete, handleCloseDelete, itemId, setOpenDelete }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = (id) => {
    dispatch(removeItem(id))
    setOpenDelete(false);
  };


  return (
    <Modal show={openDelete} animation={true} className={classes.body}>
      <Modal.Header closeButton onClick={handleCloseDelete}>
        <Modal.Title>حذف کالا</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>کالای مورد نظر از لیست کالا حذف شود؟</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => handleDelete(itemId)}>
          بله
        </Button>
        <Button variant="danger" onClick={handleCloseDelete}>
          خیر
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;

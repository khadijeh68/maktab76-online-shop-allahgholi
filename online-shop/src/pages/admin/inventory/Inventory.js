import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../../../redux/features/inventory/inventorySlice";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const useStyles = makeStyles({
  page: {
    direction: "ltr",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px"
  }
})

function Inventory() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const inventoriesList = useSelector(
    (state) => state.inventory.inventoriesList
  );
  const [currentPage, setCurrentPage] = useState("");
 

  useEffect(() => {
    dispatch(fetchInventory(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت موجودی و قیمت ها</h6>

        <div>
          <Button variant="primary" type="submit">
            ذخیره
          </Button>
        </div>
      </div>

      <Table striped bordered hover className="w-75 text-center order_table">
        <thead>
          <tr>
            <th>کالا</th>
            <th>قیمت به تومان</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {inventoriesList.length &&
            inventoriesList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{digitsEnToFa(item.price)}</td>
                  <td>{digitsEnToFa(item.quantity)}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination className={classes.page}
        count={2} variant="outlined" color="secondary"
        onClick={(e) => setCurrentPage(e.target.textContent)}
      />
    </div>
  );
}

export default Inventory;

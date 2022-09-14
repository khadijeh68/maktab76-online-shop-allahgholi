import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../../../redux/features/inventory/inventorySlice";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

const useStyles = makeStyles({
  page: {
    direction: "ltr",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
});

function Inventory() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const total = useSelector((state) => state.inventory.total);
  const [currentPage, setCurrentPage] = useState(1);
  const inventoriesList = useSelector(
    (state) => state.inventory.inventoriesList
  );
  const limit = 5;
  const count = Math.ceil(total / limit);

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
                  <td style={{ verticalAlign: "middle", maxWidth: "100px" }}>
                    {item.name}
                  </td>
                  <td style={{ maxWidth: "70px" }}>
                    <EditText
                      value={digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}
                    />
                  </td>
                  <td style={{ maxWidth: "50px" }}>
                    <EditText
                      name="quantity"
                      value={digitsEnToFa(
                        item.quantity
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination
        className={classes.page}
        count={count}
        variant="outlined"
        color="secondary"
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
}

export default Inventory;

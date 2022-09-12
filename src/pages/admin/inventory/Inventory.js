import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInventory,
  headerInventory,
  updateInventory,
} from "../../../redux/features/inventory/inventorySlice";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useCallback } from "react";
import { updateProduct } from "../../../redux/features/product/productSlice";

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
  const initialState = [
    { id: 1, price: 1000, quantity: 5 },
    { id: 2, price: 2000, quantity: 6 },
  ];
  const [product, setProduct] = useState(initialState);
  const [id, setId] = useState();

  const limit = 5;
  const count = Math.ceil(total / limit);
  const inventoriesList = useSelector(
    (state) => state.inventory.inventoriesList
  );

  useEffect(() => {
    dispatch(fetchInventory(currentPage))
      .unwrap()
      .then((res) => setProduct(res));
  }, [currentPage, dispatch]);

  const handleChange = (price, quantity, id) => {
    setId(id);
    setProduct((item) => 
    item.map((obj) => {
        if (obj.id === id) {
          return { ...obj, price: price, quantity: quantity };
        }
        return obj;
      })
    );
  };

  const onSubmit = useCallback(() => {
    const item = product.find((item) => item.id === id);
    if (id) {
      const updatedProduct = {
        price: item.price,
        quantity: item.quantity,
      };
      dispatch(updateProduct({ id, updatedProduct }))
        .unwrap()
        .then(() => fetchInventory());
    }
  }, [dispatch, id, product]);

  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت موجودی و قیمت ها</h6>

        <div>
          <Button
            variant="primary"
            type="submit"
            disabled={!id}
            onClick={onSubmit}
          >
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
                  <td>
                    <input
                      name="price"
                      value={digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}
                      onChange={(e) =>
                        handleChange(e.target.value, item.quantity, item.id)
                      }
                    />
                  </td>
                  <td>
                    <input
                      name="quantity"
                      value={digitsEnToFa(
                        item.quantity
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}
                      onChange={(e) =>
                        handleChange(e.target.value, item.quantity, item.id)
                      }
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

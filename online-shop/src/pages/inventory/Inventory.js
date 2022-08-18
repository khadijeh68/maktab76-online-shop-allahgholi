import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../../redux/features/inventory/inventorySlice";

function Inventory() {
  const dispatch = useDispatch();
  const inventoriesList = useSelector(
    (state) => state.inventory.inventoriesList
  );

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

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
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {inventoriesList.length &&
            inventoriesList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Inventory;

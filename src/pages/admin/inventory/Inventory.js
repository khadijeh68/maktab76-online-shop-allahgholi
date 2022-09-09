import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory, headerInventory ,updateInventory} from "../../../redux/features/inventory/inventorySlice";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import $ from 'jquery';
const useStyles = makeStyles({
  page: {
    direction: "rtl",
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
  const inventoriesList = useSelector(
    (state) => state.inventory.inventoriesList
  );
  const total = useSelector((state) => state.inventory.total);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const count = Math.ceil(total /limit);
  console.log(total)
  useEffect(() => {
    dispatch(fetchInventory(currentPage));
  }, [currentPage, dispatch]);

  function handleChange(e) {
    e.preventDefault();
    // setText(e.target.value);
  
  }

  function onSubmit(e) {
    e.preventDefault();
    // setTextField();
  }
  const changeTag = () =>{
    // $('td').click(function () {
    //   $(this).replaceWith(function () {
    //       console.log("Text is "+ $(this).text());
    //       return '<input  value="' + $(this).text() + '"> </input>';
    //   });
    // })
    
  }


  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت موجودی و قیمت ها</h6>

        <div>
          <Button variant="primary" type="submit" onClick={onSubmit}>
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
                  <td onClick={changeTag}>{digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}
                    {/* <input
                      value={digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}
                      onChange={handleChange}
                    /> */}
                  </td>
                  <td onClick={changeTag}>{digitsEnToFa(item.quantity)}
                    {/* <input
                      value=
                      onChange={handleChange}
                    /> */}
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
        onChange={(event,value) => setCurrentPage(value)}
      />
    </div>
  );
}

export default Inventory;

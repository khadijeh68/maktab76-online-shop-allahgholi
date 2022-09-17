import React, { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";
import { fetchProducts } from "../../../redux/features/product/productSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import instance from "../../../api/http";

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
  const total = useSelector((state) => state.products.total);
  const productsList = useSelector((state) => state.products.productsList);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const count = Math.ceil(total / limit);
  const [state, setState] = useState([]);
  const [newPrice, setNewPrice] = useState([]);
  const [editPrice, setEditPrice] = useState(false);
  const [editQuantity, setEditQuantity] = useState(false);
  const [displayButton, setDisplayButton] = useState('false')

  // price
  const handleChange = (e, id) => {
    setDisplayButton('true')
    const idx = state.findIndex((item) => item.id === id);
    const newPost = [...state];
    newPost[idx] = { ...newPost[idx], price: e.target.value };
    const newPriceList = [...newPrice];

    const newIdx = newPrice.findIndex((item) => item.id === id);
    if (newIdx === -1) {
      const newObject = {
        id: id,
        newValPrice: e.target.value,
        newValStock: newPost[idx].quantity,
      };
      newPriceList.push(newObject);
    } else {
      newPriceList[newIdx].newValPrice = e.target.value;
    }
    setNewPrice(newPriceList);
  };

  // // Stock
  const handleChangeStock = (e, id) => {
    setDisplayButton('true')
    const idx = state.findIndex((item) => item.id === id);
    const newPost = [...state];
    newPost[idx] = { ...newPost[idx], quantity: e.target.value };
    const newStockList = [...newPrice];

    const newIdx = newPrice.findIndex((item) => item.id === id);
    if (newIdx === -1) {
      const newObject = {
        id: id,
        newValPrice: newPost[idx].price,
        newValStock: e.target.value,
      };
      newStockList.push(newObject);
    } else {
      newStockList[newIdx].newValStock = e.target.value;
    }
    setNewPrice(newStockList);
  };


const cancelEdit = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setDisplayButton('false')
      setState([]);
      setEditQuantity(false);
      setEditPrice(false);  
    }
  });
};

  useEffect(() => {
    dispatch(fetchProducts(currentPage))
      .unwrap()
      .then((res) => setState(res.data));
      cancelEdit();
      setState([]);
  }, [currentPage, dispatch,displayButton]);

  const saveEdit = (e) => {
    e.preventDefault();
    newPrice.forEach((element) => {
      console.log(element);
      try {
        let entiresData = {
          price: Number(element.newValPrice),
          quantity: Number(element.newValStock),
        };
        instance
          .patch(`http://localhost:3002/products/${element.id}`, entiresData)
          .then(() => {
            dispatch(fetchProducts(currentPage));
            setEditPrice(false);
            setEditQuantity(false);
            setDisplayButton('false')
          });
      } catch (error) {
        console.log("error!");
      }
    });
  };

  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between mx-3">
        <h6>مدیریت موجودی و قیمت ها</h6>
        <div>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              saveEdit(e);
            }}
            disabled={displayButton === 'false'}
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
          {productsList.length &&
            productsList.map((item) => {
              return (
                <tr key={item.id}>
                  <td style={{ verticalAlign: "middle", maxWidth: "100px" }}>
                    {item.name}
                  </td>
                  {editPrice ? (
                    <td style={{ maxWidth: "70px" }}>
                      <input
                        defaultValue={item.price}
                        onChange={(e) => {
                          handleChange(e, item.id);
                        }}
                      />
                    </td>
                  ) : (
                    <td onClick={() => setEditPrice(true)}>
                      {digitsEnToFa(item.price.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،"))}
                    </td>
                  )}
                  {editQuantity ? (
                    <td style={{ maxWidth: "50px" }}>
                      <input
                        name="quantity"
                        defaultValue={item.quantity}
                        onChange={(e) => {
                          handleChangeStock(e, item.id);
                        }}
                      />
                    </td>
                  ) : (
                    <td onClick={() => setEditQuantity(true)}>
                      {digitsEnToFa(item.quantity)}
                    </td>
                  )}
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

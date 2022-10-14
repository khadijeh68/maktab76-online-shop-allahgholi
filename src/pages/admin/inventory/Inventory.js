import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { fetchProducts } from "../../../redux/features/product/productSlice";
import instance from "../../../api/http";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import style from "./Inventory.module.css";
import {BASE_URL} from "../../../config/api"
 
function Inventory() {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.products.total);
  const productsList = useSelector((state) => state.products.productsList);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const count = Math.ceil(total / limit);
  const [state, setState] = useState([]);
  const [newPrice, setNewPrice] = useState([]);
  const [editPrice, setEditPrice] = useState(null);
  const [editQuantity, setEditQuantity] = useState(null);
  const [displayButton, setDisplayButton] = useState("false");


  // price
  const handleChange = (e, id) => {
    setDisplayButton("true");
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
    setDisplayButton("true");
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
        setDisplayButton("false");
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
  }, [currentPage, dispatch, displayButton]);

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
          .patch(`${BASE_URL}/products/${element.id}`, entiresData)
          .then(() => {
            dispatch(fetchProducts(currentPage))
              .then(unwrapResult)
              .then(() => {
                toast.success("تغییرات با موفقیت اعمال شد", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              });
            setEditPrice(null);
            setEditQuantity(null);
            setDisplayButton("false");
          });
      } catch (error) {
        console.log("error!");
      }
    });
  };

  return (
    <div className={style.orders}>
      <div className={style.save}>
        <h6>مدیریت موجودی و قیمت ها</h6>
        <div>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              saveEdit(e);
            }}
            disabled={displayButton === "false"}
          >
            ذخیره
          </Button>
        </div>
      </div>
      <div style={{display: "flex",justifyContent: "center" }}>
      <Table striped bordered hover className={style.table}>
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
                  <td className={style.td} >
                    {item.name}
                  </td>
                  {editPrice===item.id ? (
                    <td>
                      <input
                        defaultValue={item.price}
                        className={style.price}
                        onChange={(e) => {
                          handleChange(e, item.id);
                        }}
                      />
                    </td>
                  ) : (
                    <td onClick={() => setEditPrice(item.id)}>
                      {digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}
                    </td>
                  )}
                  {editQuantity===item.id ? (
                    <td>
                      <input
                        name="quantity"
                        className={style.quantity}
                        defaultValue={item.quantity}
                        onChange={(e) => {
                          handleChangeStock(e, item.id);
                        }}
                      />
                    </td>
                  ) : (
                    <td onClick={() => setEditQuantity(item.id)}>
                      {digitsEnToFa(item.quantity)}
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </Table>
      </div>
      <Pagination
      className={style.page}
        count={count}
        variant="outlined"
        color="secondary"
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
}

export default Inventory;

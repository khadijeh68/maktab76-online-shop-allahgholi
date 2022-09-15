import React, { useCallback, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../../../redux/features/inventory/inventorySlice";
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
  const [posts, setPosts] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [newPrice, setNewPrice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [newPrice, setNewPrice] = useState([]);
  // const [items, setItems] = useState([]);
  // const total = useSelector((state) => state.inventory.total);
  // const [currentPage, setCurrentPage] = useState(1);

  // const productsList = useSelector((state) => state.products.productsList);

  // const count = Math.ceil(total / limit);

  // useEffect(() => {
  //   dispatch(fetchInventory(currentPage));
  //   dispatch(fetchProducts())
  //     .unwrap()
  //     .then((res) => setItems(res));
  // }, [currentPage, dispatch]);
  // console.log(items);
  
 // price
 const handleChange = (e, id) => {
  const idx = posts.findIndex((item) => item.id === id);
  const newPost = [...posts];
  newPost[idx].price = e.target.value;
  setPosts(newPost);
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
// Stock
const handleChangeStock = (e, id) => {
  const idx = posts.findIndex((item) => item.id === id);
  const newPost = [...posts];
  newPost[idx].quantity = e.target.value;
  setPosts(newPost);
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

const saveEdit = (e) => {
  e.preventDefault();
  console.log(newPrice);
  newPrice.forEach( element => {
    try {
    let entiresData = {
      price: element.newValPrice,
      quantity: element.newValStock,
    };
    instance
    .patch(`http://localhost:3002/products/${element.id}`, entiresData)
    .then(() => {
      fetchComments(currentPage);
    });
} catch (error) {
  console.log("error!");
}
});

};
let limit = 5;

const fetchComments = useCallback(
  async (currentPage) => {
    const res = await fetch(
      `http://localhost:3002/products?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    const total = res.headers.get("x-total-count");
    setPageCount(Math.ceil(total / limit));
    setPosts(data);
    setCurrentPage(currentPage);
  },
  [limit]
);

useEffect(() => {
  fetchComments(1);
}, [fetchComments]);

const handlePageClick = async (data) => {
  let currentPage = data.selected + 1;
  fetchComments(currentPage);
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
              saveEdit(e,currentId);
            }}
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
          {posts.length &&
            posts.map((item) => {
              const { id } = item;
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
                      onChange={(e) => handleChange(e, id)}
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
                      onChange={(e) => handleChangeStock(e, id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination
        className={classes.page}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        variant="outlined"
        color="secondary"
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
}

export default Inventory;

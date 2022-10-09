import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getList } from "../../redux/features/product/productSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  const filterBySearch = (event) => {
    const query = event.target.value;
    let updatedList = [...productsList];
  
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
   
    });
  
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  return (
    <Col md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <input
          className="form-control my-0 py-1"
          style={{
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            fontFamily: "Vazir-Light",
          }}
          type="text"
          placeholder="جستجو کنید..."
          aria-label="Search"
          onChange={filterBySearch}
        />
        <div className="input-group-prepend">
          <button
            className="input-group-text purple lighten-3"
            style={{ height: "35px" }}
            id="basic-text1"
          >
            <BsSearch />
          </button>
        </div>
      </div>
    </Col>
  );
};

export default SearchPage;

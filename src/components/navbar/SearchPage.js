import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const filterBySearch = (event) => {
    const q = event.target.value;
    setQuery(q);
  };

  return (
    <div className="input-group md-form form-sm form-1 pl-0 ">
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
          onClick={() => navigate(`search/${query}`)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchPage;

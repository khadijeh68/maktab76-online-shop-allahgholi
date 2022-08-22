import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../product/ProductCard";

function Categories() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid mx-2">
        {categoryList.map((category) => {
          return (
            <div className="mt-5">
              <Button key={category.id} variant="link">
                {category.name}
              </Button>
            </div>
          );
        })}
        <ProductCard />
      </div>
    </>
  );
}

export default Categories;

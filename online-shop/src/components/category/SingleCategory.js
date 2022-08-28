import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../../redux/features/category/categorySlice";

const SingleCategory = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const category = categoryList.filter((category) => category.id !== categoryId);
  const { name } = category;

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);


  return (
    <div>
      <h6>{name}</h6>
    </div>
  );
};

export default SingleCategory;

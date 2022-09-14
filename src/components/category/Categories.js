import { useEffect } from "react";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { useDispatch } from "react-redux";
import AppleProduct from "../product/productCard/AppleProduct";
import SamsungProduct from "../product/productCard/SamsungProduct";
import XiaomiProduct from "../product/productCard/XiaomiProduct";
import HuaweiProduct from "../product/productCard/HuaweiProduct";
import HonorProduct from "../product/productCard/HonorProduct";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
      <AppleProduct />
      <SamsungProduct />
      <XiaomiProduct />
      <HuaweiProduct />
      <HonorProduct />
    </>
  );
}

export default Categories;

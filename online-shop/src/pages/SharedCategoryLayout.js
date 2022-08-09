import { Outlet } from "react-router-dom";
const SharedCategoryLayout = () => {
  return (
    <div className="">
      <h3 className="">دسته بندی</h3>
      <Outlet />
    </div>
  );
};
export default SharedCategoryLayout;

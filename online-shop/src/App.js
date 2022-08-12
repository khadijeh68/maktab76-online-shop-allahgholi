import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import SharedCategoryLayout from "./pages/SharedCategoryLayout";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/footer/Footer";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import AdminNavbar from "./components/navbar/AdminNavbar";
import SharedAdminLayout from "./pages/SharedAdminLayout";
import Orders from "./components/orders/Orders";
import Quantity from "./components/quantity/Quantity";
import Product from "./components/product/Product";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="categories" element={<SharedCategoryLayout />}>
            <Route index element={<Categories />} />
          </Route>

          <Route path="products" element={<Products />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="login" element={<Login />} />

        <Route path="admin" element={<SharedAdminLayout />}>
          {/* <Route index element={<Admin />} /> */}
          {/* <Route path="adminNavbar" element={<AdminNavbar />} /> */}
          <Route path="orders" element={<Orders />} />
          <Route path="quantity" element={<Quantity />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import SharedCategoryLayout from "./pages/SharedCategoryLayout";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/footer/Footer";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import SharedAdminLayout from "./pages/SharedAdminLayout";
import Orders from "./pages/Orders";
import Quantity from "./pages/Quantity";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PaymentPanel from "./pages/PaymentPanel";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="categories" element={<SharedCategoryLayout />}>
            <Route index  element={<Categories />} />
          </Route>

          <Route path="products" element={<Products />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="paymentPanel" element={<PaymentPanel />} />

        <Route path="login" element={<Login />} />

        <Route path="admin" element={<SharedAdminLayout />}>
          <Route path="product" element={<Product />} />
          <Route path="quantity" element={<Quantity />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import ShoppingCart from "./pages/ShoppingCart";
// import Footer from "./components/footer/Footer";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import SharedAdminLayout from "./pages/SharedAdminLayout";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import PaymentPanel from "./pages/PaymantPanel";
import SuccessPaymant from "./pages/SuccessPaymant";
import FailPaymant from "./pages/FailPaymant";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="paymantPanel" element={<PaymentPanel />} />
        <Route path="successPaymant" element={<SuccessPaymant />} />
        <Route path="failPaymant" element={<FailPaymant />} />

        <Route path="login" element={<Login />} />

        <Route path="admin" element={<SharedAdminLayout />}>
          <Route path="product" element={<Product />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

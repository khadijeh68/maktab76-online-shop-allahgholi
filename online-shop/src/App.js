import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SharedLayout from "./pages/shared/SharedLayout";
import Error from "./pages/error/Error";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
// import Footer from "./components/footer/Footer";
import Categories from "./pages/categories/Categories";
import Products from "./pages/product/Products";
import SharedAdminLayout from "./pages/shared/SharedAdminLayout";
import Orders from "./pages/orders/Orders";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";
import PaymentPanel from "./pages/paymant/PaymantPanel";
import SuccessPaymant from "./pages/paymant/SuccessPaymant";
import FailPaymant from "./pages/paymant/FailPaymant";
import Inventory from "./pages/inventory/Inventory";


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
          <Route index element={<Orders />}/>
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

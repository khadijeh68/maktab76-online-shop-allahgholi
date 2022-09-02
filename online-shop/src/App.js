import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SharedLayout from "./pages/shared/SharedLayout";
import Error from "./pages/error/Error";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
// import Footer from "./components/footer/Footer";
import Categories from "./components/category/Categories";
import Products from "./pages/admin/product/Products";
import SharedAdminLayout from "./pages/shared/SharedAdminLayout";
import Orders from "./pages/admin/orders/Orders";
import Product from "./pages/admin/product/Product";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";
import PaymentPanel from "./pages/paymant/PaymantPanel";
import SuccessPaymant from "./pages/paymant/SuccessPaymant";
import FailPaymant from "./pages/paymant/FailPaymant";
import Inventory from "./pages/admin/inventory/Inventory";

import SharedCategoryLayout from "./pages/shared/SharedCategoryLayout";
import ProductDetails from "./components/product/ProductDetails";
import PrivateRoute from "./pages/route/PrivateRoute";
import SharedProductdLayout from "./pages/shared/SharedProductdLayout";
import SingleCategory from "./components/category/SingleCategory"
import ProductCard from "./components/product/ProductCard";

import SingleCategory from "./components/category/SingleCategory";
import SharedCategoryLayout from "./pages/shared/SharedCategoryLayout";
import ProductDetails from "./components/product/ProductDetails";
import PrivateRoute from "./pages/route/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<PrivateRoute><SharedLayout /></PrivateRoute>}> */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="categories" element={<SharedCategoryLayout />}>
            <Route path="categories" element={<Categories />} />
            <Route path=":categoryId" element={<SingleCategory/>} />
          </Route>
          <Route path="products" element={<SharedProductdLayout />} >
          <Route index element={<ProductCard />} />
          <Route path=":id" element={<ProductDetails />} />
          </Route>

          <Route path="categories" element={<SharedCategoryLayout />} >
          <Route index element={<Categories />} />
          <Route path=":categoryId" element={<SingleCategory />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />

          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="paymantPanel" element={<PaymentPanel />} />
        <Route path="successPaymant" element={<SuccessPaymant />} />
        <Route path="failPaymant" element={<FailPaymant />} />

        <Route path="login" element={<Login />} />
        <Route path="admin" element={<PrivateRoute><SharedAdminLayout /></PrivateRoute>}>
        {/* <Route path="admin" element={<SharedAdminLayout />}> */}
          <Route index element={<Orders />} />
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

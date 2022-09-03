import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../../loading/Loading";
const PrivateRoute = React.lazy(() => import("./PrivateRoute"));

const Home = React.lazy(() => import("../../pages/home/Home"));
const SharedLayout = React.lazy(() =>
  import("../../pages/shared/SharedLayout")
);
const Error = React.lazy(() => import("../../pages/error/Error"));
const ShoppingCart = React.lazy(() =>
  import("../../pages/shoppingCart/ShoppingCart")
);
// const Footer = React.lazy(() => import ("./components/footer/Footer") ) ;
const Categories = React.lazy(() =>
  import("../../components/category/Categories")
);
// const Products = React.lazy(() => import("../../pages/admin/product/Products"));
const SharedAdminLayout = React.lazy(() =>
  import("../../pages/shared/SharedAdminLayout")
);
const Orders = React.lazy(() => import("../../pages/admin/orders/Orders"));
const Product = React.lazy(() => import("../../pages/admin/product/Product"));
const Login = React.lazy(() => import("../../pages/login/Login"));
const Checkout = React.lazy(() => import("../../pages/checkout/Checkout"));
const PaymentPanel = React.lazy(() =>
  import("../../pages/paymant/PaymantPanel")
);
const SuccessPaymant = React.lazy(() =>
  import("../../pages/paymant/SuccessPaymant")
);
const FailPaymant = React.lazy(() => import("../../pages/paymant/FailPaymant"));
const Inventory = React.lazy(() =>
  import("../../pages/admin/inventory/Inventory")
);
const SharedCategoryLayout = React.lazy(() =>
  import("../../pages/shared/SharedCategoryLayout")
);
const ProductDetails = React.lazy(() =>
  import("../../components/product/ProductDetails")
);

const SharedProductdLayout = React.lazy(() =>
  import("../../pages/shared/SharedProductdLayout")
);
const SingleCategory = React.lazy(() =>
  import("../../components/category/SingleCategory")
);
const ProductCard = React.lazy(() =>
  import("../../components/product/ProductCard")
);
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading/>}>
              <SharedLayout />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loading/>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="categories"
            element={
              <React.Suspense fallback={<Loading/>}>
                <SharedCategoryLayout />
              </React.Suspense>
            }
          >
            <Route
              path="categories"
              element={
                <React.Suspense fallback={<Loading/>}>
                  <Categories />
                </React.Suspense>
              }
            />
            <Route
              path=":categoryId"
              element={
                <React.Suspense fallback={<Loading/>}>
                  <SingleCategory />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="products"
            element={
              <React.Suspense fallback={<Loading/>}>
                <SharedProductdLayout />
              </React.Suspense>
            }
          >
            <Route
              index
              element={
                <React.Suspense fallback={<Loading/>}>
                  <ProductCard />
                </React.Suspense>
              }
            />
            <Route
              path=":id"
              element={
                <React.Suspense fallback={<Loading/>}>
                  <ProductDetails />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="shoppingCart"
            element={
              <React.Suspense fallback={<Loading/>}>
                <ShoppingCart />
              </React.Suspense>
            }
          />
          <Route
            path="checkout"
            element={
              <React.Suspense fallback={<Loading/>}>
                <Checkout />
              </React.Suspense>
            }
          />
        </Route>

        <Route
          path="paymantPanel"
          element={
            <React.Suspense fallback={<Loading/>}>
              <PaymentPanel />
            </React.Suspense>
          }
        />
        <Route
          path="successPaymant"
          element={
            <React.Suspense fallback={<Loading/>}>
              <SuccessPaymant />
            </React.Suspense>
          }
        />
        <Route
          path="failPaymant"
          element={
            <React.Suspense fallback={<Loading/>}>
              <FailPaymant />
            </React.Suspense>
          }
        />

        <Route
          path="login"
          element={
            <React.Suspense fallback={<Loading/>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="admin"
          element={
            <React.Suspense fallback={<Loading/>}>
              <PrivateRoute>
                <SharedAdminLayout />
              </PrivateRoute>
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<Loading/>}>
                <Orders />
              </React.Suspense>
            }
          />
          <Route
            path="product"
            element={
              <React.Suspense fallback={<Loading/>}>
                <Product />
              </React.Suspense>
            }
          />
          <Route
            path="inventory"
            element={
              <React.Suspense fallback={<Loading/>}>
                <Inventory />
              </React.Suspense>
            }
          />
          <Route
            path="orders"
            element={
              <React.Suspense fallback={<Loading/>}>
                <Orders />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
        {/* <Footer /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

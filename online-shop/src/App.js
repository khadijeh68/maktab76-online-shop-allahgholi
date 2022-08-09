import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import SharedCategoryLayout from "./pages/SharedCategoryLayout";
import Category from "./pages/Category";
import AdminPanel from "./pages/AdminPanel";
import Basket from "./pages/Basket";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<SharedCategoryLayout />}>
            <Route index element={<Category />} />
          </Route>
          <Route path="adminPanel" element={<AdminPanel />} />
          <Route path="basket" element={<Basket/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

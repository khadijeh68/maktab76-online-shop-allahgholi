import "./index.css";
import { store } from "./redux/features/Store";
import { Provider } from "react-redux";
import AppRouter from "./pages/route/index";

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
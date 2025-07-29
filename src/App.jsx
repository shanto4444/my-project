import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import RootLyout from "./components/RootLyout";
import CheckOutPage from "./pages/CheckOutPage";
import ProductDetails from "./pages/ProductDetails";
function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLyout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />

        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkoutpage" element={<CheckOutPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;

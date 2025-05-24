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
import RootLyout from "./components/RootLyout";
function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLyout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contacts" element={<Contacts />} />
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

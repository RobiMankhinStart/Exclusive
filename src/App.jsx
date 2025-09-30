import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import CheckOut from "./Pages/CheckOut";
import Account from "./Pages/Account";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import ProductDetails from "./Pages/ProductDetails";
import Layout from "./Layouts/Layout";
import About from "./Pages/About";
import Shop from "./Pages/Shop";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout/:checkoutproduct" element={<CheckOut />} />
          <Route path="/productdetails/:product" element={<ProductDetails />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <div className="container">
        <RouterProvider router={myRouter} />
      </div>
    </>
  );
}

export default App;

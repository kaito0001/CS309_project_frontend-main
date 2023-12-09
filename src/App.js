import "./App.css";
import HomeAPI from "./api/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./Routes/routes";
import Home from "./Components/Landing/Home";
import ContactUS from "./Components/ContactUS";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import CheckOut from "./Components/CheckOut/CheckOut";
import DashBoard from "./Components/Admin/DashBoard";
import Account from "./Components/User/Account";

function App() {
  async function getUsers() {
    const result = await HomeAPI.getUsers();
    console.log(result);
  }

  async function postUser(params) {
    const result = await HomeAPI.postUser(params);
    console.log(result);
  }

  return (
      <Router>
          <Routes>
              <Route path={ROUTES.LANDING} element={<Home />} />
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.CONTACTUS} element={<ContactUS />} />
              <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
              <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
              <Route path={ROUTES.PRODUCTS} element={<Products />} />
              <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
              <Route path={ROUTES.CHECKOUT} element={<CheckOut />} />
              <Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
              <Route path={ROUTES.ACCOUNT} element={<Account />} />
          </Routes>
      </Router>
  );
}

export default App;

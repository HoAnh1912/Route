import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
  Link,
  Outlet,
} from "react-router-dom";
import "./pages/index";
import Profile from "./pages/Profile";
import Address from "./pages/Profile/Address";
import Order from "./pages/Profile/Order";
import Payment from "./pages/Profile/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact US</Link>
            </li>
            <li>
              <Link to="/view-cart">View Cart</Link>
            </li>
            <li>
              <Link to="/check-out">Checkout</Link>
            </li>
            <li>
              <Link to="/check-out-success ">Checkout Success</Link>
            </li>
            <li>
              <Link to="/login ">Login</Link>
            </li>
            <li>
              <Link to="/register ">Register</Link>
            </li>
            <li>
              <Link to="/forgot-password">Forgot password</Link>
            </li>
            <li>
              <Link to="/reset-password ">Reset password</Link>
            </li>
            <li>
              <Link to="/profile ">Profile</Link>
            </li>
            <li>
              <Link to="/oder ">Oder</Link>
            </li>
            <li>
              <Link to="/payment ">Payment</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/view-cart" element={<ViewCart />} />
            <Route path="/check-out" element={<CheckOut />} />
            <Route path="/check-out-success" element={<CheckOutSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/reset-password" element={<ResetPass />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="/profile/address" element={<Address />}></Route>
              <Route path="/profile/order" element={<Order />} />
              <Route path="/profile/payment" element={<Payment />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <h2>Contact US</h2>
    </div>
  );
}
function ViewCart() {
  return (
    <div>
      <h2>View Cart</h2>
    </div>
  );
}
function CheckOut() {
  return (
    <div>
      <h2>Check out</h2>
    </div>
  );
}
function CheckOutSuccess() {
  return (
    <div>
      <h2>Check out success</h2>
    </div>
  );
}
function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
function Register() {
  return (
    <div>
      <h2>Register</h2>
    </div>
  );
}
function ForgotPass() {
  return (
    <div>
      <h2>Forgot Pass</h2>
    </div>
  );
}
function ResetPass() {
  return (
    <div>
      <h2>Reset Pass</h2>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h2> 404 not found</h2>
    </div>
  );
}

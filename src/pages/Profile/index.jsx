import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <li>
        <Link to="/profile/address">Address</Link>
      </li>
      <li>
        <Link to="/profile/order">order</Link>
      </li>
      <li>
        <Link to="/profile/payment">Payment</Link>
      </li>
      <div>Footer</div>
    </div>
  );
}

import React from "react";
import { Link, NavLink } from "react-router-dom";
//https://youtu.be/IevtHidzT_M?t=409
export default function Nav() {
  return (
    <nav>
      <Link to="/">[ Home Link ]</Link>
      <Link to="/users">[ All Users ]</Link>
      <Link to="/users/123">[ User 123 ]</Link>
      <Link to="/users/me">[ User Me ]</Link>
      <NavLink
        to="/users/me"
        style={({ isActive }) => ({
          color: isActive ? "green" : "gold",
        })}
        className={({ isActive }) => {}}
      >
        useLocation
      </NavLink>
    </nav>
  );
}

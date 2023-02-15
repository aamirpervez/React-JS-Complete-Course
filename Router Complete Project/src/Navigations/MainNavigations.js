import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigations() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="contactus"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigations;

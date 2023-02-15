import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigations from "./MainNavigations";

function RootLayout() {
  return (
    <div>
      <MainNavigations />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

import React from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const Layout = () => {
  return (
    <section id="container">
      <aside>
        <Aside />
      </aside>
      <section>
        <header>header</header>
        <main>
          <Outlet />
        </main>
      </section>
    </section>
  );
};
export default Layout;

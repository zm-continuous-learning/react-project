import React from "react";
import "./Layout.scss";
import { Link, Outlet } from "react-router-dom";
import Aside from "./Aside";

const Layout = () => {
  return (
    <section id="container">
      <aside>
        <Link to="/layout">home</Link>
        <Link to="/layout/user">user</Link>
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

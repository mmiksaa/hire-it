import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sider from "../components/Sider/Sider";
import LayoutUI from "../components/UI/Layout/Layout";
import styles from "../scss/App.module.scss";

const Layout: FC = () => {
  return (
    <>
      <LayoutUI className={styles.wrapp}>
        <Sider />
        <div className={styles.container}>
          <Header />
          <Container content={<Outlet />} />
          <Footer />
        </div>
      </LayoutUI>
    </>
  );
};

export default Layout;

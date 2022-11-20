import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/UI/Button/Button";

import styles from "../NotFound/NotFound.module.scss"


const NotFound: React.FC = () => {
  return (
    <div className={styles.container404}>
      <p className={styles.pageTitle404}>404</p>
      <span className={styles.pageDesc404}>Такой страницы нет</span>
      <Link to={"/"}>
        <Button>вернуться назад</Button>
      </Link>
    </div>
  );
};

export default NotFound;

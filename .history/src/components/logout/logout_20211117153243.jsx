import React, { useEffect } from "react";
import styles from "./logout.module.css";
import { useHistory } from "react-router";
import Header from "../header/header";

const Logout = ({ authService, onRefreshClick }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <div>
      <Header onLogout={onLogout} onRefreshClick={onRefreshClick} />
    </div>
  );
};

export default Logout;

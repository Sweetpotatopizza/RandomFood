import React from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToHome = (userId) => {
    history.push({
      pathname: "/home",
      state: { id: userId },
    });
  };

  const onLogin = () => {
    authService //
      .login()
      .then((data) => goToHome(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToHome(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <button className={styles.button} onClick={onLogin}>
        Login by Google
      </button>
    </section>
  );
};

export default Login;

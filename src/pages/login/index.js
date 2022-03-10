import React, { Component } from "react";
import Button from "../../components/button";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import styles from "./index.module.css";
import Input from "../../components/input";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };

  render() {
    const { email, password } = this.state;

    return (
      <PageWrapper>
        <div className={styles.container}>
          <Title title="Login" />

          <Input
            value={email}
            onChange={(e) => this.onChange(e, "email")}
            label="Email"
            id="email"
          />
          <Input
            value={password}
            onChange={(e) => this.onChange(e, "password")}
            label="Password"
            id="password"
          />

          <Button title="Login" />
        </div>
      </PageWrapper>
    );
  }
}

export default LoginPage;

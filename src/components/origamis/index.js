import React, { Component } from "react";
import styles from "./index.module.css";
import Origam from "../origami/index";

class Origamis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origamis: []
    };
  }

  getOrigamis = async () => {
    const promise = await fetch("http://localhost:5000/posts");
    const origamis = await promise.json();
    this.setState({
      origamis
    });
  };

  componentDidMount() {
    this.getOrigamis();
  }

  renderOrigamis() {
    const { origamis } = this.state;
    return origamis.map((ori) => {
      return <Origam key={ori.id} {...ori} />;
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Origamis</h1>
        <div className={styles["origamis-wrapper"]}>
          {this.renderOrigamis()}
        </div>
      </div>
    );
  }
}

export default Origamis;
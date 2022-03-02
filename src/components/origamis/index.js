import React, { Component } from "react";
import styles from "./index.module.css";
import Origami from "../origami";

class Origamis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origamis: []
    };
  }

  getOrigamis = async () => {
    const promise = await fetch(`http://localhost:3000/posts`);
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
    const { length } = this.props;

    return origamis
      .map((ori, index) => {
        return <Origami key={ori.id} index={index} {...ori} />;
      })
      .slice(-length);
  }

  render() {
    return (
      <div className={styles["origamis-wrapper"]}>{this.renderOrigamis()}</div>
    );
  }
}

export default Origamis;

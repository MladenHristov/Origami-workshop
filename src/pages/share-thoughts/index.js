import React from "react";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import Button from "../../components/button";
import styles from "./index.module.css";
import Origamis from "../../components/origamis";

const ShareThoughts = () => {
  return (
    <PageWrapper>
      <Title title="Share your thoughts" />
      <div >
        <div >
          <textarea
            className={styles.textarea}
            defaultValue={`Publication...`}
          ></textarea>
        </div>
        <div>
          <Button title={"Post"}>Post</Button>
        </div>
      </div>
      <Origamis length={3} />
    </PageWrapper>
  );
};
export default ShareThoughts;

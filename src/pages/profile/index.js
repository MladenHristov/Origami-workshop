import React, { Component } from "react";
import PageWrapper from "../../components/page-wrapper";
import Origamis from "../../components/origamis";


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      posts: null,
      error: false
    };
  }

  componentDidMount(props) {
    //let id = this.props.math.params.userId;
    this.getUser(125);
  }

  getUser = async (id) => {
    //console.log(`http://localhost:3000/users?id=${id}`);
    const promise = await fetch(`http://localhost:3000/users?id=${id}`);
    const user = await promise.json();

    if (!promise.status) {
      this.props.history.push("/error");
    }

    this.setState = {
      username: user.name,
      posts: user.posts
    };
    //console.log(this.state);
  };

  render() {
    const { username, posts } = this.state;
    //console.log(username, posts);

    return (
      <PageWrapper>
        <div>
          <p>User: {username} </p>
          <p>Posts: {posts} </p>
        </div>
        <Origamis length={3} />
      </PageWrapper>
    );
  }
}

export default Profile;

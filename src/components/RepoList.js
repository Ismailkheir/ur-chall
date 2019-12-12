import React from "react";
import Repo from "./Repo";
import axios from "axios";

class RepoList extends React.Component {
  state = {
    repos: []
  };

  //HTTP Request using axios
  componentDidMount() {
    const url =
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";
    axios.get(url).then(res => this.setState({repos: res.data.items}));
  }

  render() {
    console.log(this.state.repos);
    //Render chaque element de l'array 'repos' (repo={item} : props)
    return this.state.repos.map(item => <Repo repo={item} key={item.id} />);
  }
}

export default RepoList;
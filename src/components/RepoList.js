import React, { useState, useEffect } from "react";
import Repo from "./Repo";
import axios from "axios";

const RepoList = () => {
  const [repos,setRepos] = useState([])
  
  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log("End of list, fetch more");
  }

  useEffect(() => {
    //Fetching data
    const url =
    "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";
    axios.get(url).then(res => setRepos(res.data.items));
    //Scroll event listner
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  }, [])

  //Render chaque element de l'array 'repos' (repo={item} : props)
  return repos.map(item => <Repo repo={item} key={item.id} />);
}

export default RepoList;
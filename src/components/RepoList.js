import React, { useState, useEffect } from "react";
import Repo from "./Repo";
import axios from "axios";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  function fetchMoreRepos() {
    const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`;
    axios.get(url).then(res => setRepos([...repos, ...res.data.items]));
    setPage(page + 1);
    setIsFetching(false);
  } 
  //Whenever we get to the bottom of the page we set 'isFetching' to true to fetch more data
  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  }
  //if isFetching is true (meaning we are at the bottom of the page) we fetch more data
  useEffect(() => {
    if(!isFetching) return;
    fetchMoreRepos();
    }, [isFetching]);

  useEffect(() => {
  //Fetch data when the component mounts for the first time
  fetchMoreRepos();
  //Scroll event listner
  window.addEventListener('scroll',handleScroll);
  return () => window.removeEventListener('scroll',handleScroll);
  }, []);

  //Render chaque element de l'array 'repos'
  return repos.map((item,index) => <Repo repo={item} key={index} />);
}

export default RepoList;
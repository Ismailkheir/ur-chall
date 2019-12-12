import React from 'react';
import RepoList from './components/RepoList'
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div>
        <div className="navbar">United Remote Front-end Challenge</div>
        <RepoList />
      </div>
    )

  }
}

export default App;

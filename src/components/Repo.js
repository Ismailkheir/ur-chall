import React from "react";

//Formatting date function for the var 'created_at'
function diff_days(date) {
  const date1 = new Date(date);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function Repo({repo}) {
  //Deconstructing 
  const { name, description, owner, stargazers_count, open_issues_count, created_at } = repo;
  //Returning one repository
  return (
    <div className="row">
      <div>
        <img alt="" src={owner.avatar_url} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <p>{description}</p>
        <div>
          <span>Stars:</span><span className="bold"> {stargazers_count}</span>
          <span className="issues">Issues:</span><span className="bold"> {open_issues_count}</span>
          <span className="date">
            Submitted <span className="bold">{diff_days(created_at)}</span> days ago by <span className="bold">{owner.login}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Repo;

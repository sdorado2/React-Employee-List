import React from "react";
import Employeelist from "./Employeelist";
import Header from "./Header";
import Searchbar from "./Searchbar";

function Homepage(props) {
  return (
    <div className="homePage">
      <Header words={props.headTitle} />
      <Searchbar />
      <Employeelist workers={props.staff} />
    </div>
  );
}

export default Homepage;

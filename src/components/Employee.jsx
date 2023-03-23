import React from "react";
import Header from "./Header";

function Employee(props) {
  return (
    <div className="employeeBox">
      <Header words={props.empTitle} />
    </div>
  );
}

export default Employee;

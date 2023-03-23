import React from "react";
import EmployeesListItem from "./EmployeesListItem";

function Employeelist(props) {
  return <div className="employeeList">
    Employee list
    <EmployeesListItem indWorker={props.workers.james}/>
    <EmployeesListItem indWorker={props.workers.julie}/>
    <EmployeesListItem indWorker={props.workers.eugene}/>
    <EmployeesListItem indWorker={props.workers.john}/>
    <EmployeesListItem indWorker={props.workers.ray}/>
    <EmployeesListItem indWorker={props.workers.paul}/>
    </div>;
}

export default Employeelist;

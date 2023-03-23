import React from "react";

function EmployeesListItem(props) {
  // employeesArr.forEach((item) => {
  //   let newBox = document.querySelector(".employeeItem");

  //   let nameBox = createElement("div");
  //   nameBox.innerHTML = item.name;
  //   newBox.append(nameBox);

  //   let titleBox = createElement("div");
  //   titleBox.innerHTML = item.title;
  //   newBox.append(titleBox);
  // });

  return (
    <div className="employeeItem">
      <img src="#" alt="image" />
      <h3>{props.indWorker.name}</h3>
      <h5>{props.indWorker.title}</h5>
    </div>
  );
}

export default EmployeesListItem;

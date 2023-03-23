import "./App.css";
import Employee from "./components/Employee";
import Homepage from "./components/Homepage";
import titles from "./model/title";
import employees from "./model/employees";

function App() {
  return (
    <div className="App">
      <div className="mainBox">
        <Homepage staff={employees} headTitle={titles.homepage} />
        <Employee staff={employees} empTitle={titles.individual} />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { data } from "./assets/data";
import EmployeeDetails from "./components/EmployeeDetails";
import FormData from "./components/FormData";
function App() {
  const [worker, setWorker] = useState(()=>{
      const saveData = localStorage.getItem("employeeData");
      return saveData ? JSON.parse(saveData) : [];
  });

  useEffect(()=>{
    localStorage.setItem('employeeData',JSON.stringify(worker))
  },[worker])

const addEmployee = (newEmp)=>{
  setWorker((prev)=>[...worker,newEmp])
}

  return (
    <div className="app">
      <div>
        <header className="header">
          <h2>Employee DataBase</h2>
          <Link to="employeeDetails">Show Employee</Link>
          <Link to="addemp">Add Employee</Link>
        </header>
      </div>
      <Routes>
        <Route
          path="employeeDetails"
          element={<EmployeeDetails worker={worker} setWorker={setWorker} />}
        ></Route>
        <Route path="addemp" element={<FormData addEmployee={addEmployee  } />}></Route>
      </Routes>
    </div>
  );
}

export default App;

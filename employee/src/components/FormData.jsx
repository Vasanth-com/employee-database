import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const FormData = ({addEmployee}) => {
  const [employee,setEmployee] = useState({
    firstName:"",
    lastName:"",
    email:"",
    age:"",
    contactNumber:"",
    salary:"",
    dob:"",
    address:"",
})
const navigate = useNavigate()


const handleOnChange = (e) =>{
    const{name,value} = e.target
    setEmployee((prev)=>(
        {
            ...prev,[name]:value
        }
    ))
}

const handleOnSubmit = (e)=>{
    e.preventDefault()
    addEmployee(employee)
    
    setEmployee({
        firstName:"",
    lastName:"",
    email:"",
    age:"",
    contactNumber:"",
    salary:"",
    dob:"",
    address:"",
    })
    navigate("/employeeDetails")
}

  return (
   <div className='form_data'>
    <div className="containers">
    <div className="title">Employee Details</div>
    <div className="content">
      <form onSubmit={handleOnSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" placeholder="Enter your First Name" onChange={handleOnChange} value={employee.firstName} name='firstName' required/>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" placeholder="Enter your last Name" onChange={handleOnChange} value={employee.lastName} name='lastName' required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" onChange={handleOnChange} value={employee.email} name='email' required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" onChange={handleOnChange} value={employee.contactNumber} name='contactNumber' required/>
          </div>
          <div className="input-box">
            <span className="details">Salary</span>
            <input type="text" placeholder="Salary" onChange={handleOnChange} value={employee.salary} name='salary' required/>
          </div>
          <div className="input-box">
            <span className="details">Age</span>
            <input type="text" placeholder="Age" onChange={handleOnChange} value={employee.age} name='age' required/>
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input type="text" placeholder="Address" onChange={handleOnChange} value={employee.address} name='address' required/>
          </div>
          <div className="input-box">
            <span className="details">Date of Birth</span>
            <input type="date" placeholder="Date of Birth" onChange={handleOnChange} value={employee.dob} name='dob' required/>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register"/>
        </div>
      </form>
        </div>
    </div>
   
   </div>
  )
}

export default FormData

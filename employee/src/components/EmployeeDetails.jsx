import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const EmployeeDetails = ({ worker ,setWorker }) => {
  const [show, setShow] = useState(null);
 
  const handleClick = (item) => {
    setShow(item);
  };
  const handleRemove = (id) => {
    const personDelete = worker[id];
    const newValue = worker.filter((_, i) => i !== id);
    setWorker(newValue);
    if (show && show.name === personDelete.name) {
      setShow(null);
    }
  };

  return (
    <div className="container">

      <div className="employee__names">
      <h3>Employee Names</h3>
        {worker.map((item, id) => {
          return (
            <div key={id} className="name__container">
              <div
                onClick={() => {
                  handleClick(item);
                  openPopUp();
                }}
              >
                {item.firstName}
              </div>
              <button onClick={() => handleRemove(id)}>
                <HiMiniXMark />
              </button>
            </div>
          );
        })}
      </div>
      <div className="employee__details">
        {show ? (
          <div className="employee__container">
            <h4> {show.firstName}</h4>
            <h4>{show.lastName}</h4>
            <p>{show.email}</p>
            <p>{show.age}</p>
            <p>{show.contactNumber}</p>
            <p>{show.address}</p>
            <p>{show.salary}</p>
            <p>{show.dob}</p> 
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    
  );
};

export default EmployeeDetails;

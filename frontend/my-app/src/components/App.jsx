import React, { useState, useEffect } from "react";
import "./style.css";

const ApiFetch = () => {
  const [form, setForm] = useState([]);
  const removeForm = (firstName) => {
    const singleForm = form.filter(
      (meriApi) => meriApi.firstName !== firstName
    );
    setForm(singleForm);
  };
  // const [readMore, setReadMore] = useState(true);
  useEffect(() => {
    async function fetchForms() {
      const response = await fetch("http://localhost:5000/api/v1/forms");
      const data = await response.json();
      setForm(data);
      console.log(data);
    }
    fetchForms();
  }, []);
  return (
    <div>
      <main className="form">
        {form.map((meriApi) => {
          return (
            <div className="head" key={meriApi._id}>
              <li>
                <h4>First Name: </h4>
                <h5>{ meriApi.firstName}</h5>
              </li>
              <li>
                <h4>Last Name:</h4>
                <h5>{ meriApi.lastName}</h5>
              </li>
              <li>
                <h4>Roll No:</h4>
                <h5>{ meriApi.rollNo}</h5>
              </li>
              <li>
                <h4>Section:</h4>
                <h5>{ meriApi.section}</h5>
              </li>
              <li>
                <h4>Department:</h4>
                <h5>{ meriApi.depart}</h5>
              </li>
              <li>
                <h4>Contact: </h4>
                <h5>{meriApi.contact}</h5>
                
              </li>
              <button
                onClick={() => removeForm(meriApi.firstName)}
                className="removeBtn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ApiFetch;

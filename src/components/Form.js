import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitForm,setSubmitForm] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {firstName, lastName};
    const submitted = [...submitForm,formData];
    setSubmitForm(submitted);
    setFirstName("")
    setLastName("")
 
  }
  
    const listOfSubmissions = submitForm.map((data,index) => (
    <li key = {index}>
     {data.firstName} {data.lastName}
    </li>
  ))

  

  return (
    <div>
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
          <h3>Submissions</h3>
          ${listOfSubmissions}
        
    </div>
  );
}

export default Form;

import React from 'react'
import { useState } from "react";
const Form = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(false);
  const handleInputFirstName =(e)=>{
    setFirstName(e.target.value)
    // console.log(firstName)
  }
  const handleInputLastName = (e) => {
    setLastName(e.target.value);
    // console.log(lastName);
  };
  const handleError= (e) => {
    if(e.target.value.length >10){
      setError(true)
    }
    else{
      setError(false)
    }

  };
  // const [values,setValues] = useState({
  //   firstnames:"",
  //   lastName:"",
  //   hobby:false
  // })
  // const handleInputChange=(e)=>{
  //   setValues({
  //     [e.target.name] :e.target.value
  //   })
  //   console.log(e.target.value);
  // }
  // const handleInputChange = (e) => {
  //   const type = e.target.type;
  //   setValues({
  //     [e.target.name]: type==="checkbox"? e.target.checked :e.target.value
  //   });
  //   console.log(e.target.value);
  // };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(firstName);
    console.log(lastName)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">firstName</label>
      <input
        type="text"
        name="firstname"
        className="w-full max-w-[300px] p-5 border border rounded-lg"
        onChange={handleError}
        // onChange={handleInputChange}
      ></input>
      {error? <div>Cos loi</div>:""}
      <label htmlFor="lastname">lastName</label>
      <input
        type="text"
        name="lastname"
        className="w-full max-w-[300px] p-5 border border rounded-lg"
        onChange={handleInputLastName}
        // onChange={handleInputChange}
      ></input>
      <input
        type="checkbox"
        name="hobby1"
        onChange={handleInputLastName}
      ></input>
      {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form
// libraries
import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import registerStyles from "./registerStyles.module.scss"

// images
import Trophy from "media/trophy.png";
import DropDown from "media/dropdown.png";
import Solo from "media/solo.png";
import Duo from "media/duo.png";
import Trio from "media/trio.png";

const Register = ()=>{

  // initial states
  const initialValues = {teamname: "", numberhackers:"", email: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const [teamName, setTeamName] = useState("")
  const [numberHackers, setNumberHackers] = useState(0)
  const [teamEmails, setTeamEmails] = useState({
    email: "",
  });

  // control functions
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleFormChange = (event) => {
    const value = event.target.value;
    setTeamEmails({
      ...teamEmails,
      [event.target.name]: value
    });
  };

  const addFields = () => {
    let newemail = { email: ''}
    setTeamEmails([...teamEmails, newemail])
}


  const handleSubmit = (e)=>{
    e.preventDefault()
    setFormErrors(validate(formValues));
    setIsSubmit(true)
    const data ={
      teamName,
      numberHackers,
      teamEmails
    }
    console.log(data)
    console.log(test)
  }

  const validate = (values) => {
    const errors ={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.teamname){
      errors.teamname = "Team Name is required"
    }

    if(!values.numberhackers){
      errors.numberhackers = "number of hackers is required"
    }

    if(!values.email){
      errors.email = "email of hacker cannot be empty"
    } else if(!regex.test(values.email)){
      errors.email = "Email is invalid"
    }
    return errors;
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 &&isSubmit){
      console.log(formValues)
    }

  }, [formErrors, formValues, isSubmit])

return (
    <div className={registerStyles.mainContainer}>
      <div className={registerStyles.homeLink}> Go <a href="/">Home</a></div>
      <div className = {registerStyles.pageHeader}>
        <h1>Register</h1>
      </div>
      {Object.keys(formErrors).length===0 &&isSubmit?<p>Succesfully registered {teamName}</p>:""}
      <form onSubmit={handleSubmit}>
        <div className = {registerStyles.formSection}>
          <div className={registerStyles.fieldSection}>
            <label>team name</label><br/>
            <input type="text" className={registerStyles.inputField} name="teamname"onChange={(e) => {setTeamName(e.target.value); handleChange(e)}}/>
            <p>{formErrors.teamname}</p>
          </div>
          <div className={registerStyles.fieldSection}>
            <div className={registerStyles.selectField} >
            <label>number of hackers</label><br/>
              <div className={registerStyles.selectFieldCurrent} tabIndex="1" name="numberhackers" onChange={(e) =>{setNumberHackers(e.target.value); handleChange(e)}}>
                  <div className={registerStyles.selectFieldValue}>
                  <input className={registerStyles.selectFieldInput} type="radio" id="0" value={1} name="numberhackers" />
                  {/* <p>{formErrors.numberhackers}</p> */}
                  <p className={registerStyles.selectFieldInputText}>solo</p>
                  </div>
                  <div className={registerStyles.selectFieldValue}>
                  <input className={registerStyles.selectFieldInput} type="radio" id="1" value={2} name="numberhackers" />
                  <p className={registerStyles.selectFieldInputText}>duo</p>
                  </div>
                  <div className={registerStyles.selectFieldValue}>
                  <input className={registerStyles.selectFieldInput} type="radio" id="2" value={3} name="numberhackers" />
                  <p className={registerStyles.selectFieldInputText}>trio</p>
                  </div>
                  <div className={registerStyles.selectFieldValue}>
                  <input className={registerStyles.selectFieldInput} type="radio" id="3" value="4" name="numberhackers" defaultChecked="checked" disabled/>
                  <p className={registerStyles.selectFieldInputText}>quad</p>
                  </div><img className={registerStyles.selectFieldIcon} src={DropDown} alt={DropDown} aria-hidden="true"/>
              </div>
              <ul className={registerStyles.selectFieldList}>
                  <li>
                    <label className={registerStyles.selectFieldOption} htmlFor="0" aria-hidden="true">solo
                      <span><img src={Solo} alt={Solo}/></span>
                    </label>
                  </li>
                  <li>
                    <label className={registerStyles.selectFieldOption} htmlFor="1" aria-hidden="true">duo
                      <span><img src={Duo} alt={Duo}/></span>
                    </label>
                  </li>
                  <li>
                    <label className={registerStyles.selectFieldOption} htmlFor="2" aria-hidden="true">trio
                      <span><img src={Trio} alt={Trio}/></span>
                    </label>
                  </li>
                  <li>
                  <label className={registerStyles.selectFieldOption} htmlFor="3" disabled aria-hidden="true">quad
                    <span> disabled</span>
                  </label>
                  </li>
                  <p>{formErrors.numberhackers}</p>
           
              </ul>
              
            </div>
            <div className={registerStyles.emailfieldSection}>
            {Array.from(Array(parseInt(numberHackers)), (e, index) => {
            return <>
            {/* {addFields} */}
                  <input 
                  type="email" 
                  name="email" 
                  className={registerStyles.inputField} 
                  placeholder={`email ${index + 1}`} 
                  onChange={(event) => {handleFormChange(event);handleChange(event)}} 
                  // onBlur = {(e) =>{test.push(e.target.value)}}
                  key={index+1} 
                  id = {index}
                  />
            <p>{formErrors.email}</p></>
            })}
            {!numberHackers <1? <button type ="submit" >Register <strong>{teamName}</strong></button>:"" }
            </div>
            <div className={registerStyles.endTag}>
              <small>Already registered?<span><Link to="/login" />Login</span></small>
            </div>
          </div>
        </div>
      </form>
      <div className={registerStyles.codeTrophy}>
        <img src={Trophy} alt={Trophy} />
      </div>
    </div>
  )

}

export default Register;
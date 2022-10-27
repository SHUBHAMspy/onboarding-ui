import React, { useContext } from 'react';
import { UseContextProvider } from '../../context/StepperContext';
import './style.css';

const ButtonStepController = ({ handleClick, currentStep, steps,buttonName }) => {
  //const {userData,setUserData } = useContext(UseContextProvider)
  console.log(useContext(UseContextProvider));
  return (
    <>
      <button className='login-button' onClick={() => handleClick("create")}>{buttonName}</button>
    </>
  )
}

export default ButtonStepController
import React from 'react'
import './style.css'

const ButtonStepController = ({ handleClick, currentStep, steps,buttonName }) => {
  return (
    <>
      <button className='login-button' onClick={() => handleClick("create")}>{buttonName}</button>
    </>
  )
}

export default ButtonStepController
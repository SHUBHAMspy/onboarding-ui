import React from 'react';
import { useStepperContext } from '../../context/StepperContext';

const CongratulationScreen = () => {
  const { userData } = useStepperContext();
  
  return (
    <div className='congratulations'>
      <div className='check-mark'>&#10003;</div>
      <h2 className='login-heading'>Congratulations,{userData.username}</h2>
      <p className='centered-paragraph'>You have completed onboarding, you can start using the Eden!</p>
    </div>
  )
}

export default CongratulationScreen
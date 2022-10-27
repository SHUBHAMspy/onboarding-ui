import React, { useState } from 'react';
import { useStepperContext } from '../../context/StepperContext';
import forMe from "./onlyme.png";
import './style.css';
import forTeam from './team.png';

const PlanSetup = () => {
  const [selected, setSelected] = useState('')
  const { userData,setUserData } = useStepperContext();
  const plans = [
    {
      id: 1,
      plan: 'For myself',
      description: 'Write better. Think more clearly. Stay organized.',
      img: forMe
      
    },
    {
      id: 2,
      plan: 'With my team',
      description: 'Wikis,docs,tasks & projects, all in one place.',
      img: forTeam
    },

  ]
  return (
    <div className='plan-setup'>
      <h2 className='login-heading'>How you are planning to use Eden?</h2>
      <p className='centered-paragraph'>We'll streamline your setup experience accordingly</p>
      <div className='plans'>
        {
          plans.map((plan,index) => (
            <div 
              className={`plan ${selected.id === plan.id  ? 'selected' : ''}`} 
              key={plan.id}
              onClick={() => {
                setSelected(plan) 
                setUserData({...userData, plan:plan.plan})
              }}
            >
              <img src={plan.img} alt={plan.plan} width='17px' height='20px'/>
              <span className='plan-title'>{plan.plan}</span>
              <p className='plan-description'>{plan.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PlanSetup
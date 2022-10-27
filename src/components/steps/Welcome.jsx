import React from 'react';
import { useStepperContext } from '../../context/StepperContext';
import Input from '../common/input/Input';
import './style.css';

const Welcome = () => {

  const { userData, setUserData } = useStepperContext();
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Steve Jobs",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Full Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "displayname",
      type: "text",
      placeholder: "Steve",
      label: "Display Name",
    },
    
  ];
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
        {/* {error && <div className='error-card'>{error.message}</div>} */}
        <form >
          <h2 className='login-heading'>Welcome! First things first... </h2>
          <p className='centered-paragraph'>You can always change them later.</p>
          <div className='login-inputs'>
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                value={userData[input.name] || ""}
                onChange={handleChange}
              />
            ))}
          </div>
          
        </form>
      </>
  )
}

export default Welcome
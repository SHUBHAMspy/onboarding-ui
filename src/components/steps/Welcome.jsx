import React from 'react';
import Input from '../common/input/Input';
import './style.css';

const Welcome = () => {

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
      name: "identifier",
      type: "text",
      placeholder: "Steve",
      label: "Display Name",
    },
    
  ];
  
  const onChange = () => {

  }
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
                // value={formData[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          
        </form>
      </>
  )
}

export default Welcome
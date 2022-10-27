import React from 'react';
import { useStepperContext } from '../../context/StepperContext';
import Input from '../common/input/Input';
import './style.css';

const WorkspaceSetup = () => {

  const { userData,setUserData } = useStepperContext();
  const inputs = [
    {
      id: 1,
      name: "workspace",
      type: "text",
      placeholder: "Eden",
      label: "Workspace Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    // {
    //   id: 2,
    //   name: "identifier",
    //   type: "text",
    //   placeholder: "Example",
    //   label: "Workspace URL",
    // },
    
  ];

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  

  return (
    <>
      <form >
          <h2 className='login-heading'>Let's set up a home for all your work </h2>
          <p className='centered-paragraph'>You can always create another workspace later.</p>
          <div className='login-inputs'>
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                value={userData[input.name] || ''}
                onChange={handleChange}
              />
            ))}
            <div className='formInput'>
              <label htmlFor="">Workspace URL(optional)</label>
              <div className='workspace-url'>
                <div className='start-link'>www.eden.com/</div>
                <input 
                  className='example-url' 
                  name='url' 
                  type="text" 
                  value={userData['url'] || ''}
                  placeholder='Example' 
                  onChange={handleChange}
                  />
              </div>
            </div>
            
            
          </div>
          
      </form>
    </>
  )
}

export default WorkspaceSetup
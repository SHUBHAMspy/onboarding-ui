import React from 'react';
import Input from '../common/input/Input';
import './style.css';

const WorkspaceSetup = () => {

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

  const onChange = () => {

  }

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
                // value={formData[input.name]}
                onChange={onChange}
              />
            ))}
            <div className='formInput'>
              <label htmlFor="">Workspace URL(optional)</label>
              <div className='workspace-url'>
                <div className='start-link'>www.eden.com/</div>
                <input className='example-url' type="text" placeholder='Example' />
              </div>
            </div>
            
            
          </div>
          
      </form>
    </>
  )
}

export default WorkspaceSetup
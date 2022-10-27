import { useState } from 'react';
import './App.css';
import ButtonStepController from './components/buttonStepController/ButtonStepController';
import Logo from './components/common/logo/Logo';
import CongratulationScreen from './components/steps/CongratulationScreen';
import PlanSetup from './components/steps/PlanSetup';
import Welcome from './components/steps/Welcome';
import WorkspaceSetup from './components/steps/WorkspaceSetup';
import StepShowcaser from './components/stepShowcase/StepShowcaser';

function App() {

  const [currentStep, setCurrentStep] = useState(1);
  // const { userData, setUserData } = useContext(UseContextProvider)

  const steps = [1,2,3,4];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Welcome />;
      case 2:
        return <WorkspaceSetup />;
      case 3:
        return <PlanSetup />;
      case 4:
        return <CongratulationScreen />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    if(direction === "create") newStep++ ;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className='container'>
      <div className="login">
        <Logo/>
        <StepShowcaser steps={steps} currentStep={currentStep}/>
        <div className='form-container'>
          {displayStep(currentStep)}
        </div>
        <ButtonStepController 
          handleClick={handleClick} 
          currentStep={currentStep} 
          buttonName={currentStep === 4 ? 'Launch Eden' : 'Create Workspace'}
        />
      </div>
      
    </div>
  );
}

export default App;

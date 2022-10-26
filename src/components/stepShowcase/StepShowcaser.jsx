import React, { useEffect, useRef, useState } from "react";
import './style.css';

const StepShowcaser = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
      //current step and completed
      if (count <= stepNumber) {
        newSteps[count] = {
          current: stepNumber,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          current: stepNumber,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    console.log(newSteps);
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          step,
          completed: false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step,index) => {
    return(
      <div
        key={index}
        className={
          index !== newStep.length - 1
          ? "steps"
          : "last-step"
        }
      >
        <div className="step-container">
          <div className={`step ${step.selected ? 'step-color' : ""}`}
          >
            {index + 1}
          </div>

        </div>
        <div className={`line ${step.current === index && step.selected ? 'line-completed': ''} ${step.completed && step.current !== index? 'line-previous': ''}`}></div>
        
      </div>
    )
  })

  return (
    <div className="step-display">
      {stepsDisplay}
    </div>
  )
}

export default StepShowcaser
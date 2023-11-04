import { useState } from 'react';
import Step1Image from '../images/strategy/step-1.svg';
import Step2Image from '../images/strategy/step-2.svg';
import Step3Image from '../images/strategy/step-3.svg';
import Step4Image from '../images/strategy/step-4.svg';

const Steps = {
  IncreaseValuation: 'Increase valuation',
  SecureFunding: 'Secure funding',
  MinimizeRisk: 'Minimize risk',
  PreventIpTheft: 'Prevent IP theft',
};

const StrategyMenu = () => {
  const [step, setStep] = useState(Steps.IncreaseValuation);

  let currentImage;
  switch (step) {
    case Steps.SecureFunding:
      currentImage = Step2Image.src;
      break;
    case Steps.MinimizeRisk:
      currentImage = Step3Image.src;
      break;
    case Steps.PreventIpTheft:
      currentImage = Step4Image.src;
      break;
    case Steps.IncreaseValuation:
    default:
      currentImage = Step1Image.src;
      break;
  }

  return (
    <div>
      <div className="flex flex-row justify-around">
        <div>
          {Object.values(Steps).map(item => {
            const selectedClasses = item === step ? 'font-bold bg-turqoise-1 border-b-2 pb-[17px]' : ' pb-[18px]';
            return (
              <button
                onClick={() => setStep(item)}
                className={`text-body-dark pt-[16px] pb-[16px] pl-[24px] pr-[24px] text-[18px] leading-[18px] font-medium border-b border-b-1 border-body-dark rounded-t-[8px] ${selectedClasses}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <img src={currentImage} alt="Strategy image" />
      </div>
    </div>
  )
};

export default StrategyMenu;

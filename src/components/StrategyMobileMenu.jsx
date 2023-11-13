import { useEffect, useRef, createRef } from 'react';
import RightIcon from '../images/chevron-right.svg';
import LeftIcon from '../images/chevron-left.svg';

const StrategyMobileMenu = ({ steps, className, setStep, step }) => {
  const buttonRefs = useRef(Object.values(steps).reduce((acc, step) => {
    acc[step] = createRef();
    return acc;
  }, {}));

  useEffect(() => {
    if (buttonRefs.current[step] && buttonRefs.current[step].current) {
      buttonRefs.current[step].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [step, steps]);

  let rightButton;
  if (step !== steps.PreventIpTheft) {
    rightButton = (
      <button
        onClick={() => {
          if (step === steps.IncreaseValuation) {
            setStep(steps.SecureFunding);
          } else if (step === steps.SecureFunding) {
            setStep(steps.MinimizeRisk);
          } else if (step === steps.MinimizeRisk) {
            setStep(steps.PreventIpTheft);
          }
        }}
        className='p-[14px] min-w-[20px] min-h-[40px] box-content '
      >
        <img className="" src={RightIcon.src} alt="Right icon"/>
      </button>
    );
  }

  let leftButton;
  if (step !== steps.IncreaseValuation) {
    leftButton = (
      <button
        onClick={() => {
          if (step === steps.PreventIpTheft) {
            setStep(steps.MinimizeRisk);
          } else if (step === steps.MinimizeRisk) {
            setStep(steps.SecureFunding);
          } else if (step === steps.SecureFunding) {
            setStep(steps.IncreaseValuation);
          }
        }}
        className='p-[14px] min-w-[20px] min-h-[40px] box-content '
      >
        <img className="" src={LeftIcon.src} alt="Left icon" />
      </button>
    );
  }

  return (
    <div className={`flex flex-row h-[53px] ${className}`}>
      {leftButton}
      <div className=' flex flex-no-wrap overflow-x-hidden'>
        {Object.values(steps).map((item) => {
          const selectedClasses = item === step ? 'font-bold bg-turqoise-1 border-b-2 pb-[17px]' : ' pb-[18px]';

          return (
            <button
              ref={buttonRefs.current[item]}
              key={item}
              className={`whitespace-nowrap text-body-dark pt-[16px] pb-[16px] pl-[24px] pr-[24px] text-[18px] leading-[18px] font-medium border-b border-b-1 border-body-dark rounded-t-[8px] ${selectedClasses}`}
              onClick={() => setStep(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      {rightButton}
    </div>
  )
};

export default StrategyMobileMenu;

import { useCallback, useEffect, useState } from 'react';
import Step1Image from '../images/strategy/step-1.svg';
import Step2Image from '../images/strategy/step-2.svg';
import Step3Image from '../images/strategy/step-3.svg';
import Step4Image from '../images/strategy/step-4.svg';
import Step1MobileImage from '../images/strategy/step-1-mobile.svg';
import Step2MobileImage from '../images/strategy/step-2-mobile.svg';
import Step3MobileImage from '../images/strategy/step-3-mobile.svg';
import Step4MobileImage from '../images/strategy/step-4-mobile.svg';

const Steps = {
  IncreaseValuation: 'Increase valuation',
  SecureFunding: 'Secure funding',
  MinimizeRisk: 'Minimize risk',
  PreventIpTheft: 'Prevent IP theft',
};

const StrategyMenu = () => {
  const [step, setStep] = useState(Steps.IncreaseValuation);

  const preloadImage = useCallback((imgUrl) => {
    const img = new Image();
    img.src = imgUrl;
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      preloadImage(Step2Image.src);
      preloadImage(Step3Image.src);
      preloadImage(Step4Image.src);
    } else {
      preloadImage(Step2MobileImage.src);
      preloadImage(Step3MobileImage.src);
      preloadImage(Step4MobileImage.src);
    }
  }, []);

  let currentImage, currentImageMobile;
  switch (step) {
    case Steps.SecureFunding:
      currentImage = Step2Image.src;
      currentImageMobile = Step2MobileImage.src;
      break;
    case Steps.MinimizeRisk:
      currentImage = Step3Image.src;
      currentImageMobile = Step3MobileImage.src;
      break;
    case Steps.PreventIpTheft:
      currentImage = Step4Image.src;
      currentImageMobile = Step4MobileImage.src;
      break;
    case Steps.IncreaseValuation:
    default:
      currentImage = Step1Image.src;
      currentImageMobile = Step1MobileImage.src;
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
                key={item}
                onClick={() => setStep(item)}
                className={`text-body-dark pt-[16px] pb-[16px] pl-[24px] pr-[24px] text-[18px] leading-[18px] font-medium border-b border-b-1 border-body-dark rounded-t-[8px] ${selectedClasses}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center mt-[48px]">
        <img className="hidden md:block" src={currentImage} alt="Strategy image" />
        <img className="md:hidden" src={currentImageMobile} alt="Strategy image" />
      </div>
    </div>
  )
};

export default StrategyMenu;

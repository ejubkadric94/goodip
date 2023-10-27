import { useState } from 'react';
import MenuImage from '../images/menu.svg';
import CloseImage from '../images/close.png'
import CalendlyButton from '../components/CalendlyButton';

const MobileHeader = () => {
  const [expanded, setExpanded] = useState(false);

  let menu;
  if (expanded) {
    menu = (
      <div className='absolute top-[80px] left-0 bg-white z-1 w-full h-[calc(100%-80px)] flex flex-col pl-[16px] pr-[16px]'>    
        <a onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#strategy">Strategy</a>
        <a onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#methods">Methods</a>
        <a onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#team">Team</a>
        <a onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#startup-stories">Startup Stories</a>
        <CalendlyButton className="w-full justify-around" client:only="react" />
      </div>
    );
  }

  return (
    <>
      <button className='md:hidden' aria-expanded={expanded} onClick={() => setExpanded(!expanded)} title='Menu'>
        <img src={expanded ? CloseImage.src : MenuImage.src} alt="Menu" />
      </button>
      {menu}
    </>
  );
};

export default MobileHeader;
import { useEffect, useRef, useState } from 'react';
import MenuImage from '../images/menu.svg';
import CloseImage from '../images/close.png'
import CalendlyButton from '../components/CalendlyButton';
import { createPortal } from 'react-dom';

const MobileHeader = () => {
  const [expanded, setExpanded] = useState(false);
  const menuRefLink = useRef(null);

  useEffect(() => {
    if (expanded) {
      menuRefLink.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expanded]);

  let menuPortal;
  if (expanded) {
    const menu = (
      <div className='absolute top-[80px] left-0 bg-white w-full h-[calc(100%-80px)] flex flex-col pl-[16px] pr-[16px]'>    
        <a ref={menuRefLink} onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#strategy">Strategy</a>
        <a onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#methods">Methods</a>
        <a onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#team">Team</a>
        <a onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#startups">Startups</a>
        <a onClick={() => setExpanded(false)} class="h-[48px] text-16 text-body-dark flex justify-around items-center" href="/#stories">Stories</a>
        <CalendlyButton className="w-full justify-around" client:only="react" />
      </div>
    );
    menuPortal = createPortal(menu, document.body);
  }

  return (
    <>
      <button className='md:hidden' aria-expanded={expanded} onClick={() => setExpanded(!expanded)} title='Menu'>
        <img src={expanded ? CloseImage.src : MenuImage.src} alt="Menu" />
      </button>
      {menuPortal}
    </>
  );
};

export default MobileHeader;
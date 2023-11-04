import { useState, useEffect, useCallback } from 'react';
import ArrowUpImage from '../images/arrow-up.svg';

const ScrollUp = ({ className = "" }) => {
  const [showScroller, setShowScroller] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0 && showScroller) {
      setShowScroller(false);
    } else if (!showScroller && window.scrollY !== 0) {
      setShowScroller(true);
    }
  }, [showScroller])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const onClick = useCallback(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  if (!showScroller) {
    return null;
  }

  return (
    <>
      <button
        onClick={onClick}
        className={`fixed right-[32px] bottom-[32px] p-[16px] border border-border-primary border-[1px] rounded-lg bg-body-dark z-40 ${className}`}
        title='to the top'
      >
        <img src={ArrowUpImage.src} alt='to the top'/>
      </button>
    </>
  );
};

export default ScrollUp;


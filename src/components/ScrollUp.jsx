import ArrowUpImage from '../images/arrow-up.svg';
import { useCallback } from 'react';
// const { className } = Astro.props;

const ScrollUp = ({ className = "" }) => {
  const onClick = useCallback(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);



  return (
    <>
      <button
        onClick={onClick}
        className={`fixed right-[32px] bottom-[32px] p-[16px] border border-border-primary border-[1px] rounded-lg bg-body-dark ${className}`}
        title='to the top'
      >
        <img src={ArrowUpImage.src} alt='to the top'/>
      </button>
    </>
  );
};

export default ScrollUp;


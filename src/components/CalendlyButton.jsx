const CalendlyButton = ({ className = "" }) => {
  return (
    <button className={`text-body-dark rounded-lg bg-action font-bold text-18 h-[48px] pr-[24px] pl-[24px] flex items-center ${className}`}>Schedule a call</button>
  );
};

export default CalendlyButton;

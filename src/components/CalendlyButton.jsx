import { PopupButton } from "react-calendly";

const CalendlyButton = ({ className = "" }) => {
  return (
    <PopupButton
      url="https://calendly.com/goodip-io/goodip-call-with-a-client"
      /*
        * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
        * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
        */
      rootElement={document.getElementById("root")}
      text="Schedule a call"
      className={`text-body-dark rounded-lg bg-action font-bold text-18 h-[48px] pr-[24px] pl-[24px] flex items-center ${className}`}
    />
  );
};

export default CalendlyButton;

import { useState } from "react";
import { useForm } from "react-hook-form"


const ContactBefore = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      acceptPrivacyPolicy: false,
    }
  });

  const onSubmit = async (data) => {

    try {
      const request = await fetch(import.meta.env.PUBLIC_DOMAIN + '/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
        }),
      });

      document.querySelector('#hidden-part').classList.remove('hidden');
      document.querySelector('#hidden-letsTalk').classList.remove('hidden');
      
      setIsSubmitted(true);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  let content;
  if (isSubmitted) {
    content = null;
  } else {
    content = (
      <div className="bg-background-light pb-[40px] pl-[16px] pr-[16px] md:p-[80px]">
        <div className="leading-[48px] text-body-dark text-[20px] md:text-[24px] font-extrabold md:font-bold text-center pb-[20px] text-center">
          Before you see this case study, please let us know your contact info:
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-around w-full pt-[40px] "
        >
          <div className="w-full md:w-[540px] mx-auto">
            <label className="text-[18px] font-semibold text-blue-2 flex flex-col mb-[4px]">Full Name</label>
            <input
              {...register("fullName", { required: true })}
              placeholder="Full Name"
              className="w-full pt-[16px] pb-[16px] pr-[24px] pl-[24px] border border-1 border-border-primary rounded-lg placeholder:text-body-dark placeholder:leading-[21px] placeholder:text-[14px] placeholder:text-opacity-50"
            />
            {errors.fullName && <div className="text-[red]">This field is required</div>}
          </div>
    
          <div className="w-full md:w-[540px] mx-auto">
            <label className="mt-[24px] text-[18px] font-semibold text-blue-2 flex flex-col mb-[4px]">Email</label>
            <input
              {...register("email", { required: true, pattern: { value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid email address" }})} 
              placeholder="Email"
              className="w-full pt-[16px] pb-[16px] pr-[24px] pl-[24px] border border-1 border-border-primary rounded-lg placeholder:text-body-dark placeholder:leading-[21px] placeholder:text-[14px] placeholder:text-opacity-50"
            />
            {errors.email && <div className="text-[red]">Invalid email</div>}
          </div>

          <div className="w-full md:w-[540px] mx-auto">

            <input
              type='checkbox'
              {...register("acceptPrivacyPolicy", { required: true })}
              className='mr-[12px] mt-[24px]'
            />
            <label className="text-blue-2 font-semibold">I accept the privacy policy</label>
            {errors.acceptPrivacyPolicy && <div className="text-[red]">This field is required</div>}
          </div>
    
          <input 
            type="submit"
            value="Submit"
            className="cursor-pointer md:w-[540px] mx-auto mt-[24px] text-body-dark rounded-lg bg-action font-bold text-18 h-[48px] pr-[24px] pl-[24px] flex items-center text-[18px] w-full justify-around placeholder:text-body-dark"
          />
        </form>
      </div>
    );
  }

  return <>{content}</>;
};

export default ContactBefore;

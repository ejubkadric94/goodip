import { useState } from "react";
import { useForm } from "react-hook-form"


const ContactUsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      question: "",
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
          company: data.company,
          question: data.question,
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  let content;
  if (isSubmitted) {
    content = (
      <div className="leading-[48px] text-body-dark text-[20px] md:text-[24px] font-extrabold md:font-bold text-center mt-[40px]">
        Your inquiry was sent to us. We will reach out to you as soon as possible!
      </div>
    );
  } else {
    content = (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-around w-full mt-[40px] md:mt-[80px]"
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
          <label className="mt-[24px] text-[18px] font-semibold text-blue-2 flex flex-col mb-[4px]">Company</label>
          <input
            {...register("company")}
            placeholder="Company"
            className="w-full pt-[16px] pb-[16px] pr-[24px] pl-[24px] border border-1 border-border-primary rounded-lg placeholder:text-body-dark placeholder:leading-[21px] placeholder:text-[14px] placeholder:text-opacity-50"
          />
        </div>
  
        <div className="w-full md:w-[540px] mx-auto">
          <label className="mt-[24px] text-[18px] font-semibold text-blue-2 flex flex-col mb-[4px]">What can we help you with?</label>
          <textarea 
            {...register("question", { required: true })}
            placeholder="What can we help you with?"
            className="resize-none h-[175px] w-full pt-[16px] pb-[16px] pr-[24px] pl-[24px] border border-1 border-border-primary rounded-lg placeholder:text-body-dark placeholder:leading-[21px] placeholder:text-[14px] placeholder:text-opacity-50"
          />
          {errors.question && <div className="text-[red]">This field is required</div>}
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
          value="Send a message"
          className="cursor-pointer md:w-[540px] mx-auto mt-[24px] text-body-dark rounded-lg bg-action font-bold text-18 h-[48px] pr-[24px] pl-[24px] flex items-center text-[18px] w-full justify-around placeholder:text-body-dark"
        />
      </form>
    );
  }

  return <>{content}</>;
};

export default ContactUsForm;

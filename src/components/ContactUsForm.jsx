import { useForm } from "react-hook-form"

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      question: ""
    }
  });

  const onSubmit = (data) => console.log(data)

  // const onSubmit = async () => {
  //   try {
  //     console.log('sending...');
  //     const request = await fetch('.netlify/functions/contact', {
  //       method: 'POST',
  //     });
  //     console.log('sent!');
  //   } catch (error) {
  //     console.log('error: ', error);
  //   }
  // };

  return (
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
        {/* {errors.fullName && <p>This field is required</p>} */}
      </div>

      <div className="w-full md:w-[540px] mx-auto">
        <label className="mt-[24px] text-[18px] font-semibold text-blue-2 flex flex-col mb-[4px]">Email</label>
        <input
          {...register("email", { required: true, pattern: { value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid email address" }})} 
          placeholder="Email"
          className="w-full pt-[16px] pb-[16px] pr-[24px] pl-[24px] border border-1 border-border-primary rounded-lg placeholder:text-body-dark placeholder:leading-[21px] placeholder:text-[14px] placeholder:text-opacity-50"
        />
        {/* {errors.email && <p>{errors.email}</p>} */}
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
        {/* {errors.question && <p>{errors.question}</p>} */}
      </div>

      <input type="submit" value="Send a message" className="md:w-[540px] mx-auto mt-[24px] text-body-dark rounded-lg bg-action font-bold text-18 h-[48px] pr-[24px] pl-[24px] flex items-center text-[18px] w-full justify-around placeholder:text-body-dark" />
    </form>
  )
};

export default ContactUsForm;

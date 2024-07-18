import { useForm } from "react-hook-form";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneNoInput from "@/components/Elements/PhoneNoInput";
import StepCounter from "@/components/Elements/StepCounter";
import FormLogo from "@/components/Elements/FormLogo";

// Define validation rules for each form field
const validationRules = {
  firstName: {
    required: "First Name is required",
  },
  lastName: {
    required: "Last Name is required",
  },
  companyName: {
    required: `Your Company's Name is required`,
  },
  jobTitle: {
    required: "Job Title is required",
  },
  mobileNo: {
    required: "Mobile No. is required",
    pattern: {
      value: /^[0-9]/,
      message: "Invalid phone number",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
    },
  },
};

const FormOne = ({
  changeBgState,
  changeActive,
}: {
  changeBgState: (value: string) => void;
  changeActive: (value: number) => void;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  //add Item to backeend
  const addItem = async (data: any) => {};

  const onSubmit = (data: any) => {
    addItem(data);
    changeBgState("url('/images/homepage/signup-bg4.svg')");
    changeActive(2);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="signup-form">
      <div className="mb-6">
        <FormLogo />
        <div className="px-[15px]">
          <StepCounter activeOne />
        </div>
        <h3 className="text-[#1B1818] font-semibold text-2xl mb-1">
          Apply to join Frack’s workforce
        </h3>
        <p className="text-gray-500 text-sm">
          Discover exciting roles at the world's best companies, join a top{" "}
          <br className="max-sm:hidden" />
          class community, and access exclusive learning opportunities and
          benefits.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex formdivs max-sm:flex-col mb-[20px] gap-[20px]">
          <div className="basis-1/2">
            <label>
              First Name <span className="text-red-600 text-base">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your First Name"
              {...register("firstName", {
                required: validationRules.firstName.required,
              })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{`${errors.firstName.message}`}</span>
            )}
          </div>
          {/* Last Name */}
          <div className="basis-1/2">
            <label>
              Last Name <span className="text-red-600 text-base">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Last Name"
              {...register("lastName", {
                required: validationRules.lastName.required,
              })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{`${errors.lastName.message}`}</span>
            )}
          </div>
        </div>
        {/* Email */}
        <div className="flex formdivs flex-col mb-4 gap-[6px]">
          <label>
            Email Address <span className="text-red-600 text-base">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("email", {
              required: validationRules.email.required,
              pattern: validationRules.email.pattern,
            })}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{`${errors.email.message}`}</span>
          )}
        </div>
        {/* Mobile No. */}
        <div className="flex formdivs flex-col mb-4 gap-[6px]">
          <label>
            Phone Number <span className="text-red-600 text-base">*</span>
          </label>
          <PhoneNoInput register={register} validationRules={validationRules} />
          {errors.mobileNo && (
            <span className="text-red-600 text-sm">{`${errors.mobileNo.message}`}</span>
          )}
        </div>
        {/* password */}
        <div className="flex formdivs flex-col mb-6 gap-[6px]">
          <label>Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pr-10"
              {...register("password", {
                required: "Password is required",
                pattern: validationRules.password.pattern,
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-600 text-sm">{`${errors.password.message}`}</span>
          )}
        </div>
        <div className="mb-6 flex items-center  ">
          <input
            type="checkbox"
            name="approval-check"
            id="approval-check"
            className="rounded-md h-5 w-5 accent-[#000080]"
            required
          />
          <label
            htmlFor="approval-check"
            className="ml-2 text-sm text-[#667185]"
          >
            By submitting my personal data, I consent to Frack collecting,
            processing, and storing my information.
          </label>
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-[#000080] text-white shadow-sm rounded-lg hover:shadow-xl hover:bg-[#000099] transition-all duration-300"
          disabled={isSubmitting}
        >
          Continue
        </button>
      </form>
      <p className="text-sm text-[#667185] mt-6 mb-20 text-center">
        Already have an account?{" "}
        <Link href={"/sign-in"} className="text-black font-semibold ">
          Log in
        </Link>
      </p>
    </section>
  );
};

export default FormOne;

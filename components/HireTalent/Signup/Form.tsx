"use client";
import { FieldError, useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneNoInput from "@/components/Elements/PhoneNoInput";
import FormLogo from "@/components/Elements/FormLogo";
import { getRandomColor } from "@/utilities/constants";
import Dropdown, { DropdownSelector } from "@/components/Elements/Dropdown";
import { industriesArr } from "@/utilities/constants/searchbarData";

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
  companyRole: {
    required: "Company Role is required",
  },
  location: {
    required: "Location is required",
  },
  country: {
    required: "Country is required",
  },
  preference: {
    required: "This is required",
  },
  industries: {
    required: "This is required",
  },
  privacyConsent: {
    required: "This is required",
  },
  mobileNo: {
    required: "Mobile No. is required",
    pattern: {
      value: /^[0-9]/,
      message: "Invalid mobile phone number",
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
  url: {
    required: "Your LinkedIn URL is required",
    pattern: {
      value: /^https:\/\/(www\.)?linkedin\.com\/.*$/,
      message: "Invalid LinkedIn URL",
    },
  },
};

const HireTalentSignUpForm = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  //add Item to backeend
  const addItem = async (data: any) => {
    const hexCode = getRandomColor();
    if (data) {
      const companyData = {
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        phoneNumber: data.mobileNo.trim(),
        countryCode: data.countryCode.trim(),
        emailAddress: data.email.trim(),
        password: data.password.trim(),
        country: data.country.trim(),
        hex: hexCode,
        location: data.location.trim(),
        linkedInUrl: data.url.trim(),
        companyName: data.companyName.trim(),
        industry: data.industries
          .split(", ")
          .map((industry: string) => industry.trim()),
        companyRole: data.companyRole.trim(),
        preference: data.preference.trim(),
        privacyConsent: data.privacyConsent,
      };

      console.log(companyData);
    }
  };

  const onSubmit = (data: any) => {
    router.push("./dashboard");
    addItem(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="md:max-w-[529px] max-sm:p-4">
      <div className="mb-6">
        <FormLogo />
        <h3 className="text-[#1B1818] font-semibold text-2xl mb-1">
          Register for find talent
        </h3>
        <p className="text-gray-500 text-sm">
          we can unlock the power of talent and drive success for{" "}
          <br className="max-sm:hidden" /> businesses around the world.
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
            placeholder="Enter your work address"
            {...register("email", {
              required: validationRules.email.required,
              pattern: validationRules.email.pattern,
            })}
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{`${errors.email.message}`}</span>
          )}
        </div>
        {/* Company Name */}
        <div className="flex formdivs flex-col mb-4 gap-[6px]">
          <label>
            Company's Name <span className="text-red-600 text-base">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your company's name"
            {...register("companyName", {
              required: validationRules.companyName.required,
            })}
          />
          {errors.companyName && (
            <span className="text-red-600 text-sm">{`${errors.companyName.message}`}</span>
          )}
        </div>
        {/* linkedIn */}
        <div className="flex formdivs flex-col mb-4 gap-[6px]">
          <label>
            Company's linkedin url{" "}
            <span className="text-red-600 text-base">*</span>
          </label>
          <input
            type="url"
            placeholder="Enter linkedin url"
            {...register("url", {
              required: validationRules.url.required,
              pattern: validationRules.url.pattern,
            })}
          />
          {errors.url && (
            <span className="text-red-600 text-sm">{`${errors.url.message}`}</span>
          )}
        </div>
        {/* Job TiTle */}
        <div className="flex formdivs flex-col mb-4 gap-[6px]">
          <label>
            Company Role <span className="text-red-600 text-base">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your job title"
            {...register("companyRole", {
              required: validationRules.companyRole.required,
            })}
          />
          {errors.companyRole && (
            <span className="text-red-600 text-sm">{`${errors.companyRole.message}`}</span>
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
        <div className="flex formdivs max-sm:flex-col mb-[20px] gap-[20px]">
          <div className="basis-1/2">
            <label>
              Country <span className="text-red-600 text-base">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter company's country"
              {...register("country", {
                required: validationRules.country.required,
              })}
            />
            {errors.country && (
              <span className="text-red-500 text-sm">{`${errors.country.message}`}</span>
            )}
          </div>
          {/* Last Name */}
          <div className="basis-1/2">
            <label>
              Location (state/city){" "}
              <span className="text-red-600 text-base">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter company's location e.g Lagos"
              {...register("location", {
                required: validationRules.location.required,
              })}
            />
            {errors.location && (
              <span className="text-red-500 text-sm">{`${errors.location.message}`}</span>
            )}
          </div>
        </div>
        <Dropdown
          ItemsArr={["On Site", "Hybrid", "Remote", "Fully Remote"]}
          label="Work Culture"
          placeholder="Select your work culture"
          name={"preference"}
          required={true}
          register={register}
          errors={errors.preference as FieldError}
          validationRules={validationRules.preference.required}
          setValue={setValue}
        />
        <br className="mb-4" />
        {/* industry */}
        <DropdownSelector
          ItemsArr={industriesArr}
          label="Select industry that best represent your company (max 3)"
          placeholder="Choose up to 3 industries"
          name="industries"
          required={true}
          register={register}
          errors={errors.industries as FieldError}
          validationRules={{
            required: "At least one industry must be selected",
          }}
          setValue={setValue}
          className={false}
        />
        <br className="mb-2" />
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
        <div className="mb-6  ">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="approval-check"
              className="rounded-md h-5 w-5 accent-[#000080]"
              {...register("privacyConsent", {
                required: validationRules.privacyConsent.required,
              })}
            />
            <label
              htmlFor="approval-check"
              className="ml-2 text-sm text-[#667185]"
            >
              By submitting my personal data, I consent to Frack collecting,
              processing, and storing my information.
            </label>
          </div>
          {errors.privacyConsent && (
            <span className="text-red-500 text-sm">{`${errors.privacyConsent.message}`}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-[#000080] text-white shadow-sm rounded-lg hover:shadow-xl hover:bg-[#000099] transition-all duration-300"
          disabled={isSubmitting}
        >
          Find Talent
        </button>
      </form>
      <p className="text-sm text-[#667185] mt-6  text-center">
        Already have an account?{" "}
        <Link href={"/hire-talent"} className="text-black font-semibold ">
          Log in
        </Link>
      </p>
    </section>
  );
};

export default HireTalentSignUpForm;

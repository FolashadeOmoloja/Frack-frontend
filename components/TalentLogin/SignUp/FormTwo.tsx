import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import StepCounter from "@/components/Elements/StepCounter";
import Dropdown from "@/components/Elements/Dropdown";
import { searchBarData } from "@/utilities/constants/searchbarData";

// Define validation rules for each form field
const validationRules = {
  url: {
    required: "Your LinnkedIn url is required",
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid LinkedIn url",
    },
  },
};

const FormTwo = ({
  changeBgState,
}: {
  changeBgState: (value: string) => void;
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
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="md:max-w-[529px] max-sm:p-4 mt-6 max-xl:px-[50px]">
      <div className="mb-6">
        <div
          className="ml-[-35px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={"/images/homepage/frack.png"}
            alt={"logo"}
            width={191}
            height={96}
            quality={100}
            priority
          />
        </div>
        <div className="px-[15px]">
          <StepCounter activeTwo pastActiveOne />
        </div>
        <h3 className="text-[#1B1818] font-semibold text-2xl mb-1">
          Professional expertise
        </h3>
        <p className="text-gray-500 text-sm">
          Let us match you with the greatest companies in the world.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Dropdown
          ItemsArr={searchBarData[1].options}
          label="Role"
          placeholder="Select your role"
        />
        <Dropdown
          ItemsArr={[
            "2-4 years",
            "4-6 years",
            "6-8 years",
            "8-10 years",
            "above 10 years",
          ]}
          label="Total years of work experience"
          placeholder="Select years of work experience"
        />
        <Dropdown
          ItemsArr={searchBarData[0].options}
          label="Primary skill"
          placeholder="Select skills"
        />
        <Dropdown
          ItemsArr={["English", "Spanish", "French"]}
          label="Language"
          placeholder="Select your language"
        />
        {/* Email */}
        <div className="flex formdivs flex-col mb-4 gap-[6px]">
          <label>
            linkedin url <span className="text-red-600 text-base">*</span>
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
        <button
          type="submit"
          className="w-full h-12 bg-[#000080] text-white shadow-sm rounded-lg hover:shadow-xl hover:bg-[#000099] transition-all duration-300"
          disabled={isSubmitting}
        >
          Continue
        </button>
      </form>
    </section>
  );
};

export default FormTwo;

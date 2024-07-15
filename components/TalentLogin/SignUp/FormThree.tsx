import { FieldError, useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StepCounter from "@/components/Elements/StepCounter";
import Dropdown from "@/components/Elements/Dropdown";
import { searchBarData } from "@/utilities/constants/searchbarData";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

const validationRules = {
  url: {
    required: "Your LinkedIn URL is required",
    pattern: {
      value: /^https:\/\/(www\.)?linkedin\.com\/.*$/,
      message: "Invalid LinkedIn URL",
    },
  },
  role: {
    required: "Role required",
  },
  experience: {
    required: "Experience required",
  },
};

const FormThree = ({
  changeBgState,
  changeActive,
}: {
  changeBgState: (value: string) => void;
  changeActive: (value: number) => void;
}) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  //add Item to backeend
  const addItem = async (data: any) => {
    if (data) {
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    addItem(data);
    changeBgState("url('/images/homepage/signup-bg5.svg')");
    changeActive(3);
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
          Upload your resume
        </h3>
        <p className="text-gray-500 text-sm">
          This will form the basis of your Frack profile, which can be updated
          any time
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Dropdown
          ItemsArr={["Twitter", "Whatsapp", "LinkedIn", "Referral"]}
          label="How did you hear about Frack? (optional)"
          placeholder="Select an option"
          name={"chanel"}
          required={false}
          register={register}
          setValue={setValue}
        />

        <div className="mb-12 flex gap-10 max-xsm:gap-5">
          <div className="login-btn centered gap-3 cursor-pointer icon-animate">
            <FaArrowLeft /> <span>Back</span>
          </div>
          <button type="submit" className="login-btn" disabled={isSubmitting}>
            Continue
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormThree;

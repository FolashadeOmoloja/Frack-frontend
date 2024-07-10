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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dropdown
          ItemsArr={searchBarData[1].options}
          label="Role"
          placeholder="Select your role"
        />
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

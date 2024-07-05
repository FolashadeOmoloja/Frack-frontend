"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

// Define validation rules for each form field
const validationRules = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Pickup Date is required",
  },
};

const HireTalentLoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  //add Item to backeend
  const addItem = async (data: any) => {};

  const onSubmit = (data: any) => {
    addItem(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="md:max-w-[529px]">
      <div className="mb-6">
        <div className="ml-[-35px]">
          <Image
            src={"/images/homepage/frack.png"}
            alt={"logo"}
            width={191}
            height={96}
            quality={100}
            priority
          />
        </div>
        <h3 className="text-[#1B1818] font-semibold text-2xl mb-1">
          Log in to find talent
        </h3>
        <p className="text-gray-500 text-sm">
          we can unlock the power of talent and drive success for <br />{" "}
          businesses around the world.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="flex formdivs flex-col mb-4 gap-[6px]">
          <label>Email Address</label>
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

        <button
          type="submit"
          className="w-full h-12 bg-[#000080] text-white shadow-sm rounded-lg hover:shadow-xl hover:bg-[#000099] transition-all duration-300"
          disabled={isSubmitting}
        >
          Find Talent
        </button>
      </form>
      <p className="text-sm text-[#667185] mt-6 text-center">
        Don’t have an account?{" "}
        <Link
          href={"/hire-talent/sign-up"}
          className="text-black font-semibold"
        >
          Sign up
        </Link>
      </p>
    </section>
  );
};

export default HireTalentLoginForm;

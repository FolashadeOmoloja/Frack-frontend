import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import StepCounter from "@/components/Elements/StepCounter";
import Dropdown from "@/components/Elements/Dropdown";
import { searchBarData } from "@/utilities/constants/searchbarData";
import { FaArrowLeft } from "react-icons/fa6";

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
          name={"role"}
          required={true}
          register={register}
          errors={errors.role}
          validationRules={validationRules.role.required}
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
          name={"experience"}
          required={true}
          register={register}
          errors={errors.experience}
          validationRules={validationRules.experience.required}
        />
        <Dropdown
          ItemsArr={searchBarData[0].options}
          label="Primary skill"
          placeholder="Select skills"
          name={"skills"}
          required={false}
          register={register}
        />
        <Dropdown
          ItemsArr={["English", "Spanish", "French"]}
          label="Language"
          placeholder="Select your language"
          name={"language"}
          required={false}
          register={register}
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

export default FormTwo;

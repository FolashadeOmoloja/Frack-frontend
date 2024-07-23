import PhoneNoInput from "@/components/Elements/PhoneNoInput";
import { useForm } from "react-hook-form";
import { validationRules } from "@/utilities/constants";
import { searchBarData } from "@/utilities/constants/searchbarData";
import Dropdown from "@/components/Elements/Dropdown";
import { userObject } from "@/utilities/constants/typeDef";

const TalentProfileForm = ({
  changeState,
  user,
}: {
  changeState: (value: boolean) => void;
  user: userObject;
}) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const addItem = async (data: any) => {};

  const onSubmit = (data: any) => {
    addItem(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex formdivs max-sm:flex-col mb-[20px] gap-[20px]">
        <div className="basis-1/2">
          <label>
            First Name <span className="text-red-600 text-base">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your First Name"
            defaultValue={user.firstName}
            {...register("firstName", {
              required: validationRules.firstName.required,
            })}
          />
        </div>
        {/* Last Name */}
        <div className="basis-1/2">
          <label>
            Last Name <span className="text-red-600 text-base">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your Last Name"
            defaultValue={user.lastName}
            {...register("lastName", {
              required: validationRules.lastName.required,
            })}
          />
        </div>
      </div>
      {/* Email */}
      <div className="flex formdivs flex-col mb-4 gap-[6px]">
        <label>
          Email Address <span className="text-red-600 text-base">*</span>
        </label>
        <input
          type="email"
          defaultValue={user.emailAddress}
          placeholder="Enter your email address"
          {...register("email", {
            required: validationRules.email.required,
            pattern: validationRules.email.pattern,
          })}
        />
      </div>
      {/* Mobile No. */}
      <div className="flex formdivs flex-col mb-4 gap-[6px]">
        <label>
          Phone Number <span className="text-red-600 text-base">*</span>
        </label>
        <PhoneNoInput register={register} validationRules={validationRules} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex max-sm:flex-col gap-[20px] ">
          <Dropdown
            ItemsArr={["Senior", "Intermediate", "C-level"]}
            label="Experience Level"
            placeholder="Senior"
            name={"experienceLevel"}
            required={true}
            register={register}
            validationRules={validationRules.experience.required}
            setValue={setValue}
            className
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
            validationRules={validationRules.experience.required}
            setValue={setValue}
            className
          />
        </div>
        <div className="flex max-sm:flex-col gap-[20px] ">
          <Dropdown
            ItemsArr={searchBarData[1].options}
            label="Industry"
            placeholder="Engineering"
            name={"role"}
            required={true}
            register={register}
            validationRules={validationRules.role.required}
            setValue={setValue}
            className
          />
          <Dropdown
            ItemsArr={["On Site", "Hybrid", "Fully Remote", "Remote"]}
            label="Work Mode Preference"
            placeholder="Remote"
            name={"experience"}
            required={true}
            register={register}
            validationRules={validationRules.experience.required}
            setValue={setValue}
            className
          />
        </div>
        <div>
          <label className="text-sm font-semibold">
            Resume(.pdf, .doc, .docx) Max 2mb
            <span className="text-red-600 text-base">*</span>
          </label>
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            className="h-full w-full    file:text-white file:rounded-md file:cursor-pointer file:border-0 file:p-2    file:bg-[#000080] mt-[6px] text-sm "
            {...register("resume", {
              required: validationRules.resume.required,
            })}
          />
        </div>
      </div>
      <div className="mt-4 flex gap-10 max-xsm:gap-5">
        <div
          className="login-btn centered gap-3 cursor-pointer icon-animate"
          onClick={() => changeState(false)}
        >
          Cancel
        </div>
        <button type="submit" className="login-btn" disabled={isSubmitting}>
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default TalentProfileForm;

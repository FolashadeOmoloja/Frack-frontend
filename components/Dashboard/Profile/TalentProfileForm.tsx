import PhoneNoInput from "@/components/Elements/PhoneNoInput";
import { FieldError, useForm } from "react-hook-form";
import { validationRules } from "@/utilities/constants";
import { searchBarData } from "@/utilities/constants/searchbarData";
import Dropdown from "@/components/Elements/Dropdown";
// type FormComponentProps {
//     state: string;
//     setState:
//     userObject: { name: string; email: string };
//   }
const TalentProfileForm = ({
  changeState,
}: {
  changeState: (value: boolean) => void;
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
      <div className="flex flex-col gap-4">
        <Dropdown
          ItemsArr={searchBarData[1].options}
          label="Industry"
          placeholder="Engineering"
          name={"role"}
          required={true}
          register={register}
          errors={errors.role as FieldError}
          validationRules={validationRules.role.required}
          setValue={setValue}
        />
        <div className="flex max-sm:flex-col gap-[20px] ">
          <Dropdown
            ItemsArr={["Senior", "Intermediate", "C-level"]}
            label="Experience Level"
            placeholder="Senior"
            name={"experienceLevel"}
            required={true}
            register={register}
            errors={errors.experience as FieldError}
            validationRules={validationRules.experience.required}
            setValue={setValue}
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
            errors={errors.experience as FieldError}
            validationRules={validationRules.experience.required}
            setValue={setValue}
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

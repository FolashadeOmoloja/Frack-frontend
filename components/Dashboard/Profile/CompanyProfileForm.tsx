import PhoneNoInput from "@/components/Elements/PhoneNoInput";
import { useForm } from "react-hook-form";
import { validationRules } from "@/utilities/constants";
import Dropdown from "@/components/Elements/Dropdown";
import { userCompanyObject } from "@/utilities/constants/typeDef";

const CompanyProfileForm = ({
  changeState,
  user,
}: {
  changeState: (value: boolean) => void;
  user: userCompanyObject;
}) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const addItem = async (data: any) => {};

  const onSubmit = (data: any) => {
    changeState(false);
    addItem(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex formdivs flex-col mb-4 gap-[6px]">
        <label>
          Comapny Name <span className="text-red-600 text-base">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your company Name"
          defaultValue={user.companyName}
          {...register("companyName", {
            required: validationRules.companyName.required,
          })}
        />
      </div>
      <div className="flex formdivs max-slg:flex-col mb-[20px] gap-[20px]">
        <div className="basis-1/2 flex flex-col  gap-[6px]">
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
        <div className="basis-1/2 flex flex-col  gap-[6px]">
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
      <div className="flex max-sslg:flex-col gap-[20px] mb-4 ">
        <div className="flex formdivs flex-col  gap-[6px] basis-1/2">
          <label>
            Role <span className="text-red-600 text-base">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your company role"
            defaultValue={user.companyRole}
            {...register("role", {
              required: validationRules.role.required,
            })}
          />
        </div>
        <Dropdown
          ItemsArr={["On Site", "Hybrid", "Fully Remote", "Remote"]}
          label="Work Culture"
          placeholder="Remote"
          name={"preference"}
          required={false}
          register={register}
          setValue={setValue}
          defaultValue={user.preference}
          selctedItem2={user.preference}
          className
        />
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
        <PhoneNoInput
          register={register}
          validationRules={validationRules}
          defaultValue={user.phoneNumber}
          defaultCode={user.countryCode}
        />
      </div>

      <div className="mt-16 flex gap-10 max-xsm:gap-5">
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

export default CompanyProfileForm;

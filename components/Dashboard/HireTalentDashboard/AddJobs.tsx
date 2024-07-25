"use client";
import Dropdown from "@/components/Elements/Dropdown";
import { validationRules } from "@/utilities/constants";
import {
  proximityFilter,
  searchBarData,
} from "@/utilities/constants/searchbarData";
import { FieldError, useForm } from "react-hook-form";

const AddJobs = () => {
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
    <section className="dashboard-container min-h-svh">
      <h2 className="text-2xl font-bold mb-1">
        Welcome, Frack! Ready to Create a New Job Listing?
      </h2>
      <span className="text-[#7C8698]">
        Efficiently create and manage your job postings.
      </span>
      <section className="flex justify-center w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-sm md:w-[70%] py-8 md:px-16 sm:px-6 px-4 mt-16"
        >
          <div className="flex   md:text-lg font-bold mt-16  justify-center">
            <span
              className={`tab active max-sm:h-[50px] text-xl w-full xsm:w-[200px]`}
            >
              Job Details
            </span>
          </div>
          <p className="text-gray-500 text-lg mt-9">
            Fill the form below to add a job post
          </p>
          <section className="mt-8">
            <div className="flex formdivs flex-col mb-4 sm:mb-5 gap-[6px]">
              <label>
                Job Post Title <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter a title for your job post"
                {...register("jobPostTitle", {
                  required: validationRules.jobPostTitle.required,
                })}
              />
              {errors.jobPostTitle && (
                <span className="text-red-600 text-sm">{`${errors.jobPostTitle.message}`}</span>
              )}
            </div>
            <div className="flex formdivs max-slg:flex-col mb-[20px] gap-[20px]">
              <div className="basis-1/2 flex flex-col gap-[6px]">
                <label>
                  Location <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter location"
                  {...register("location", {
                    required: validationRules.location.required,
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">{`${errors.firstName.message}`}</span>
                )}
              </div>
              <Dropdown
                ItemsArr={searchBarData[1].options}
                label="Department"
                placeholder="Select a Department"
                name={"department"}
                required={true}
                register={register}
                errors={errors.department as FieldError}
                validationRules={validationRules.department.required}
                setValue={setValue}
                className
              />
            </div>
            <div className="flex formdivs max-slg:flex-col mb-[20px] gap-[20px]">
              <div className="basis-1/2 flex flex-col gap-[6px]">
                <label>
                  Salary Range ($){" "}
                  <span className="text-red-600 text-base">*</span>
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder=""
                    {...register("salaryRange1", {
                      required: validationRules.salaryRange.required,
                    })}
                  />
                  <input
                    type="number"
                    placeholder=""
                    {...register("salaryRange2", {
                      required: validationRules.salaryRange.required,
                    })}
                  />
                </div>
                {errors.salaryRange && (
                  <span className="text-red-500 text-sm">{`${errors.salaryRange.message}`}</span>
                )}
              </div>
              <Dropdown
                ItemsArr={["On-site", "Hybrid", "Fully Remote", "Remote"]}
                label="Work Mode"
                placeholder="Select a work mode"
                name={"workMode"}
                required={true}
                register={register}
                errors={errors.workMode as FieldError}
                validationRules={validationRules.workMode.required}
                setValue={setValue}
                className
              />
            </div>
            <div className="flex formdivs max-slg:flex-col mb-[20px] gap-[20px]">
              <Dropdown
                ItemsArr={["Intermediate", "Senior level", "C-level"]}
                label="Experience Level"
                placeholder="Select an option"
                name={"experienceLevel"}
                required={true}
                register={register}
                errors={errors.experienceLevel as FieldError}
                validationRules={validationRules.experienceLevel.required}
                setValue={setValue}
                className
              />
              <Dropdown
                ItemsArr={["6", "8", "10", "12"]}
                label="No of working hours"
                placeholder="Select working hours"
                name={"workHours"}
                required={true}
                register={register}
                errors={errors.workHours as FieldError}
                validationRules={validationRules.workHours.required}
                setValue={setValue}
                className
              />
            </div>
            <div className="flex formdivs flex-col mb-4 sm:mb-5 gap-[6px]">
              <label>
                Job Description{" "}
                <span className="text-red-600 text-base">*</span>
              </label>
              <textarea
                placeholder="Enter a detailed description for your job post"
                {...register("description", {
                  required: validationRules.description.required,
                  maxLength: {
                    value: 1000,
                    message: "Description cannot exceed 1000 words",
                  },
                })}
                rows={6}
                className="resize-none"
              />
              {errors.description && (
                <span className="text-red-600 text-sm">{`${errors.description.message}`}</span>
              )}
            </div>
          </section>
        </form>
      </section>
    </section>
  );
};

export default AddJobs;

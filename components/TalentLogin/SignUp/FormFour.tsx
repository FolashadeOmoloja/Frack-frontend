import { useForm } from "react-hook-form";
import StepCounter from "@/components/Elements/StepCounter";
import FormLogo from "@/components/Elements/FormLogo";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getRandomColor } from "@/utilities/constants";

const FormFour = ({}) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const router = useRouter();
  const { step1Data, step2Data, step3Data } = useSelector(
    (state: RootState) => state.talentRegistration
  );
  //add Item to backeend
  const addItem = async (data: any) => {
    const userData = { ...step1Data, ...step2Data, ...step3Data };
    const hexCode = getRandomColor();
    if (data) {
      const userData = {
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
        experienceYears: data.experience.trim(),
        experienceLevel: data.level.trim(),
        industry: data.role.trim(),
        preference: data.preference.trim(),
        skills: [data.skills.trim()],
        filename: data.resume,
        privacyConsent: data.privacyConsent,
        channel: data.channel ? data.channel.trim() : null,
      };
      console.log(userData);
    }
  };

  const onSubmit = (data: any) => {
    addItem(data);
    router.push("/dashboard");
  };

  return (
    <section className="signup-form h-[100vh]">
      <div className="mb-6">
        <FormLogo />
        <div className="px-[15px]">
          <StepCounter pastActiveOne pastActiveTwo pastActiveThree />
        </div>
        <div className="centered flex-col xsm:mt-36 mt-20">
          <h3 className="text-[#1B1818] font-semibold text-2xl mb-1 text-center">
            Congratulations!
          </h3>
          <p className="text-gray-500 text-sm text-center">
            Congratulations you have been added to the wait list.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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

export default FormFour;

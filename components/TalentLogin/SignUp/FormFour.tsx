import { useForm } from "react-hook-form";
import StepCounter from "@/components/Elements/StepCounter";
import FormLogo from "@/components/Elements/FormLogo";

const FormFour = ({}) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  //add Item to backeend
  const addItem = async (data: any) => {};

  const onSubmit = (data: any) => {
    addItem(data);
  };

  return (
    <section className="md:max-w-[529px] max-sm:p-4 mt-6 max-xl:px-[50px] h-[100vh]">
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

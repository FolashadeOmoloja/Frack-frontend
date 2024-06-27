import CTABTN from "../Elements/CTA/CTA-Button";

const Form = () => {
  return (
    <form action="" className="">
      <section>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="font-semibold text-sm leading-4">
            Name (required)
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full h-[47px] rounded-md py-[10px] px-4 bg-white outline-none text-black placeholder:text-[#696969]"
            placeholder="Your name"
          />
        </div>
      </section>
      <CTABTN
        route={""}
        CTA="Send message"
        showIcon
        color="text-black"
        backGround="bg-white"
        width="w-[180px]"
      />
    </form>
  );
};

export default Form;

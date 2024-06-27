import CTABTN from "../Elements/CTA/CTA-Button";

const Form = () => {
  return (
    <form action="" className="">
      <section className="mb-10">
        <section className="grid  md:grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-2 w-full md:w-[296px]">
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
          <div className="flex flex-col gap-2 w-full md:w-[296px]">
            <label
              htmlFor="company-name"
              className="font-semibold text-sm leading-4"
            >
              Company (optional)
            </label>
            <input
              type="text"
              name="company-name"
              id="company-name"
              required
              className="w-full h-[47px] rounded-md py-[10px] px-4 bg-white outline-none text-black placeholder:text-[#696969]"
              placeholder="Your Company's name"
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-[296px]">
            <label htmlFor="email" className="font-semibold text-sm leading-4">
              Email (required)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full h-[47px] rounded-md py-[10px] px-4 bg-white outline-none text-black placeholder:text-[#696969]"
              placeholder="Your Email"
            />
          </div>
        </section>
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

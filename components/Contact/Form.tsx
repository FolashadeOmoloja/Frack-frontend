import CTABTN from "../Elements/CTA/CTA-Button";

const Form = () => {
  return (
    <form action="" className="">
      <section className="mb-10">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="font-semibold text-sm leading-4">
              Name (required)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="contact-input"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
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
              className="contact-input"
              placeholder="Your Company's name"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="font-semibold text-sm leading-4">
              Email (required)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="contact-input"
              placeholder="Your Email"
            />
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone" className="font-semibold text-sm leading-4">
              Phone (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="contact-input"
              placeholder="Your actual number"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="subject"
              className="font-semibold text-sm leading-4"
            >
              Subject (optional)
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="contact-input"
              placeholder="Choose a subject"
            />
          </div>
        </section>
        <div className="w-full mt-6 flex flex-col gap-2">
          <label htmlFor="message" className="text-sm italic tracking-[0.01em]">
            Message (required)
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="How can we help you?"
            className="contact-input px-3 h-[76px] resize-none"
          ></textarea>
        </div>
      </section>
      <div className="mb-6 flex items-center  ">
        <input
          type="checkbox"
          name="approval-check"
          id="approval-check"
          className="rounded-md h-5 w-5"
        />
        <label
          htmlFor="approval-check"
          className="ml-2 text-sm tracking-[0.15em]"
        >
          I’m okay with getting emails and having that activity tracked to
          improve my experience.
        </label>
      </div>
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

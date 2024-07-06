import CTABTN from "../../Elements/CTA/CTA-Button";

const CTA = ({
  bg = "bg-custom-bg",
  color = "text-[#000080]",
  btnColor = "text-white",
  btnBg = "bg-[#000080]",
  top = "",
}: {
  bg?: string;
  color?: string;
  btnColor?: string;
  btnBg?: string;
  top?: string;
}) => {
  return (
    <section className={`section-container ${top}`}>
      <section
        className={`${bg} bg-cover bg-no-repeat sm:py-[120px] py-20 sm:px-24 px-14   max-xsm:px-12 rounded-2xl`}
      >
        <h3
          className={`font-bold text-[40px] max-md:text-[24px] mb-8 ${color} max-w-[400px] max-sm:text-center`}
        >
          Get started with Frack today!{" "}
        </h3>
        <div className="mt-8 max-md:justify-center flex">
          <CTABTN
            route={"/hiretalent"}
            CTA="Get Started"
            showIcon={true}
            color={btnColor}
            backGround={btnBg}
          />
        </div>
      </section>
    </section>
  );
};

export default CTA;

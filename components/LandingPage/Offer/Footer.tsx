const Footer = () => {
  return (
    <footer className="section-container ">
      <div className="grid grid-cols-1 lg:grid-cols-4 xslg:gap-8 gap-6">
        {/* Column 1 */}
        <div className="col-span-1">
          <a href="/">
            <img src="/images/homepage/fracklogo.png" alt="Footer Logo" />
          </a>
          <p className="text-sm text-[#000080] mt-8 font-[600] leading-[26.4px]">
            Join the ranks of companies revolutionizing the way they work with
            talent. Experience the future of hiring with Frack today.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-span-1">
          <ul>
            <li className="text-lg text-[#000080] font-bold transition mb-6 cursor-pointer">
              <span className="hover:text-black ">For Company</span>
              <ul className="font-semibold text-sm mt-6 flex flex-col gap-1">
                <li className="hover:text-black">
                  <a href="/hire-talent">Hire Talent</a>
                </li>
                <li className="hover:text-black">
                  <a href="/success-story">Success Stories</a>
                </li>
              </ul>
            </li>
            <li className="text-lg text-[#000080] font-bold transition cursor-pointer">
              <span className="hover:text-black ">For Talent</span>
              <ul className="font-semibold text-sm mt-6 flex flex-col gap-1">
                <li className="hover:text-black ">
                  <a href="/jobs"> Find Job</a>
                </li>
                <li className="hover:text-black ">
                  <a href="/sign-up">Sign Up</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-1">
          <ul>
            <li className="text-lg text-[#000080] font-bold transition mb-8 ">
              <span>About Us</span>
              <ul className="font-semibold text-sm mt-6">
                <li className="hover:text-black cursor-pointer">
                  <a href="/about-us">About Frack</a>
                </li>
              </ul>
            </li>
            <li className="text-lg text-[#000080] font-bold transition mb-8">
              <span>Contact</span>
              <ul className="font-semibold text-sm mt-6">
                <li className="hover:text-black cursor-pointer">
                  <a href="/contact-us">Contact Frack</a>
                </li>
              </ul>
            </li>
            <li className="text-lg text-[#000080] font-bold transition cursor-pointer">
              <span className="hover:text-black ">Resources</span>
              <ul className="font-semibold text-sm mt-6 flex flex-col gap-1">
                <li className="hover:text-black ">
                  <a href="/blog">Blog</a>
                </li>
                <li className="hover:text-black ">
                  <a href="/faq">Faq</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-span-1">
          <span className="text-lg text-[#000080] font-bold">
            Sign up for the newsletter
          </span>
          <form className="flex mt-6 text-[12px] text-[#341D74]">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-3/4  h-12 p-5 bg-[#90919C14]  outline-none rounded-l-lg placeholder:text-sm"
            />
            <button className="w-1/4 font-bold h-12 bg-[#90919C14] lg:px-4 lg:w-[100px] rounded-r-lg text-sm">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="mt-[42px]  w-full h-[1px] bg-[#e7e7e7]"></div>
      <ul className="w-full  flex justify-end text-[#000080] text-sm gap-8 py-9 max-sm:gap-5 max-sm:flex-col">
        <li>
          <a href="">Sitemap</a>
        </li>
        <li>
          <a href="">Security</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Terms of service</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

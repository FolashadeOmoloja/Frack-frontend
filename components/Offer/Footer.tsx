

const Footer = () => {
  return (
    <footer className="section-container ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div className="col-span-1">
          <img src="/images/homepage/fracklogo.png" alt="Footer Logo" />
          <p className="text-sm text-[#000080] mt-8 font-[600] leading-[26.4px]">
                Join the ranks of companies revolutionizing the way they work with talent. Experience the future of hiring with Frack today.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-span-1">
           <ul>
          <li className="text-lg text-[#000080] font-bold transition mb-6 cursor-pointer">
            <span className="hover:text-black ">For Company</span>
            <ul className="font-semibold text-sm mt-6 flex flex-col gap-1">
                <li className="hover:text-black">Hire Talent</li>
                <li className="hover:text-black">Success Stories</li>
            </ul>
          </li>
          <li className="text-lg text-[#000080] font-bold transition cursor-pointer">
           <span className="hover:text-black ">For Talent</span>
            <ul className="font-semibold text-sm mt-6 flex flex-col gap-1">
                <li className="hover:text-black ">Find Job</li>
                <li className="hover:text-black ">Sign Up</li>
                <li className="hover:text-black ">Resources</li>
            </ul>
          </li>

           </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-1">
           <ul>
          <li className="text-[16px] text-[#656464] font-bold">Support</li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Help/FAQ</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Terms of Service</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Legal</a></li>
          <li className="text-sm text-[#565252] mt-2 cursor-pointer font-semibold hover:text-[#0045A5]"><a href='#'>Privacy Policy</a></li>
           </ul>
        </div>

        {/* Column 4 */}
        <div className="col-span-1">
          <span className="text-[16px] text-[#656464] font-bold">Subscribe To Our Newsletter</span>
          <div className="flex mt-6 text-[12px]">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-3/4 md:w-96 h-12 p-6 bg-white text-[#565252] outline-none  rounded-l-[60px]"
            />
            <button className="w-1/4 md:w-[200px] font-bold h-12 bg-[#0045A5] text-white rounded-r-[20px] ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className='mt-[42px]  w-full h-[1px] bg-[#BFBFBF]'></div>
      <div className='w-full  flex items-center justify-center pt-[42px]'>
        <span className='text-[12px] text-[#565252]'>Copyright 2023 All right reserve QuickPay.com</span>
      </div>
    </footer>
  );
};

export default Footer;

import { title } from "process";

export const NavLinks = [
  {
    navItem: "For Companies",
    href: "nil",
    dropDown: true,
    dropDownOpt: [
      {
        icon: "/images/homepage/people.svg",
        title: "Hire Talent",
        desc: "Find the best talents in the fastest time",
        href: "/hire-talent",
      },
      {
        icon: "/images/homepage/support.svg",
        title: "Success Story ",
        desc: "Here’s how we handle business",
        href: "",
      },
    ],
  },
  {
    navItem: "For Talent",
    href: "nil",
    dropDown: true,
    dropDownOpt: [
      {
        icon: "/images/homepage/recruitment.svg",
        title: "Find Job",
        desc: "Find the best Jobs in the fastest time",
        href: "",
      },
      {
        icon: "/images/homepage/user.svg",
        title: "Sign Up",
        desc: "Sign in to your profile",
        href: "",
      },
    ],
  },
  {
    navItem: "About Us",
    href: "/about-us",
    dropDown: false,
    img: "/images/homepage/about.svg",
    desc: "Get to know more about us",
  },
  {
    navItem: "Resources",
    href: "nil",
    dropDown: true,
    dropDownOpt: [
      {
        icon: "/images/homepage/computer.svg",
        title: "Blog",
        desc: "Here’s everything you’d need to begin your journey with frack.",
        href: "",
      },
      {
        icon: "/images/homepage/faq.svg",
        title: "Faq",
        desc: "Here’s a few of our frequently asked questions.",
        href: "",
      },
    ],
  },
  {
    navItem: "Contact Us",
    href: "/contact-us",
    dropDown: false,
    img: "/images/homepage/contact.svg",
    desc: "Contact us anytime",
  },
];

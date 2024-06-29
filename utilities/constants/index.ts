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
        href: "success-story",
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

export const successStories = [
  {
    img: "/images/homepage/avatar1.jpg",
    title: "CEO",
    name: "John Doe",
    review:
      "Thanks to Frack, we successfully hired top-notch professionals who have significantly contributed to our company’s growth.",
  },
  {
    img: "/images/homepage/avatar2.png",
    title: "CTO",
    name: "Jane Smith",
    review:
      "Our recent hires through Frack have been exceptional, bringing innovation and expertise to our technology team.",
  },
  {
    img: "/images/homepage/avatar1.jpg",
    title: "HR Manager",
    name: "Michael Brown",
    review:
      "Frack made our hiring process seamless, allowing us to find qualified candidates quickly and efficiently.",
  },
  {
    img: "/images/homepage/avatar2.png",
    title: "Project Manager",
    name: "Emily Johnson",
    review:
      "We found the perfect match for our team through Frack. The professionals hired have exceeded our expectations.",
  },
  {
    img: "/images/homepage/avatar1.jpg",
    title: "Operations Head",
    name: "David Wilson",
    review:
      "Our experience with Frack has been outstanding. The professionals we hired are skilled and have integrated well into our team.",
  },
  {
    img: "/images/homepage/avatar2.png",
    title: "Marketing Director",
    name: "Sarah Lee",
    review:
      "Hiring through Frack has been a game-changer for us. The talent we found here has helped drive our marketing efforts to new heights.",
  },
];

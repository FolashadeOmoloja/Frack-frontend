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
        href: "/jobs",
      },
      {
        icon: "/images/homepage/user.svg",
        title: "Sign Up",
        desc: "Sign in to your profile",
        href: "/sign-in",
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
        href: "/blog",
      },
      {
        icon: "/images/homepage/faq.svg",
        title: "Faq",
        desc: "Here’s a few of our frequently asked questions.",
        href: "/faq",
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

export const validationRules = {
  firstName: {
    required: "First Name is required",
  },
  lastName: {
    required: "Last Name is required",
  },
  companyName: {
    required: `Your Company's Name is required`,
  },
  jobTitle: {
    required: "Job Title is required",
  },
  mobileNo: {
    required: "Mobile No. is required",
    pattern: {
      value: /^[0-9]/,
      message: "Invalid phone number",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
  },
  url: {
    required: "Your LinkedIn URL is required",
    pattern: {
      value: /^https:\/\/(www\.)?linkedin\.com\/.*$/,
      message: "Invalid LinkedIn URL",
    },
  },
  role: {
    required: "Role required",
  },
  experience: {
    required: "Experience required",
  },
  resume: {
    required: "Please upload your resume",
  },
  jobPostTitle: {
    required: "Job Post Title is required",
  },
  country: {
    required: "This is required",
  },
  location: {
    required: "Please enter a  location",
  },
  department: {
    required: "Please enter a  department",
  },
  salaryRange: {
    required: "Complete salary range",
  },
  workMode: {
    required: "Work Mode required",
  },
  workHours: {
    required: "Please select an option",
  },
  experienceLevel: {
    required: "Please select an option",
  },
  description: {
    required: "Job description is required",
    // maxLength: {
    //   value: 10000,
    //   message: "Description cannot exceed 3000 words",
    // },
  },
};

const colorPalette = [
  "#000080", // Navy
  "#283742", // Gunmetal
  // "#00509E", // Lighter blue
  // "#87CEEB", // Sky blue
  // "#1E90FF", // Dodger blue

  "#A9A9A9", // Dark gray
  // "#B0C4DE", // Light steel blue
];

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
}

export function formatTimeDifference(timestamp: string): string {
  const now = new Date();
  const notificationTime = new Date(timestamp);
  const diffInSeconds = Math.floor(
    (now.getTime() - notificationTime.getTime()) / 1000
  );

  const days = Math.floor(diffInSeconds / (3600 * 24));
  const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  const seconds = diffInSeconds % 60;

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}

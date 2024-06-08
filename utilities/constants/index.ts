import { title } from "process";

export const NavLinks = [
    { navItem: "For Companies", 
        href: "nil",
       dropDown: false, 
       dropDownOpt: [
        {
           icon: '/images/homepage/people.svg',
           title: 'Hire Talent',
           desc: 'Find the best talents in the fastest time',
           href: ''
        },
        {
            icon: '/images/homepage/support.svg',
            title: 'Success Story ',
            desc: 'Here’s how we handle business',
            href: ''
         }
      ]
    },
    { navItem: "For Talent", 
        href: "nil",
       dropDown: true, 
       dropDownOpt: [
        {
           icon: '/images/homepage/recruitment.svg',
           title: 'Find Job',
           desc: 'Find the best Jobs in the fastest time',
           href: ''
        }, {
              icon: '/images/homepage/user.svg',
              title: 'Sign Up',
              desc: 'Sign in to your profile',
              href: ''
         }
      ]
    },
    { navItem: "About Us", 
        href: "/about-us",
       dropDown: false, 
    },
    { navItem: "Resources", 
        href: "nil",
       dropDown: false, 
      //  dropDownOpt: [
      //   {
      //      icon: '',
      //      title: '',
      //      desc: '',
      //      href: ''
      //   },
      //    {
      //       icon: '',
      //       title: '',
      //       desc: '',
      //       href: ''
      //    }
      // ]
    },
    { navItem: "Contact Us", 
        href: "/contact-us",
       dropDown: false, 
    },
];




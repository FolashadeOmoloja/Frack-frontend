import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-bg": "url('/images/homepage/background.svg')",
        "contact-bg": "url('/images/homepage/CTAContact.svg')",
        "picture-bg": "url('/images/homepage/picturebg.svg')",
        "custom-linear-gradient":
          "linear-gradient(90deg, #000080 0%, #22CCED 49.5%, #000080 100%)",
        "faq-gradient": "linear-gradient(180deg, #000080 0%, #00002F 96.94%)",
      },
      backgroundPosition: {
        "right-medium": "right center",
        "right-lg": "right center",
      },
      screens: {
        xxsm: "300px",
        xsm: "375px",
        slg: "880px",
        sslg: "980px",
        xslg: "1100px",
        xlg: "1250px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;

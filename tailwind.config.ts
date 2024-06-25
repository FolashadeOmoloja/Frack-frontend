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
          'custom-bg': "url('/images/homepage/background.svg')",
          'picture-bg': "url('/images/homepage/picturebg.svg')",
      },
      backgroundPosition: {
        'right-medium': 'right center',
        'right-lg': 'right center',
      },
      screens: {
        'xsm': '375px',
        'slg': '880px',
        'sslg': '980px',
        'xslg': '1100px',
        'xlg': '1250px',
      },
    },
  },
  plugins: [],
};
export default config;

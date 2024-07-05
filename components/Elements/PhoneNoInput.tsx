import { useState, useEffect } from "react";
import { useForm, UseFormRegister, FieldErrors } from "react-hook-form";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";

interface Country {
  name: string;
  code: string;
  flag: string;
}

interface ValidationRules {
  mobileNo: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}

interface PhoneNoInputProps {
  register: UseFormRegister<any>;
  validationRules: ValidationRules;
  errors: FieldErrors<any>;
}

const PhoneNoInput: React.FC<PhoneNoInputProps> = ({
  register,
  validationRules,
  errors,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryData = response.data
          .map((country: any) => ({
            name: country.name.common,
            code:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
            flag: country.flags.png,
          }))
          .filter((country: Country) => country.code); // filter out countries without codes
        setCountries(countryData);
        setSelectedCountry(countryData[0]);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  if (!selectedCountry) return <div>Loading...</div>;

  return (
    <div className=" flex items-center gap-3">
      <div className="basis-[20%] relative">
        <div
          onClick={toggleDropdown}
          className="flex items-center justify-center cursor-pointer bg-[#F3F4F7] h-full py-[14.62px] rounded-md"
        >
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="w-5 h-5 rounded-full mr-2"
          />
          <AiOutlineDown className=" text-[#98A2B3]" />
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-2 bg-white border rounded shadow-lg h-[100px] overflow-y-auto custom-scrollbar w-full">
            {countries.map((country, idx) => (
              <div
                key={idx}
                onClick={() => selectCountry(country)}
                className="flex items-center cursor-pointer p-2 hover:bg-gray-200"
              >
                <img src={country.flag} alt={""} className="w-6 h-4 mr-2" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex">
        <input
          type="tel"
          {...register("countryCode")}
          value={selectedCountry.code}
          readOnly
          className="basis-[20%] pr-0"
        />
        <input
          type="tel"
          placeholder="Enter your Mobile No."
          {...register("mobileNo", {
            required: validationRules.mobileNo.required,
            pattern: validationRules.mobileNo.pattern,
          })}
        />
      </div>
    </div>
  );
};

export default PhoneNoInput;
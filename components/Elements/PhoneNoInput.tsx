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
}

const PhoneNoInput: React.FC<PhoneNoInputProps> = ({
  register,
  validationRules,
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
          .filter((country: Country) => country.code)
          .sort(); // filter out countries without codes
        // console.log(countryData);
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
          className="flex items-center justify-center cursor-pointer bg-[#F3F4F7] h-full py-[14.62px]  rounded-md"
        >
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="w-5 h-5 rounded-full mr-2  object-center"
          />
          <AiOutlineDown className=" text-[#98A2B3] max-sm:hidden text-sm" />
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-2 bg-white border rounded shadow-lg h-[200px] overflow-y-auto custom-scrollbar w-[300px]">
            {countries.map((country, idx) => (
              <div
                key={idx}
                onClick={() => selectCountry(country)}
                className="flex items-center cursor-pointer p-2 hover:bg-gray-200"
              >
                <img src={country.flag} alt={""} className="w-6 h-4 mr-2 " />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex w-full ">
        <input
          type="tel"
          {...register("countryCode")}
          value={selectedCountry.code}
          readOnly
          className="basis-[20%] input"
          style={{
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0",
            borderRight: "none",
            paddingRight: "0",
          }}
        />
        <input
          type="tel"
          placeholder="810 0000 0000"
          {...register("mobileNo", {
            required: validationRules.mobileNo.required,
            pattern: validationRules.mobileNo.pattern,
          })}
          className="input phoneinputdiv"
          style={{
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0",
            borderLeft: "none",
          }}
        />
      </div>
    </div>
  );
};

export default PhoneNoInput;

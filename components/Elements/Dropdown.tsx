import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
interface ValidationRules {
  role: {
    required: string;
  };
  experience: {
    required: string;
  };
}

const Dropdown = ({
  ItemsArr,
  label,
  placeholder,
  name,
  required,
  register,
  errors,
  validationRules,
  fieldError,
}: {
  ItemsArr: string[];
  label: string;
  placeholder?: string;
  name: string;
  required: boolean;
  register: any;
  errors?: any;
  fieldError?: any;
  validationRules?: string;
}) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const showOptions = () => {
    setIsOpen(!isOpen);
    setFocus(!focus);
  };

  const handleSelect = (option: string) => {
    setSelectedItem(option);
    setIsOpen(false);
    setFocus(false);
  };

  return (
    <section className="h-full slg:min-w-[450px]">
      <label className="text-gray-900 text-sm font-semibold">{label}</label>
      <div className="relative sm:h-full h-[50px]  sm:basis-1/3 w-full">
        <div
          className={`dropdown-button text-black w-full max-sm:rounded-md h-12 rounded-lg p-[12px]  mt-2 ${
            focus ? "border-[#000080]" : "border-gray-200"
          }`}
          onClick={showOptions}
        >
          {selectedItem ? (
            <span>{selectedItem}</span>
          ) : (
            <span className="text-gray-400 text-sm">{placeholder}</span>
          )}
          <FaCaretDown className="absolute right-[12px] top-[18px]" />
        </div>
        {isOpen && (
          <div className="dropdown-menu custom-scrollbar mt-1 max-h-[200px]">
            {ItemsArr.map((option, optionIdx) => (
              <div
                key={optionIdx}
                className="dropdown-item "
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
        <input
          type="hidden"
          value={selectedItem}
          {...(required
            ? { ...register(name) }
            : {
                ...register(name, {
                  required: validationRules,
                }),
              })}
        />
        {errors && (
          <span className="text-red-600 text-sm">{`${label} is required`}</span>
        )}
      </div>
    </section>
  );
};

export default Dropdown;

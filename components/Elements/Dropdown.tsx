import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

const Dropdown = ({
  ItemsArr,
  label,
  placeholder,
}: {
  ItemsArr: string[];
  label: string;
  placeholder?: string;
}) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const showOptions = () => {
    setIsOpen(!isOpen);
    setFocus(true);
    console.log(focus);
  };

  const handleSelect = (option: string) => {
    setSelectedItem(option);
    setIsOpen(false);
    setFocus(false);
  };
  return (
    <section className="h-full md:min-w-[450px]">
      <label className="text-gray-900">{label}</label>
      <div className="relative sm:h-full h-[50px]  sm:basis-1/3 w-full">
        <div
          className={`dropdown-button text-black w-full max-sm:rounded-md h-12 rounded-lg p-[12px] border-gray-200 mt-2 ${
            focus ? "border-blue-900" : ""
          }`}
          onClick={showOptions}
        >
          {selectedItem ? (
            <span>{selectedItem}</span>
          ) : (
            <span className="text-gray-400">{placeholder}</span>
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
      </div>
    </section>
  );
};

export default Dropdown;

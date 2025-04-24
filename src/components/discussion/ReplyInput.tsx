import React from "react";

interface ReplyInputProps {
  placeholder?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const ReplyInput: React.FC<ReplyInputProps> = ({
  placeholder = "Write a reply",
  fontSize = "text-xs",
  fontWeight = "font-light",
}) => {
  return (
    <div className="bg-white border flex w-full items-stretch gap-5 flex-wrap justify-between px-[19px] py-[3px] rounded-[5px] border-[rgba(217,217,217,1)] border-solid max-md:max-w-full max-md:pl-5">
      <input
        type="text"
        placeholder={placeholder}
        className={`${fontSize} ${fontWeight} text-gray-500 leading-[25px] w-full focus:outline-none`}
      />
      <div className="flex items-stretch gap-[15px] my-auto">
        <button aria-label="Attach file">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/ef70ffb396ae913b56e5274e5f7ab6d4f4b0d232?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[15px] shrink-0"
            alt="Attach file"
          />
        </button>
        <button aria-label="Send message">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/d98de970be77d775289b229c7c7a979a3aef3901?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 shrink-0"
            alt="Send message"
          />
        </button>
      </div>
    </div>
  );
};

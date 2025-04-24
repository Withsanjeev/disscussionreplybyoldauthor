import React from "react";

export const QuestionForm: React.FC = () => {
  return (
    <div className="flex flex-col items-stretch mt-[37px] px-[65px] max-md:max-w-full max-md:px-5">
      <div className="bg-[rgba(247,248,250,1)] border flex w-full flex-col items-stretch px-[25px] py-[23px] rounded-[10px] border-[rgba(217,217,217,1)] border-solid max-md:max-w-full max-md:pl-5">
        <div className="text-black text-[15px] font-[275]">
          Ask your questions
        </div>
        <textarea
          className="w-full h-[200px] bg-transparent resize-none focus:outline-none mt-4"
          placeholder="Type your question here..."
        />
        <div className="flex w-full items-stretch gap-5 flex-wrap justify-between mt-[26px] max-md:max-w-full max-md:mt-10">
          <div className="flex items-stretch gap-[15px]">
            <button aria-label="Bold">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/be4e6feaf3dbb135ffe7805ffa041873c86de4d8?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt="Bold"
              />
            </button>
            <button aria-label="Italic">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/c92f366462c63a05833fadd9f63d4b1779e0e3f4?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt="Italic"
              />
            </button>
            <button aria-label="Underline">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/aa011d69cc7af23e930f801376b782954a5ad64f?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt="Underline"
              />
            </button>
            <button aria-label="Strikethrough">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/bfa80d2caf2271cd7e08797b1505c58513834342?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt="Strikethrough"
              />
            </button>
            <button aria-label="Bullet list">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/56957e4a82adb469e0b2ee4a1f62f6563ab52dd8?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt="Bullet list"
              />
            </button>
            <button aria-label="Numbered list">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/16985632665d64892ac401e64edee917b4b04cd4?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt="Numbered list"
              />
            </button>
            <button aria-label="Code block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/12d9651b222108562505f852f3aee1038a4c65f5?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt="Code block"
              />
            </button>
            <button aria-label="Link">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/1edad0fd9199baf67ccefe4cbe6886f04b663cbd?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[23px] shrink-0"
                alt="Link"
              />
            </button>
          </div>
          <button aria-label="Attach file">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6e14c2c9782345f5bdbe81b8cb5ab33b/e8b68321d7dba992eb6f8a2b96e69768099651ef?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[22px] shrink-0"
              alt="Attach file"
            />
          </button>
        </div>
      </div>
      <button className="border-gray-500 border text-base text-gray-500 font-light whitespace-nowrap mt-[11px] px-5 py-2 rounded-[5px] border-solid max-md:mr-2.5 self-start">
        Comment
      </button>
    </div>
  );
};

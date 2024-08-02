import React, { useState } from 'react';

interface ConsumptionDashboardProps {
  toggleOptions: string[];
  filterOptions: string[];
}

const ConsumptionDashboard: React.FC<ConsumptionDashboardProps> = ({
  toggleOptions,
  filterOptions,
}) => {
  const [activeOption, setActiveOption] = useState(toggleOptions[0]);

  return (
    <header className="flex flex-wrap flex-1 shrink gap-3 justify-center items-center basis-0 min-w-[240px] size-full max-md:max-w-full">
      <div className="flex flex-col grow shrink items-start self-stretch my-auto min-w-[240px] w-[773px] max-md:max-w-full">
        <div className="flex gap-1 items-start p-2 max-w-full bg-stone-200 rounded-[32px] w-[414px]">
          {toggleOptions.map((option) => (
            <button
              key={option}
              className={`flex-1 shrink gap-2 self-stretch px-3 py-1.5 min-h-[32px] rounded-[360px] ${
                activeOption === option
                  ? 'bg-emerald-900 text-stone-50'
                  : 'bg-stone-200 text-zinc-800'
              }`}
              onClick={() => setActiveOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {filterOptions.map((option, index) => (
        <button
          key={index}
          className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto border border-solid border-slate-950 min-h-[32px] rounded-[360px] text-zinc-800"
        >
          <span className="self-stretch my-auto">{option}</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4185621f8dbb81d15ae0dfb8b02f235cf42237108b6aa33b653a00f9ea3256b2?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt=""
          />
        </button>
      ))}
    </header>
  );
};

export default ConsumptionDashboard;
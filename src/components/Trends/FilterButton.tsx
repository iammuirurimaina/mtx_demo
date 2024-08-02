import React from 'react';

interface FilterButtonProps {
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label }) => {
  return (
    <button className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto border border-solid border-slate-950 min-h-[32px] rounded-[360px] text-zinc-800">
      <span className="self-stretch my-auto">{label}</span>
      <img
       loading="lazy"
       src="https://cdn.builder.io/api/v1/image/assets/TEMP/4185621f8dbb81d15ae0dfb8b02f235cf42237108b6aa33b653a00f9ea3256b2?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9"
       className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
       alt=""
     />
   </button>
 );
};

export default FilterButton;
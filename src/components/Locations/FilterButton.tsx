import React from 'react';

interface FilterButtonProps {
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label }) => {
  return (
    <button className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto border border-solid border-slate-950 min-h-[32px] rounded-[360px]">
      <span className="self-stretch my-auto">{label}</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99aa25784cab2a12730b90d5c889313734ca8aae5b7cc6c13239387fc36548c4?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
    </button>
  );
};

export default FilterButton;
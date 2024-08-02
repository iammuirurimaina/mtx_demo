import React from 'react';

interface FilterButtonProps {
  text: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ text }) => {
  return (
    <button className="flex gap-2 px-3 py-1 border border-solid border-slate-950 rounded-[360px]">
      <span>{text}</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99aa25784cab2a12730b90d5c889313734ca8aae5b7cc6c13239387fc36548c4?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" className="shrink-0 self-start w-5 aspect-square" alt="" />
    </button>
  );
};

export default FilterButton;

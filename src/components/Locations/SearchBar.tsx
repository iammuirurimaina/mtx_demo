import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto whitespace-nowrap border border-solid border-slate-950 min-h-[32px] min-w-[240px] rounded-[360px] text-neutral-600 w-[265px]">
      <img loading="lazy" src="http://b.io/ext_12-" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="self-stretch my-auto bg-transparent border-none outline-none"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
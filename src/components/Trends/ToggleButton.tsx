import React from 'react';

interface ToggleButtonProps {
  options: string[];
  activeIndex: number;
}
const ToggleButton: React.FC<ToggleButtonProps> = ({ options, activeIndex }) => {
    return (
      <div className="flex gap-1 items-start p-2 max-w-full bg-stone-200 rounded-[32px] w-[414px]">
        {options.map((option, index) => (
          <button
            key={index}
            className={`flex-1 shrink gap-2 self-stretch px-3 py-1.5 min-h-[32px] rounded-[360px] ${
              index === activeIndex
                ? 'bg-emerald-900 text-stone-50'
                : 'bg-stone-200 text-zinc-800'
            }`}
            >
              {option}
            </button>
          ))}
        </div>
      );
    };

    export default ToggleButton;
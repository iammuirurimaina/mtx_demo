import React from 'react';

const CodeInput: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink basis-8">
      <div className="flex flex-1 gap-4 items-center p-4 rounded-2xl bg-stone-50 size-full">
        <div className="flex flex-1 shrink gap-3 items-center self-stretch my-auto w-full basis-0">
          <input
            type="text"
            maxLength={1}
            className="flex flex-1 shrink self-stretch my-auto w-full basis-0 min-h-[24px] bg-transparent text-center border-none outline-none"
            aria-label="Authentication code digit"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeInput;

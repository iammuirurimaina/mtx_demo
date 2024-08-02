import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center pt-3 w-full max-md:max-w-full">
      <div className="flex gap-3 justify-center items-center self-stretch px-4 py-2 my-auto text-sm font-semibold tracking-tight border border-solid border-slate-950 min-h-[40px] rounded-[360px] text-zinc-800">
        <div className="self-stretch my-auto">10 Per Page</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9205a90bf09bde3fc5aa45b614dc22faf71ccf001239becd9ec78df8b622c1f?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </div>
      <div className="flex gap-3 justify-center items-center self-stretch px-4 py-2 my-auto border border-solid border-slate-950 min-h-[40px] rounded-[360px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/73b51a80902dd411c5a0fefc73d5301e8141e76ae1607a7f11b22980e093d7ce?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/041ab28cb6d709a9b5b2c5a5584744fabadbe907f4c877f2ffe695f77991cc39?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </div>
    </div>
  );
};

export default Pagination;
import React from 'react';

const AddLocationButton: React.FC = () => {
  return (
    <button className="flex gap-2 items-center self-stretch px-3 py-1.5 my-auto bg-emerald-900 min-h-[32px] rounded-[360px] text-stone-50">
      <img loading="lazy" src="http://b.io/ext_13-" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
      <span className="self-stretch my-auto">Add Location</span>
    </button>
  );
};

export default AddLocationButton;
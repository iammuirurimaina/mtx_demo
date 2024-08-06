import React from 'react';
import { useNavigate } from 'react-router-dom';


const VerifyButton: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
      };


  return (
    <button className="flex gap-3 justify-center items-center self-center px-6 py-4 mt-6 max-w-full text-base font-semibold tracking-tight bg-stone-200 min-h-[56px] rounded-[360px] text-neutral-600 w-[305px]" onClick={handleLoginClick}>
      <span className="self-stretch my-auto">Verify & Login</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e9a71d85a0d68ef311e7f8e492fe2851fdf3786422b3c86c2eea324ac1d87b8?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
    </button>
  );
};

export default VerifyButton;
import React from 'react';
import CodeInput from './CodeInput';
import VerifyButton from './VerifyButton';

const Authentication: React.FC = () => {
  const codeInputs = Array(6).fill(null);

  return (
    <main className="flex justify-center overflow-hidden flex-col p-8 max-w-[500px] w-full bg-stone-200 rounded-[32px] max-md:px-5 max-md:max-w-full mx-auto">
      <div className="flex flex-col justify-center overflow-hidden p-8 bg-stone-200 max-w-[480px] rounded-[32px] mx-auto">
        <h1 className="text-2xl font-medium tracking-tighter leading-snug text-zinc-800 text-center">
          It's really You?
        </h1>
        <p className="mt-6 text-sm font-medium tracking-tight text-zinc-800 text-center">
          An authentication code has been sent to hristov123@gmail.com
        </p>
        <form className="flex gap-3 self-center mt-6 max-w-full min-h-[56px] w-[316px]">
          {codeInputs.map((_, index) => (
            <CodeInput key={index} />
          ))}
        </form>
        <div className="flex gap-2 justify-center items-center py-2 mt-6 w-full text-base tracking-tight text-zinc-800">
          <p className="text-right">I didn't receive code?</p>
          <button className="font-semibold">Resend Code</button>
        </div>
        <VerifyButton />
      </div>
    </main>
  );
};

export default Authentication;

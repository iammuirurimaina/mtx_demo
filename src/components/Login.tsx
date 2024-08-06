import React from 'react';

import LoginForm from './Login/LoginForm';

const Login: React.FC = () => {
  return (
    <>

      {/* <main className="flex justify-center items-center overflow-hidden flex-col pt-12 pb-60 w-full text-xs tracking-tight bg-stone-50 min-h-[704px] px-[480px] text-zinc-800 max-md:px-5 max-md:pb-24 max-md:max-w-full"> */}
      <main>
        <LoginForm />
      </main>
      </>
  );
};

export default Login;
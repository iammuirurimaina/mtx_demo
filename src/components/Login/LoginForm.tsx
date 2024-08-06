import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth');
  };

  return (
    <form className="flex justify-center overflow-hidden flex-col p-8 max-w-[500px] w-full bg-stone-200 rounded-[32px] max-md:px-5 max-md:max-w-full mx-auto">
      <h1 className="text-4xl font-medium tracking-tighter leading-tight text-center">
        Login
      </h1>
      <div className="flex flex-col mt-6 w-full font-medium">
        <div className="flex gap-4 items-center px-4 py-2.5 w-full rounded-2xl bg-stone-50 min-h-[56px]">
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="flex-1 bg-transparent border-none outline-none"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70b190051338c70c415ede6740eca8d74cec54cc6875968306467cb1b2a9d2f5?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9"
            className="object-contain shrink-0 w-6 aspect-square"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full font-medium">
        <div className="flex gap-4 items-center px-4 py-2.5 w-full rounded-2xl bg-stone-50 min-h-[56px]">
          <input
            type="password"
            id="password"
            placeholder="Your Password"
            className="flex-1 bg-transparent border-none outline-none"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/637a10807708671d490c473bffac0f1c858cd3245b21fb5e50cf2005aaffdb40?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9"
            className="object-contain shrink-0 w-6 aspect-square"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-5 items-start py-2 mt-6 w-full text-base tracking-tight">
        <div className="flex gap-2 items-center min-h-[24px]">
          <input
            type="checkbox"
            id="remember"
            className="flex shrink-0 rounded bg-stone-200 h-[18px] w-[18px]"
          />
          <label htmlFor="remember" className="self-stretch my-auto">
            Remember me
          </label>
        </div>
        <a href="#" className="flex-1 shrink font-medium text-right basis-0">
          Forgot Password?
        </a>
      </div>
      <button
        type="submit"
        className="flex gap-3 justify-center items-center self-center px-6 py-4 mt-6 max-w-full text-base font-semibold tracking-tight whitespace-nowrap bg-stone-200 min-h-[56px] rounded-[360px] text-neutral-600 w-[305px] max-md:px-5"
        onClick={handleLogin}
      >
        <span className="self-stretch my-auto">Login</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e9a71d85a0d68ef311e7f8e492fe2851fdf3786422b3c86c2eea324ac1d87b8?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9"
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
        />
      </button>
    </form>
  );
};

export default LoginForm;

import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  function handleFormStateChange() {
    setIsLogin(!isLogin);
  }

  return (
    <div className="absolute bg-[#FAF0E6] w-screen h-screen">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-3/12 px-4 py-8 justify-center mx-auto m-10 rounded-lg bg-[#405D72] bg-opacity-90 text-[#FFF8F3]"
      >
        <h1 className="text-3xl font-bold mb-5 self-center">
          {isLogin ? `Sign In` : `Sign Up`}
        </h1>
        {!isLogin ? (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 mb-3 rounded-lg"
          />
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 mb-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 mb-3 rounded-lg"
        />
        <button className="w-full font-semibold rounded-lg bg-[#E68369] text-white py-1 mx-auto my-3 hover:bg-opacity-95 hover:font-black">
          {isLogin ? `Sign In` : `Sign Up`}
        </button>
        <p
          onClick={handleFormStateChange}
          className="text-sm hover:cursor-pointer hover:underline"
        >
          {isLogin
            ? `New User? Click here to make an account`
            : `Already have an account? Click here to Log in `}
        </p>
      </form>
    </div>
  );
};

export default Login;

import { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/state/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [submitErrorMessage, setSubmitErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFormStateChange() {
    setSubmitErrorMessage(null);
    setIsLogin(!isLogin);
  }

  function handleValidation() {
    setSubmitErrorMessage(null);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const res = checkValidation(nameRef.current?.value, email, password);

    // this is when we have errors from client input in the form
    if (!res.success) {
      return setSubmitErrorMessage(res.errorMessage);
    }
    // signup / signin flow since form is validated (Firebase)
    if (!isLogin) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                setUser({
                  displayName,
                  uid, 
                  email
                })
              );

              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setSubmitErrorMessage(`${errorCode} - ${errorMessage}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSubmitErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSubmitErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  }

  return (
    <div className="absolute bg-[#FAF0E6] w-screen h-screen">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-3/4 sm:h-fit h-1/2 sm:w-3/12 px-4 py-8 justify-center mx-auto m-10 rounded-lg bg-[#405D72] bg-opacity-90 text-[#FFF8F3]"
      >
        <h1 className="text-3xl font-bold mb-5 self-center">
          {isLogin ? `Sign In` : `Sign Up`}
        </h1>
        {!isLogin ? (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 mb-3 rounded-lg text-black"
            ref={nameRef}
          />
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 mb-3 rounded-lg text-black"
          ref={emailRef}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 mb-3 rounded-lg text-black"
          ref={passwordRef}
          autoComplete="current-password"
        />
        <p className="text-red-400 font-bold">{submitErrorMessage}</p>
        <button
          className="w-full font-semibold rounded-lg bg-[#E68369] text-white py-1 mx-auto my-3 hover:bg-opacity-95 hover:font-black"
          onClick={handleValidation}
        >
          {isLogin ? `Sign In` : `Sign Up`}
        </button>
        <p
          onClick={handleFormStateChange}
          className="sm:text-sm text-xs hover:cursor-pointer hover:underline"
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

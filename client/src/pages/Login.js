import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
import { googleLogo } from "../assets";

const Login = () => {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // ============== Google Login Start here =====================
  const handleLogin = () => {
    signInWithPopup(
      auth,
      provider.setCustomParameters({ prompt: "select_account" })
    )
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
  // ============== Google Login End here =======================
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-sm min-h-72 sm:min-h-80 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center gap-4 px-5 py-8">
        <h1 className="text-2xl font-bold">Login</h1>
        <button
          onClick={handleLogin}
          className="text-base w-full max-w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img className="w-8" src={googleLogo} alt="googleLogo" />
          <span className="text-sm text-gray-900"> Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;

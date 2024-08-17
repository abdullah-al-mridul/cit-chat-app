import React, { useState } from "react";
import Login__Img from "../images/login__image.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase/firebase.config";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });
  const googleSignUpHandler = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User registered successfully:", user);
    } catch (error) {
      // setError(error.message);
      console.log("login error");
    }
  };
  return (
    <main>
      <div className="h-screen flex ">
        <div className="flex-1 flex items-center justify-center">
          <div className=" min-w-[500px]">
            <div className="font-nunito">
              <h2 className=" text-[#11175D] font-[700] text-[34px] mb-[13px]">
                Login to your account!
              </h2>
              <div className=" flex gap-[10px] ">
                <button
                  onClick={googleSignUpHandler}
                  className="flex-1 gap-[10px] flex items-center border-[#03014C]/40 border py-[20px] justify-center font-semibold font-sans rounded-[10px]"
                >
                  <span className="text-[25px]">
                    <FcGoogle />
                  </span>
                  Login with Google
                </button>
                <button className="flex-1 gap-[10px] flex items-center border-[#03014C]/40 border py-[20px] justify-center font-semibold font-sans rounded-[10px]">
                  <span className="text-[25px]">
                    <FaFacebookSquare />
                  </span>
                  Login with Facebook
                </button>
              </div>
              <div className=" font-sans mt-[50px]">
                <form action="post">
                  <div className=" relative ">
                    <input
                      className=" text-[20px] py-[16px] border-b border-[#03014C]/40 focus:outline-none w-[370px] font-semibold"
                      type="email"
                      name=""
                      id=""
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                      }}
                      value={formData.email}
                    />
                    <p className=" absolute top-[-12px]">Email Address</p>
                  </div>
                  <div className=" mt-[60px] mb-[55px] relative">
                    <input
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          pass: e.target.value,
                        });
                      }}
                      value={formData.pass}
                      type="password"
                      className=" text-[20px] py-[16px] border-b border-[#03014C]/40 focus:outline-none w-[370px] font-semibold"
                      name=""
                      id=""
                    />
                    <p className=" absolute top-[-12px]" s>
                      Password
                    </p>
                  </div>
                  <input
                    className=" bg-[#5F34F5] w-[370px] text-white text-[20px] font-semibold py-[26px] rounded-[9px] cursor-pointer"
                    type="button"
                    value="Login to Coninue"
                  />
                </form>
              </div>
            </div>

            <p className=" w-[368px] text-center mt-[20px] font-medium text-[#03014C]">
              Don’t have an account ?{" "}
              <Link to={"/register"} className=" cursor-pointer text-[#EA6C00]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src={Login__Img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </main>
  );
};

export default Login;
Login;

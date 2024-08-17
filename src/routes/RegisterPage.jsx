import React, { useEffect, useState } from "react";
import Register__IMG from "../images/register__image.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [placeHolder, setPlaceHolder] = useState({
    name: false,
    email: false,
    pass: false,
  });
  const [formValue, setFormValue] = useState({
    email: "",
    name: "",
    pass: "",
  });
  const [passwordShow, setPasswordShow] = useState(false);
  const placeHolderHandler = (action, type) => {
    if (action === "click") {
      switch (type) {
        case "email":
          setPlaceHolder({
            ...placeHolder,
            email: true,
          });
          break;
        case "name":
          setPlaceHolder({
            ...placeHolder,
            name: true,
          });
          break;
        default:
          setPlaceHolder({
            ...placeHolder,
            pass: true,
          });
      }
    } else {
      switch (type) {
        case "email":
          setPlaceHolder({
            ...placeHolder,
            email: false,
          });
          break;
        case "name":
          setPlaceHolder({
            ...placeHolder,
            name: false,
          });
          break;
        default:
          setPlaceHolder({
            ...placeHolder,
            pass: false,
          });
      }
    }
  };
  return (
    <main>
      <div className="h-screen flex ">
        <div className="flex-1 flex items-center justify-center">
          <div>
            <div className="font-nunito">
              <h2 className=" text-[#11175D] font-[700] text-[34px] mb-[13px]">
                Get started with easily register
              </h2>
              <p className=" text-[20px] mb-[50px] font-nunito text-[#000000]/60">
                Free register and you can enjoy it
              </p>
            </div>
            <form action="post" className="  flex flex-col">
              <div className=" relative">
                <input
                  className="h-[80px] w-[360px] border border-[#11175D] rounded-[8.6px] focus:outline-none py-[27px] px-[57px] text-[20px] font-semibold text-[#11175D] mb-[55px]"
                  type="email"
                  name=""
                  id=""
                  onChange={(e) => [
                    setFormValue({
                      ...formValue,
                      email: e.target.value,
                    }),
                    e.target.value === ""
                      ? setPlaceHolder({
                          ...placeHolder,
                          email: false,
                        })
                      : null,
                  ]}
                  onClick={() => {
                    placeHolderHandler("click", "email");
                  }}
                  onBlur={() => {
                    placeHolderHandler("out", "email");
                  }}
                  value={formValue.email}
                />
                <p
                  className={` absolute  bg-white px-[10px] transition-all  font-semibold text-[#11175D] ${
                    placeHolder.email || formValue.email
                      ? " top-[-10px] left-[20px] text-[13px]"
                      : "left-[56px] top-[23px] text-[20px]"
                  }`}
                >
                  Email Address
                </p>
              </div>
              <div className=" relative">
                <input
                  className="h-[80px] w-[360px] border border-[#11175D] rounded-[8.6px] focus:outline-none py-[27px] px-[57px] text-[20px] font-semibold text-[#11175D] mb-[55px]"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => [
                    setFormValue({
                      ...formValue,
                      name: e.target.value,
                    }),
                    e.target.value === ""
                      ? setPlaceHolder({
                          ...placeHolder,
                          name: false,
                        })
                      : null,
                  ]}
                  onClick={() => {
                    placeHolderHandler("click", "name");
                  }}
                  onBlur={() => {
                    placeHolderHandler("out", "name");
                  }}
                  value={formValue.name}
                />
                <p
                  className={` absolute  bg-white px-[10px] transition-all  font-semibold text-[#11175D] ${
                    placeHolder.name || formValue.name
                      ? " top-[-10px] left-[20px] text-[13px]"
                      : "left-[56px] top-[23px] text-[20px]"
                  }`}
                >
                  Full Name
                </p>
              </div>
              <div className=" relative mb-[50px]">
                <input
                  className="h-[80px] w-[360px] border border-[#11175D] rounded-[8.6px] focus:outline-none py-[27px] px-[57px] text-[20px] font-semibold text-[#11175D] mb-[25px]"
                  type={passwordShow ? "text" : "password"}
                  name=""
                  id=""
                  onChange={(e) => [
                    setFormValue({
                      ...formValue,
                      pass: e.target.value,
                    }),
                    e.target.value === ""
                      ? setPlaceHolder({
                          ...placeHolder,
                          pass: false,
                        })
                      : null,
                  ]}
                  onClick={() => {
                    placeHolderHandler("click", "pass");
                  }}
                  onBlur={() => {
                    placeHolderHandler("out", "pass");
                  }}
                  value={formValue.pass}
                />
                <p
                  className={` absolute  bg-white px-[10px] transition-all  font-semibold text-[#11175D] ${
                    placeHolder.pass || formValue.pass
                      ? " top-[-10px] left-[20px] text-[13px]"
                      : "left-[56px] top-[23px] text-[20px]"
                  }`}
                >
                  Password
                </p>
                <span
                  onClick={() => {
                    setPasswordShow(!passwordShow);
                  }}
                  className=" absolute cursor-pointer top-[25px] right-[145px]"
                >
                  {passwordShow ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="24"
                      viewBox="0 0 28 24"
                      fill="none"
                    >
                      <path
                        opacity="0.3"
                        d="M13.4267 15.358C14.3187 15.358 15.1741 15.0007 15.8049 14.3646C16.4356 13.7286 16.7899 12.866 16.7899 11.9665C16.7899 11.8672 16.7854 11.7687 16.777 11.6715L13.1342 15.345C13.2306 15.3534 13.3279 15.358 13.4267 15.358ZM24.559 1.47585L23.2762 0.183446C23.2311 0.13805 23.17 0.112549 23.1064 0.112549C23.0427 0.112549 22.9816 0.13805 22.9365 0.183446L19.6538 3.4947C17.8429 2.56143 15.8072 2.0948 13.5468 2.0948C7.77528 2.0948 3.46915 5.12595 0.62842 11.1882C0.514236 11.4321 0.455017 11.6984 0.455017 11.968C0.455017 12.2376 0.514236 12.5039 0.62842 12.7477C1.76351 15.1587 3.13032 17.0912 4.72886 18.5451L1.55211 21.7473C1.50709 21.7927 1.4818 21.8543 1.4818 21.9186C1.4818 21.9828 1.50709 22.0444 1.55211 22.0898L2.83404 23.3825C2.87909 23.4279 2.94017 23.4534 3.00385 23.4534C3.06754 23.4534 3.12862 23.4279 3.17366 23.3825L24.559 1.81863C24.5813 1.79613 24.5991 1.76942 24.6111 1.74001C24.6232 1.7106 24.6295 1.67908 24.6295 1.64724C24.6295 1.6154 24.6232 1.58388 24.6111 1.55447C24.5991 1.52506 24.5813 1.49835 24.559 1.47585ZM8.14164 11.9665C8.14155 11.0459 8.37791 10.1411 8.8277 9.34005C9.27748 8.53901 9.92535 7.86911 10.7082 7.39561C11.491 6.92211 12.3821 6.66115 13.2947 6.63816C14.2073 6.61516 15.1102 6.83092 15.9155 7.26441L14.4555 8.73668C13.8667 8.54656 13.2373 8.52366 12.6365 8.6705C12.0356 8.81734 11.4865 9.12824 11.0493 9.56908C10.6121 10.0099 10.3038 10.5637 10.1582 11.1696C10.0126 11.7755 10.0353 12.4102 10.2238 13.0039L8.76383 14.4762C8.35412 13.7043 8.14036 12.842 8.14164 11.9665Z"
                        fill="#03014C"
                      />
                      <path
                        opacity="0.3"
                        d="M26.9532 11.3352C25.8738 9.13287 24.589 7.33706 23.0989 5.94775L18.6789 10.2301C19.0514 11.1736 19.134 12.2015 18.9166 13.1895C18.6992 14.1775 18.1912 15.0835 17.4538 15.7978C16.7164 16.5121 15.7813 17.0043 14.7614 17.215C13.7415 17.4256 12.6805 17.3455 11.7066 16.9846L7.95746 20.6166C9.69678 21.3963 11.6313 21.7862 13.7611 21.7862C19.6549 21.7862 24.0523 18.8125 26.9532 12.8651C27.0698 12.6259 27.1303 12.3647 27.1303 12.1001C27.1303 11.8356 27.0698 11.5744 26.9532 11.3352Z"
                        fill="#03014C"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      viewBox="0 0 28 20"
                      fill="none"
                    >
                      <path
                        opacity="0.3"
                        d="M13.6001 14.2454C14.4921 14.2454 15.3475 13.888 15.9783 13.252C16.609 12.616 16.9633 11.7533 16.9633 10.8539C16.9633 10.7545 16.9588 10.6561 16.9504 10.5589L13.3076 14.2323C13.404 14.2408 13.5013 14.2454 13.6001 14.2454ZM21.7097 3.75987L19.8272 2.38208C16.3746 5.76423 19.7821 2.33668 19.8272 2.38208C16.3746 5.76423 15.7172 7.31135 19 3.99995L19.8272 2.38208C18.0163 1.44881 15.9806 0.982178 13.7202 0.982178C7.94868 0.982178 3.64255 4.01333 0.80182 10.0756C0.687637 10.3194 0.628418 10.5857 0.628418 10.8554C0.628418 11.125 0.687637 11.3913 0.80182 11.6351C1.93691 14.0461 3.30372 15.9785 4.90226 17.4324L7.1734 18.3874C7.12838 18.4328 9.59671 15.6939 6.25191 17.9999C7.77396 19.5348 8.67675 14.1391 5.5 17.6838L4.90226 17.4324C5.22932 17.6146 5.3354 17.6146 5.3354 17.6146C5.3354 17.6146 7.12835 18.4328 7.1734 18.3874L21.5 3.99993C21.5223 3.97743 18.2155 6.87254 21.5 3.5C18.1971 6.96531 18.2155 6.87254 21.5 3.5C17.2155 6.05808 17.6971 6.20581 21.5 3.5C18.2155 7.05808 18.4773 7.39657 21.7097 3.75987ZM8.31504 10.8539C8.31495 9.93332 8.55132 9.02846 9.0011 8.22743C9.45088 7.42639 10.0987 6.75649 10.8816 6.28299C11.6644 5.80949 12.5555 5.54853 13.4681 5.52554C14.3807 5.50255 15.2836 5.7183 16.0889 6.15179L14.6289 7.62406C14.0401 7.43394 13.4107 7.41104 12.8099 7.55788C12.209 7.70472 11.6599 8.01562 11.2227 8.45646C10.7855 8.89731 10.4772 9.45107 10.3316 10.057C10.186 10.6629 10.2087 11.2975 10.3972 11.8913L8.93723 13.3636C8.52752 12.5916 8.31376 11.7294 8.31504 10.8539Z"
                        fill="#03014C"
                      />
                      <path
                        opacity="0.3"
                        d="M26.9531 9.33517C25.8737 7.13287 24.589 5.33706 23.0988 3.94775L18.6788 8.23006C19.0514 9.1736 19.134 10.2015 18.9166 11.1895C18.6992 12.1775 18.1911 13.0835 17.4537 13.7978C16.7164 14.5121 15.7813 15.0043 14.7614 15.215C13.7415 15.4256 12.6805 15.3455 11.7065 14.9846L7.9574 18.6166C9.69671 19.3963 11.6313 19.7862 13.7611 19.7862C19.6549 19.7862 24.0522 16.8125 26.9531 10.8651C27.0697 10.6259 27.1302 10.3647 27.1302 10.1001C27.1302 9.8356 27.0697 9.57435 26.9531 9.33517Z"
                        fill="#03014C"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <input
                className=" bg-[#5F35F5] w-[360px] py-[20px] rounded-[86px] text-white text-[20px] font-semibold box-border cursor-pointer"
                type="submit"
                value="Sign Up"
              />
            </form>

            <p className=" w-[368px] text-center mt-[20px] font-medium text-[#03014C]">
              Already have an account ?{" "}
              <Link to={"/login"} className=" cursor-pointer text-[#EA6C00]">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={Register__IMG}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Register;
Register;

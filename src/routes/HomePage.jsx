import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import GroupList from "../components/GroupList";
import Friendlist from "../components/FriendList";
import UserList from "../components/UserList";
import FriendReq from "../components/FriendReq";
import BlockedUsers from "../components/BlockedUsers";
const HomePage = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out user:", error);
    }
  };
  const [confirmationShow, setConfirmationShow] = useState(false);
  return (
    <main className=" p-[25px] h-screen flex gap-[35px]">
      <aside className="h-full bg-[#5F35F5] w-[120px] rounded-[20px] flex flex-col justify-between">
        <div>
          <div className=" w-[100%] pt-[38px] flex justify-center">
            <img
              className=" h-[80px] w-[80px] rounded-full"
              src="https://i.ibb.co/6wnp4GB/image.png"
              alt="profile__pic"
            />
          </div>
          <div className=" pt-[70px]  flex gap-[25px] list-none flex-col items-end">
            <li className=" bg-white flex pl-[21px] w-[85%] py-[10px] rounded-s-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 47 44"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.3207 0L46.199 19.9519L43.7566 22.3943L40.2822 19.2433V41.6926L38.5622 43.4126H28.2423L26.5223 41.6926V29.6527H19.6423V41.6926L17.9223 43.4126H7.60236L5.88237 41.6926V19.2708L2.44239 22.3943L0 19.9519L21.8439 0H24.3207ZM9.32236 16.1438V39.9726H16.2023V27.9327L17.9223 26.2127H28.2423L29.9623 27.9327V39.9726H36.8422V16.1232L23.0823 3.64638L9.32236 16.1438Z"
                  fill="#5F35F5"
                />
              </svg>
            </li>
            <li className=" flex w-[85%]  py-[10px] rounded-s-[15px] pl-[21px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 54 54"
                fill="none"
              >
                <g filter="url(#filter0_d_101_10)">
                  <path
                    d="M43.1284 6.76724C39.3726 2.9813 34.4156 0.62631 29.1119 0.108287C23.8083 -0.409736 18.4903 0.941668 14.0749 3.92952C9.6595 6.91736 6.42333 11.3544 4.92432 16.4757C3.42531 21.597 3.75741 27.0816 5.86335 31.984C6.08285 32.4396 6.15487 32.9525 6.06936 33.4511L4.05504 43.1481C3.97743 43.5199 3.99328 43.9052 4.10115 44.2693C4.20903 44.6334 4.40556 44.965 4.67307 45.2342C4.89237 45.4523 5.15347 45.6236 5.44065 45.7378C5.72783 45.8521 6.03514 45.9069 6.34404 45.899H6.80185L16.5988 43.9275C17.0967 43.8676 17.6017 43.9387 18.0638 44.1339C22.9588 46.243 28.4352 46.5755 33.5489 45.0743C38.6625 43.5731 43.093 40.332 46.0763 35.91C49.0597 31.488 50.4091 26.1621 49.8919 20.8505C49.3746 15.5389 47.0232 10.5745 43.2429 6.81309L43.1284 6.76724ZM17.7891 25.2672C17.3364 25.2672 16.8938 25.1327 16.5174 24.8808C16.141 24.6289 15.8476 24.2709 15.6743 23.852C15.5011 23.4331 15.4557 22.9722 15.5441 22.5275C15.6324 22.0828 15.8504 21.6743 16.1705 21.3537C16.4906 21.0331 16.8985 20.8148 17.3425 20.7263C17.7865 20.6379 18.2468 20.6833 18.6651 20.8568C19.0833 21.0303 19.4408 21.3241 19.6923 21.7011C19.9438 22.0781 20.0781 22.5213 20.0781 22.9747C20.0781 23.5827 19.8369 24.1658 19.4077 24.5957C18.9784 25.0256 18.3962 25.2672 17.7891 25.2672ZM26.9451 25.2672C26.4924 25.2672 26.0498 25.1327 25.6734 24.8808C25.297 24.6289 25.0036 24.2709 24.8304 23.852C24.6571 23.4331 24.6118 22.9722 24.7001 22.5275C24.7884 22.0828 25.0064 21.6743 25.3265 21.3537C25.6467 21.0331 26.0545 20.8148 26.4986 20.7263C26.9426 20.6379 27.4028 20.6833 27.8211 20.8568C28.2393 21.0303 28.5968 21.3241 28.8484 21.7011C29.0999 22.0781 29.2341 22.5213 29.2341 22.9747C29.2341 23.5827 28.993 24.1658 28.5637 24.5957C28.1344 25.0256 27.5522 25.2672 26.9451 25.2672ZM36.1012 25.2672C35.6484 25.2672 35.2059 25.1327 34.8294 24.8808C34.453 24.6289 34.1596 24.2709 33.9864 23.852C33.8131 23.4331 33.7678 22.9722 33.8561 22.5275C33.9444 22.0828 34.1625 21.6743 34.4826 21.3537C34.8027 21.0331 35.2106 20.8148 35.6546 20.7263C36.0986 20.6379 36.5589 20.6833 36.9771 20.8568C37.3954 21.0303 37.7529 21.3241 38.0044 21.7011C38.2559 22.0781 38.3902 22.5213 38.3902 22.9747C38.3902 23.5827 38.149 24.1658 37.7197 24.5957C37.2905 25.0256 36.7082 25.2672 36.1012 25.2672Z"
                    fill="#BAD1FF"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_101_10"
                    x={0}
                    y={0}
                    width={54}
                    height={54}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_101_10"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_101_10"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </li>
            <li className=" flex w-[85%]  py-[10px] rounded-s-[15px] pl-[21px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 47 46"
                fill="none"
              >
                <path
                  d="M45.6719 40.3931C44.1769 39.0604 42.8681 37.5325 41.7806 35.8507C40.5934 33.5292 39.8819 30.994 39.6877 28.3938V20.7353C39.698 16.6512 38.2165 12.7039 35.5217 9.63508C32.8268 6.56626 29.104 4.58713 25.0529 4.06954V2.06965C25.0529 1.52075 24.8348 0.994322 24.4467 0.606187C24.0585 0.218052 23.5321 0 22.9832 0C22.4343 0 21.9079 0.218052 21.5198 0.606187C21.1316 0.994322 20.9136 1.52075 20.9136 2.06965V4.10055C16.8987 4.65544 13.2209 6.64654 10.5615 9.70505C7.90202 12.7636 6.44108 16.6822 6.44925 20.7353V28.3938C6.25509 30.994 5.54353 33.5292 4.35635 35.8507C3.28801 37.5287 2.00019 39.0563 0.527103 40.3931C0.361734 40.5384 0.229199 40.7172 0.138314 40.9177C0.0474291 41.1182 0.000278738 41.3357 0 41.5558V43.6642C0 44.0754 0.163335 44.4697 0.454073 44.7605C0.744811 45.0512 1.13914 45.2145 1.5503 45.2145H44.6487C45.0598 45.2145 45.4542 45.0512 45.7449 44.7605C46.0356 44.4697 46.199 44.0754 46.199 43.6642V41.5558C46.1987 41.3357 46.1516 41.1182 46.0607 40.9177C45.9698 40.7172 45.8372 40.5384 45.6719 40.3931ZM3.22463 42.1139C4.66704 40.7205 5.93703 39.1591 7.00736 37.463C8.5028 34.6593 9.37534 31.5657 9.56536 28.3938V20.7353C9.50388 18.9184 9.80864 17.1077 10.4615 15.411C11.1144 13.7144 12.102 12.1664 13.3655 10.8594C14.6291 9.55237 16.1427 8.51296 17.8163 7.80309C19.49 7.09322 21.2893 6.72739 23.1072 6.72739C24.9252 6.72739 26.7245 7.09322 28.3981 7.80309C30.0718 8.51296 31.5854 9.55237 32.849 10.8594C34.1125 12.1664 35.1001 13.7144 35.753 15.411C36.4058 17.1077 36.7106 18.9184 36.6491 20.7353V28.3938C36.8391 31.5657 37.7117 34.6593 39.2071 37.463C40.2775 39.1591 41.5474 40.7205 42.9899 42.1139H3.22463Z"
                  fill="white"
                  fillOpacity="0.7"
                />
              </svg>
            </li>
            <li className=" flex w-[85%] pl-[21px] py-[10px] rounded-s-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 54 54"
                fill="none"
              >
                <g filter="url(#filter0_d_205_9)">
                  <path
                    d="M29.4794 4.19778e-06C30.1555 4.19778e-06 30.7604 0.420899 30.9881 1.05109L32.6119 5.55214C33.1937 5.69704 33.6928 5.84193 34.116 5.99373C34.5783 6.15933 35.174 6.41003 35.9099 6.75272L39.691 4.75175C39.9996 4.58823 40.353 4.52921 40.698 4.58354C41.043 4.63786 41.3611 4.8026 41.6045 5.05304L44.9302 8.4915C45.3718 8.94919 45.496 9.61849 45.2476 10.2027L43.4744 14.3587C43.7688 14.8992 44.0034 15.3615 44.1828 15.7479C44.376 16.1688 44.6151 16.7484 44.9003 17.4959L49.0333 19.2669C49.6543 19.5314 50.0384 20.1524 49.997 20.8171L49.6934 25.5895C49.6726 25.8995 49.5613 26.1967 49.3732 26.444C49.1852 26.6914 48.9286 26.8781 48.6354 26.981L44.7209 28.3725C44.6082 28.913 44.4909 29.3752 44.3668 29.7662C44.1664 30.3701 43.9377 30.9641 43.6814 31.5464L45.6478 35.8934C45.7866 36.1988 45.824 36.5406 45.7544 36.8688C45.6849 37.197 45.5121 37.4943 45.2614 37.7172L41.5217 41.0568C41.2755 41.2758 40.9681 41.4143 40.6409 41.4538C40.3137 41.4932 39.9823 41.4318 39.691 41.2776L35.8363 39.2352C35.2333 39.5546 34.6111 39.8364 33.9734 40.0793L32.2899 40.7095L30.7949 44.8495C30.6841 45.1526 30.4843 45.4152 30.2216 45.6028C29.9589 45.7904 29.6457 45.8942 29.323 45.9005L24.9531 45.9994C24.6218 46.0081 24.296 45.9139 24.0205 45.7298C23.7449 45.5457 23.5332 45.2807 23.4145 44.9714L21.6527 40.3093C21.0516 40.1039 20.4565 39.8815 19.868 39.6423C19.3867 39.434 18.9126 39.2092 18.4466 38.9684L14.0768 40.836C13.7889 40.9588 13.4714 40.9953 13.1631 40.941C12.8548 40.8867 12.569 40.744 12.3404 40.5301L9.10667 37.4964C8.86591 37.2716 8.70196 36.9767 8.63798 36.6535C8.57401 36.3303 8.61326 35.9952 8.75018 35.6956L10.6292 31.6016C10.3793 31.1167 10.1476 30.6226 9.93464 30.1204C9.68602 29.5057 9.45593 28.8837 9.24466 28.2552L5.12781 27.0017C4.79317 26.9005 4.50129 26.6917 4.29751 26.4077C4.09373 26.1236 3.98944 25.7802 4.00085 25.4308L4.16184 21.0125C4.1733 20.7243 4.26335 20.4446 4.42225 20.2038C4.58116 19.963 4.80287 19.7703 5.06341 19.6464L9.38266 17.5718C9.58275 16.8381 9.75755 16.2677 9.91164 15.8514C10.1286 15.2954 10.3696 14.749 10.6338 14.2138L8.76168 10.2579C8.61961 9.95746 8.57646 9.61973 8.63845 9.29324C8.70044 8.96675 8.86437 8.66833 9.10667 8.4409L12.3358 5.39114C12.5621 5.17764 12.8454 5.0341 13.1514 4.97779C13.4574 4.92148 13.7732 4.9548 14.0607 5.07374L18.4259 6.87692C18.9089 6.55492 19.3459 6.29503 19.7415 6.08573C20.213 5.83503 20.8432 5.57284 21.6366 5.28994L23.1546 1.05569C23.2668 0.745813 23.4719 0.478125 23.742 0.289182C24.012 0.100239 24.3338 -0.000750368 24.6633 4.19778e-06H29.4794ZM28.3524 3.16707H25.7926L24.4011 7.06322C24.3193 7.2904 24.187 7.49603 24.014 7.66456C23.8411 7.8331 23.6322 7.96015 23.403 8.03611C22.4002 8.3696 21.6757 8.6571 21.2526 8.8802C20.8041 9.11709 20.2314 9.47819 19.5506 9.96118C19.3278 10.1176 19.0691 10.2151 18.7985 10.2449C18.5279 10.2747 18.2542 10.2356 18.0028 10.1314L13.7939 8.3949L12.1541 9.94508L13.8629 13.556C14.0699 13.993 14.0653 14.499 13.8491 14.9291C13.3891 15.8514 13.0786 16.5322 12.9222 16.9508C12.7658 17.3671 12.5565 18.0824 12.3013 19.0714C12.2435 19.2955 12.1374 19.5043 11.9904 19.6831C11.8434 19.8619 11.659 20.0063 11.4503 20.1064L7.33343 22.082L7.25063 24.336L10.9765 25.4676C11.471 25.6171 11.862 25.9966 12.0253 26.4842C12.3933 27.5882 12.6876 28.4024 12.8992 28.913C13.1796 29.5609 13.4897 30.1956 13.8284 30.815C14.0607 31.2474 14.0768 31.7626 13.8721 32.2088L12.1449 35.9762L13.7801 37.5125L17.8786 35.76C18.0993 35.6656 18.3383 35.6216 18.5782 35.6312C18.8181 35.6407 19.0529 35.7036 19.2654 35.8152C20.1049 36.2568 20.7305 36.5627 21.1261 36.7306C21.5285 36.8985 22.299 37.1791 23.4168 37.5608C23.6387 37.6366 23.8411 37.7604 24.0097 37.9234C24.1782 38.0864 24.3088 38.2846 24.3919 38.5038L26.0203 42.8071L28.15 42.7611L29.5231 38.9569C29.6016 38.7399 29.7264 38.5425 29.8888 38.3784C30.0513 38.2144 30.2474 38.0877 30.4637 38.007L32.8487 37.1147C33.4513 36.8916 34.1827 36.5397 35.036 36.0567C35.2721 35.924 35.5378 35.8528 35.8087 35.8496C36.0796 35.8463 36.3469 35.9112 36.5861 36.0383L40.2131 37.9587L42.2531 36.1395L40.4684 32.1996C40.3767 31.9974 40.3291 31.7779 40.3287 31.5559C40.3283 31.3338 40.3751 31.1142 40.4661 30.9116C40.8847 29.9755 41.1676 29.2694 41.3102 28.8187C41.4505 28.3771 41.5953 27.74 41.7356 26.9212C41.7839 26.6431 41.9054 26.3828 42.0878 26.1674C42.2701 25.9519 42.5066 25.7889 42.7729 25.6953L46.5632 24.3498L46.7288 21.7278L43.0029 20.1317C42.8045 20.0472 42.6254 19.9233 42.4763 19.7676C42.3273 19.6118 42.2114 19.4274 42.1358 19.2255C41.8701 18.4923 41.5802 17.7682 41.2665 17.0543C40.9694 16.4327 40.6472 15.8235 40.3005 15.2281C40.1804 15.0178 40.1106 14.7825 40.0966 14.5407C40.0827 14.2989 40.1249 14.0571 40.22 13.8343L41.8874 9.92438L40.1303 8.10741L36.708 9.91978C36.4846 10.0383 36.2365 10.1027 35.9836 10.1079C35.7308 10.1131 35.4803 10.0589 35.2522 9.94968C34.5258 9.58851 33.7828 9.26155 33.0258 8.9699C32.3804 8.75312 31.7221 8.57646 31.0548 8.4409C30.79 8.38476 30.5439 8.26222 30.3395 8.08479C30.1351 7.90736 29.9792 7.68087 29.8864 7.42661L28.3501 3.16477L28.3524 3.16707ZM27.0552 12.9741C32.6556 12.9741 37.1979 17.466 37.1979 23.0043C37.1979 28.5427 32.6556 33.0322 27.0552 33.0322C21.4526 33.0322 16.9126 28.5427 16.9126 23.0043C16.9126 17.466 21.4526 12.9764 27.0552 12.9764V12.9741ZM27.0552 16.1435C23.2213 16.1435 20.1141 19.214 20.1141 23.0043C20.1141 26.7947 23.2213 29.8674 27.0552 29.8674C30.8869 29.8674 33.9941 26.7947 33.9941 23.0043C33.9941 19.214 30.8892 16.1435 27.0552 16.1435Z"
                    fill="white"
                    fillOpacity="0.7"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_205_9"
                    x={0}
                    y={0}
                    width={54}
                    height={54}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_205_9"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_205_9"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </li>
          </div>
        </div>
        <div
          onClick={() => {
            setConfirmationShow(!confirmationShow);
          }}
          className=" flex cursor-pointer justify-center pb-[20px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 54 58"
            fill="none"
          >
            <g filter="url(#filter0_d_101_16)">
              <path
                d="M40.8 30.6667V24.5333H25.4667V18.4H40.8V12.2667L50 21.4667L40.8 30.6667ZM37.7333 27.6V39.8667H22.4V49.0667L4 39.8667V0H37.7333V15.3333H34.6667V3.06667H10.1333L22.4 9.2V36.8H34.6667V27.6H37.7333Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_101_16"
                x={0}
                y={0}
                width={54}
                height="57.0667"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_101_16"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_101_16"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </aside>
      <div className=" font-poppins grid-rows-2 w-full h-full grid grid-cols-3 gap-[35px]">
        <div className="box-border flex flex-col">
          <div className=" relative h-[20%]">
            <input
              className=" w-full text-[16px] font-medium text-[#5F35F5] px-[60px] h-[50px] rounded-[15px] border-2 border-[#5F35F5] shadow-xl  focus:outline-none"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <div className="  absolute top-[13px] left-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
                  stroke="#5F35F5"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className=" absolute top-[12px] right-[17px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={5}
                height={25}
                viewBox="0 0 4 20"
                fill="none"
              >
                <path
                  d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                  fill="#5F35F5"
                />
                <path
                  d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"
                  fill="#5F35F5"
                />
                <path
                  d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z"
                  fill="#5F35F5"
                />
              </svg>
            </div>
          </div>

          <div className="h-[80%] flex flex-col rounded-[15px] box-border border-2 border-[#5F35F5] w-full   shadow-xl p-[20px]">
            <header className=" flex mb-[30px] justify-between">
              <h3 className=" text-[20px] font-semibold text-[#5F35F5]">
                Group List
              </h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={5}
                  height={25}
                  viewBox="0 0 4 20"
                  fill="none"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z"
                    fill="#5F35F5"
                  />
                </svg>
              </div>
            </header>
            <div className=" flex h-[100%] gap-[10px] flex-col  overflow-auto pr-[10px]">
              <GroupList name="Friends Reunion" lastMsg="Hi Guys, Wassup!" />
              <GroupList name="Friends Forever" lastMsg="Good to see you." />
              <GroupList name="Crazy Cousins" lastMsg="What plans today?" />
              <GroupList name="Friends Reunion" lastMsg="Hi Guys, Wassup!" />
              <GroupList name="Friends Forever" lastMsg="Good to see you." />
              <GroupList name="Crazy Cousins" lastMsg="What plans today?" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="h-[100%] flex flex-col rounded-[15px] box-border border-2 border-[#5F35F5] w-full  shadow-xl p-[20px]">
            <header className=" flex mb-[30px] justify-between">
              <h3 className=" text-[20px] font-semibold text-[#5F35F5]">
                Friends
              </h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={5}
                  height={25}
                  viewBox="0 0 4 20"
                  fill="none"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z"
                    fill="#5F35F5"
                  />
                </svg>
              </div>
            </header>
            <div className=" flex h-[100%] gap-[10px] flex-col  overflow-auto pr-[10px]">
              <Friendlist
                name="Raghav"
                lastMsg="Dinner?"
                time="Today, 8:56pm"
              />
              <Friendlist name="Swathi" lastMsg="Sure!" time="Today, 2:31pm" />
              <Friendlist
                name="Kiran"
                lastMsg="Hi......"
                time="Yesterday, 6:22pm"
              />
              <Friendlist
                name="Tejeshwini C"
                lastMsg="I will call him today."
                time="Today, 12:22pm"
              />
              <Friendlist
                name="Raghav"
                lastMsg="Dinner?"
                time="Today, 8:56pm"
              />
              <Friendlist name="Swathi" lastMsg="Sure!" time="Today, 2:31pm" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="h-[100%] flex flex-col rounded-[15px] box-border border-2 border-[#5F35F5] w-full  shadow-xl p-[20px]">
            <header className=" flex mb-[30px] justify-between">
              <h3 className=" text-[20px] font-semibold text-[#5F35F5]">
                User List
              </h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={5}
                  height={25}
                  viewBox="0 0 4 20"
                  fill="none"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z"
                    fill="#5F35F5"
                  />
                </svg>
              </div>
            </header>
            <div className=" flex h-[100%] gap-[10px] flex-col  overflow-auto pr-[10px]">
              <UserList name="Friends Reunion" time="Today, 8:56pm" />
              <UserList name="Friends Forever" time="Today, 2:31pm" />
              <UserList name="Crazy Cousins" time="Yesterday, 6:22pm" />
              <UserList name="Friends Reunion" time="Today, 12:22pm" />
              <UserList name="Friends Forever" time="Today, 8:56pm" />
              <UserList name="Friends Reunion" time="Today, 8:56pm" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="h-[100%] flex flex-col rounded-[15px] box-border border-2 border-[#5F35F5] w-full  shadow-xl p-[20px]">
            <header className=" flex mb-[30px] justify-between">
              <h3 className=" text-[20px] font-semibold text-[#5F35F5]">
                Friend Request
              </h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={5}
                  height={25}
                  viewBox="0 0 4 20"
                  fill="none"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z"
                    fill="#5F35F5"
                  />
                </svg>
              </div>
            </header>
            <div className=" flex h-[100%] gap-[10px] flex-col  overflow-auto pr-[10px]">
              <FriendReq name="Friends Reunion" lastMsg="Hi Guys, Wassup!" />
              <FriendReq name="Friends Forever" lastMsg="Good to see you." />
              <FriendReq name="Crazy Cousins" lastMsg="What plans today?" />
              <FriendReq name="Friends Reunion" lastMsg="Hi Guys, Wassup!" />
              <FriendReq name="Friends Forever" lastMsg="Good to see you." />
              <FriendReq name="Crazy Cousins" lastMsg="What plans today?" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="h-[100%] flex flex-col rounded-[15px] box-border border-2 border-[#5F35F5] w-full shadow-xl p-[20px]">
            <header className=" flex mb-[30px] justify-between">
              <h3 className=" text-[20px] font-semibold text-[#5F35F5]">
                My Groups
              </h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={5}
                  height={25}
                  viewBox="0 0 4 20"
                  fill="none"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z"
                    fill="#5F35F5"
                  />
                </svg>
              </div>
            </header>
            <div className=" flex h-[100%] gap-[10px] flex-col  overflow-auto pr-[10px]">
              <Friendlist
                name="Raghav"
                lastMsg="Dinner?"
                time="Today, 8:56pm"
              />
              <Friendlist name="Swathi" lastMsg="Sure!" time="Today, 2:31pm" />
              <Friendlist
                name="Kiran"
                lastMsg="Hi......"
                time="Yesterday, 6:22pm"
              />
              <Friendlist
                name="Tejeshwini C"
                lastMsg="I will call him today."
                time="Today, 12:22pm"
              />
              <Friendlist
                name="Raghav"
                lastMsg="Dinner?"
                time="Today, 8:56pm"
              />
              <Friendlist name="Swathi" lastMsg="Sure!" time="Today, 2:31pm" />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="h-[100%] flex flex-col rounded-[15px] box-border border-2 border-[#5F35F5] w-full shadow-xl p-[20px]">
            <header className=" flex mb-[30px] justify-between">
              <h3 className=" text-[20px] font-semibold text-[#5F35F5]">
                Blocked Users
              </h3>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={5}
                  height={25}
                  viewBox="0 0 4 20"
                  fill="none"
                >
                  <path
                    d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z"
                    fill="#5F35F5"
                  />
                  <path
                    d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z"
                    fill="#5F35F5"
                  />
                </svg>
              </div>
            </header>
            <div className=" flex h-[100%] gap-[10px] flex-col  overflow-auto pr-[10px]">
              <BlockedUsers name="Friends Reunion" lastMsg="Hi Guys, Wassup!" />
              <BlockedUsers name="Friends Forever" lastMsg="Good to see you." />
              <BlockedUsers name="Crazy Cousins" lastMsg="What plans today?" />
              <BlockedUsers name="Friends Reunion" lastMsg="Hi Guys, Wassup!" />
              <BlockedUsers name="Friends Forever" lastMsg="Good to see you." />
              <BlockedUsers name="Crazy Cousins" lastMsg="What plans today?" />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {confirmationShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" absolute top-0 left-0 h-screen w-full bg-[#5F35F5]/40 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className=" h-[200px] w-[300px] bg-[#5F35F5] p-[30px] shadow-2xl rounded-xl"
            >
              <h3 className=" text-white font-semibold text-[22px] mb-[30px]">
                Confirm Log Out?
              </h3>
              <button
                onClick={() => {
                  setConfirmationShow(false);
                }}
                className=" p-[10px] bg-[white]/30 rounded-md text-white/70 mr-[15px]"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className=" p-[10px] bg-[white]/30 rounded-md text-white/70"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default HomePage;

import React from "react";

const UserList = ({
  img = "https://i.ibb.co/6wnp4GB/image.png",
  name = "xxxxxx",
  time = "",
}) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-[#5F35F5]/25 pb-[20px]">
        <div className=" flex items-center gap-[20px]">
          <img className=" h-[60px] rounded-full" src={img} alt="profile" />
          <div>
            <div className=" font-semibold text-[18px] text-[#5F35F5]">
              {name}
            </div>
            <div className=" text-[#4D4D4D]/75 text-[14px] font-medium">
              {time}
            </div>
          </div>
        </div>
        <div>
          <button className=" text-[20px] font-semibold text-white px-[14px] py-[5px] bg-[#5F35F5] rounded-[7px]">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;

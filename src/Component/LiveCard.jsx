import React from "react";
import { Icon } from "@iconify/react";

function LiveCard() {
  return (
    <div className="sm:w-[100%] rounded-lg  shadow-md">
      <div className="flex flex-col w-full rounded-lg bg-gray-100 h-full ">
        {/* card image start */}
        <div className="relative xl:h-[150px] w-full">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww"
            alt="..."
            className="w-full h-full rounded-tl-lg rounded-tr-lg object-cover shadow-md"
          />
          <div className=" absolute top-2 right-2 text-[10px] text-white flex items-center lg:gap-1 bg-red-500 rounded-md p-1">
            <Icon
              icon="icon-park-outline:preview-open"
              width={15}
              height={16}
              color="white"
            />

            <p className="font-bold">75.39K</p>
          </div>
        </div>
        {/* card image end */}
        {/* card hero section start */}
        <div className="text-black">
          <div className="px-5 py-3">
           
            <div className="flex  justify-between flex-wrap items-end group  ">
              <div className="flex gap-2 items-end ">
                <img
                  src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                  alt="...!"
                  className="w-10 h-10 object-cover rounded-full "
                />
                <div className="text-left">
                  <h1 className="font-bold  text-[12px] flex flex-nowrap ">
                    Leo Dorwat
                  </h1>
                  <p className="text-[10px] ">Hyderabad pakistan sindh</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-gray-300 px-2 mt-2 rounded-md py-1 text-[12px] flex items-center gap-1 ">
                  Preview 
                  <Icon icon="majesticons:open-line" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* card hero section and */}
      </div>
    </div>
  );
}

export default LiveCard;

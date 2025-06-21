import React from "react";
import { menu_list } from "../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="mt-5 flex flex-col gap-6" id="explore-menu">
      <h1 className="text-4xl font-semibold">Explore our menu</h1>
      <p className="md:max-w-[65%] sm:text-[25px] text-[22px]">
        Choose from a flavorful variety of freshly made dishes—crafted to excite
        your taste buds and satisfy every craving, every time.
      </p>
      <div className="flex items-center text-2xl justify-start py-2 gap-5 overflow-auto hide-scrollbar">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((pre) =>
                pre === item.menu_name ? "All" : item.menu_name
              )
            }
            className="flex flex-col items-center min-w-[150px] "
            key={index}
          >
            <img
              className={`cursor-pointer min-w-[9vw] border-none rounded-full ${
                category == item.menu_name ? "activeCat" : ""
              }`}
              src={item.menu_image}
              alt=""
            />
            <p className="text-gray-800 mt-4">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="my-4 h-1 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;

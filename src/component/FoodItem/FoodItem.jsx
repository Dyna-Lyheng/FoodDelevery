import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
const { cartItem, add, remove } = useContext(StoreContext);



  return (
    <div className="rounded-2xl shadow-lg fade-in flex flex-col items-center w-[100%]">
      <div className="rounded-2xl w-[100%] relative">
        <img className="rounded-2xl w-[100%] " src={image} alt={name} />
        {!cartItem[id] ? (
          <img
            className="absolute bottom-3 right-3 cursor-pointer md:w-13 w-25 sm:w-23 lg:w-20 rounded-full"
            onClick={() => add(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className=" absolute bottom-3 right-3 cursor-pointer flex gap-3 bg-white p-2 items-center rounded-full">
            <img

            className=" md:w-10 w-19 sm:w-13 lg:w-15  "
              onClick={() => remove(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="text-2xl">{cartItem[id]}</p>
            <img
            className="md:w-10 w-19 sm:w-13 lg:w-15  "
              onClick={() => add(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-6 md:block flex flex-col items-center lg:text-left text-center lg:space-y-10">
        <div className="flex lg:flex-row flex-col items-center justify-between mb-2 gap-5">
          <p className="md:text-[20px] text-[40px] font-semibold">{name}</p>
          <img className="md:w-23 w-40" src={assets.rating_starts} alt="" />
        </div>
        <p className="md:text-[15px] text-[20px] text-[#676767]">{description}</p>
        <p className="text-orange-500 font-bold sm:text-3xl text-5xl  mt-3 mb-3">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

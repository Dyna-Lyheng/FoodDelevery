import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { cartItem, remove, food_list, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className=" mt-10">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-xl text-gray-500  ">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartItem[item._id] > 0) {
          return (
            <div className="text-lg" key={index}>
              <div
                className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center mt-5 mb-5"
                key={index}
              >
                <img className="w-15" src={item.image} alt="" />
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>$ {item.price * cartItem[item._id]}</p>
                <p className="cursor-pointer " onClick={() => remove(item._id)}>
                  X
                </p>
              </div>
              <hr className=" h-[2px] border-none" />
            </div>
          );
        }
      })}
      <div className="flex xl:justify-between mt-10 xl:flex-row flex-col-reverse justify-center">
        <div className="flex w-full xl:w-[45%]">
          <div className="flex flex-col w-full">
            <h2 className="font-bold text-2xl">Cart Totals</h2>
            <div className="text-gray-600 text-xl space-y-3 mt-4 ">
              <div className="flex justify-between ">
                <p>Subtotal</p>
                <p>$ {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Delevery</p>
                <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>

              <hr />
              <div className="flex justify-between">
                <b>Total</b>
                <p className="font-semibold">
                  $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="py-4 bg-orange-600  rounded text-white font-medium w-full sm:w-[40%] mt-5 text-lg"
            >
              PROCESS TO CHECKOUT
            </button>
          </div>
        </div>
        <div className="w-full xl:w-[45%] ">
          <div className=" mb-10 w-full">
            <p className="text-xl text-gray-600">
              If you have a code, Enter it here
            </p>
            <div className="flex justify-between items-center mt-5 border rounded bg-gray-200">
              <input
                className=" px-3 py-3 w-full text-xl bg-transparent outline-none"
                type="text"
                placeholder="promo code"
              />
              <button className="bg-black text-white text-xl py-3 px-10 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

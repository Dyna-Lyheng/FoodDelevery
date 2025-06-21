import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form action="" className="flex md:flex-row flex-col items-start justify-between mt-10">
      <div className="w-[50%] flex  flex-col gap-5 text-lg">
        <p className="text-3xl font-bold">Delevery Information</p>
        <div className="flex gap-3">
          <input type="text" placeholder="First Name" className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600" />
          <input type="text" placeholder="Last Name" className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600" />
        </div>
        <input
          type="email"
          name=""
          id=""
          placeholder="Email address"
          className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Street"
          className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600"
        />
        <div className="flex gap-3">
          <input type="text" placeholder="City" className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600" />
          <input type="text" placeholder="State" className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600" />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="Zip Code" className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600" />
          <input type="text" placeholder="Country" className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600" />
        </div>
        <input type="text" placeholder="Phone" className="border border-gray-400 w-full px-4 py-2 rounded-md hover:border-orange-600 outline-orange-600" />
      </div>
      <div  className=" w-[30%]">
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-3xl">Cart Totals</h2>
          <div className="text-gray-600 text-xl space-y-3 mt-4 ">
            <div className="flex justify-between ">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Delevery</p>
              <p>$ {getTotalCartAmount()===0?0:2}</p>
            </div>

            <hr />
            <div className="flex justify-between">
              <b>Total</b>
              <p className="font-semibold">$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="py-3 bg-orange-600  rounded text-white font-medium w-full lg:w-[45%]  mt-10 text-lg cursor-pointer"
          >
            PROCESS TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

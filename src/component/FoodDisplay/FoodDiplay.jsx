import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-5">
      <h2 className="text-4xl font-semibold mb-6">Top dishes near you</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 mt-5 gap-6 gap-y-17 ">
        {food_list.map((item, index) => {
          if (category === "All") {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
            
          } else if (category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

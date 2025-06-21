import React, { useState } from "react";
import Header from "../../component/Header";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import FoodDiplay from "../../component/FoodDisplay/FoodDiplay";
import AppDownLoad from "../../component/appDonwload/AppDownLoad";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="w-[100%]">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDiplay category={category} />
      <AppDownLoad/>
    </div>
  );
};

export default Home;

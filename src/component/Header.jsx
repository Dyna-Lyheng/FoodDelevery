import React from "react";
import { useState } from "react";
const Header = () => {
  const [fadeIn, setFadeIn] = useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className="rounded-3xl relative mt-6 mb-10"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1694029652874-240969b2db1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 60px",
        height: "60vh",
        color: "#fff",
      }}
    >
      <div className="absolute bottom-[10%] left-[6vh] flex flex-col items-start gap-[1.5vh] max-w-[45%]">
        <h2
          className={`font-bold lg:text-6xl  text-[40px] sm:leading-none  sm:text-6xl leading-15 md:mb-0 mb-15 text-white transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          Order Your Favorite food here
        </h2>
        <p
          className={`text-white  text-xl hidden lg:block transition-opacity duration-1000 delay-200 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }
          }`}
        >
          Delight in a culinary journey with a diverse menu featuring an
          enticing selection of dishes—from timeless favorites to bold new
          creations—all meticulously prepared
        </p>
        <button
          className={`text-gray-800 text-xl font-bold bg-white px-5 py-3 rounded-2xl transition-opacity duration-1000 delay-500 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;

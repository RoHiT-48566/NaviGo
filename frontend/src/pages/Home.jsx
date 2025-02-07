import React from "react";

const Home = () => {
  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* Image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://i.sstatic.net/fKePl.gif"
          alt=""
        />
      </div>
      <div className="bg-white h-screen absolute top-0 w-full p-5">
        <div className="h-[30%]">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div className="h-[70%] bg-red-500"></div>
      </div>
    </div>
  );
};

export default Home;

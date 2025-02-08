import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
      }
    },
    [panelOpen]
  );

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
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584928617-VSRY2IR8T60HPREGGI9M/Two+Maps+-+Google+Maps+vs+Uber%27s+Version+of+Google+Maps.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={(e) => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={(e) => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-red-500 h-0"></div>
      </div>
    </div>
  );
};

export default Home;

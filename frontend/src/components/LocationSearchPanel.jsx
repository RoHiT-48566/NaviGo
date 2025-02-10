import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);

  // sample array for location
  const locations = [
    "24N, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    "22B, Near Malhotra's cafe, Sheriyans Coding School, Bhopal",
    "208B, Near Singhaniya's cafe, Sheriyans Coding School, Bhopal",
    "18A, Near Sharma's cafe, Sheriyans Coding School, Bhopal",
  ];

  return (
    <div>
      {/* Sample data rendering */}
      {locations.map(function (ele, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{ele}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;

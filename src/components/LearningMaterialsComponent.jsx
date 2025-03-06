import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  // create function to fill the star

  const [fill, setFill] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("A-Z");

  const handleStarClick = (id) => {
    setFill((prevFill) =>
      prevFill.includes(id)
        ? prevFill.filter((item) => item !== id)
        : [...prevFill, id]
    );
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const sortedLearningMaterials = [...learningMaterials].sort((a, b) => {
    if (sortCriteria === "A-Z") {
      return a.title.localeCompare(b.title);
    } else if (sortCriteria === "Z-A") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent onSort={handleSortChange} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3 p-2">
        {learningMaterials.map((learns) => (
          <div
            className="bg-light-gray px-4 py-2 flex gap-5 items-center"
            key={learns.id}
          >
            <img
              src={learns.image}
              alt="HTML5"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{learns.title}</p>
                {/* star */}
                <Star
                  size={20}
                  className="cursor:pointer"
                  fill={fill.includes(learns.id) ? "yellow" : "none"}
                  color={fill.includes(learns.id) ? "yellow" : "black"}
                  onClick={() => handleStarClick(learns.id)}
                />
              </div>
              <p className="text-gray-400 text-sm">{learns.postedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

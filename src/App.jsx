import { useState } from "react";
import "./App.css";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import CardComponent from "./components/CardComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";

export default function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchInput) => {
    setSearchTerm(searchInput);
  };

  return (
    <>
      <div className="bg-gray-300 flex ">
        <SidebarComponent />
        <div className="flex w-full justify-between">
          <div className="w-full  p-2">
            <div className="items-center">
              <TopNavbarComponent onSearch={handleSearch} />
            </div>

            <div className="flex">
              <div className="flex flex-2 p-2">
                <div className="">
                  <DashboardComponent />
                  <div className="mt-12 flex justify-between">
                    <AssignmentsComponent />
                    <AddNewProjectComponent setCards={setCards} />
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-6 h-[55vh]  border-2 overflow-scroll">
                    {cards
                      .filter((card) =>
                        card.projectName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((card, i) => (
                        <CardComponent key={i} card={card} />
                      ))}
                  </div>
                </div>

                <div className="w-[200px] flex-1 pl-[20px] mt-2">
                  {/* <div className="flex flex-1 border-2">
                    <FilterComponent />
                  </div> */}
                  <div>
                    <LearningMaterialsComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

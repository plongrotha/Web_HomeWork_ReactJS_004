import { useState } from "react";
import "./App.css";
import AssignmentsComponent from "./components/AssignmentsComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import CardComponent from "./components/CardComponent";
import { Car } from "lucide-react";
export default function App() {
  const [cards, setCards] = useState([]);
  return (
    <>
      <div className="bg-gray-300 flex ">
        <SidebarComponent />
        <div className="flex w-full justify-between">
          <div className="w-full  p-2">
            <div className="items-center">
              <TopNavbarComponent />
            </div>

            <div className="flex">
              <div className="flex flex-2 p-2">
                <div className="">
                  <DashboardComponent />
                  <div className="mt-2 flex justify-between">
                    <AssignmentsComponent />
                    <AddNewProjectComponent setCards={setCards} />
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-6">
                    {cards.map((card, i) => (
                      <CardComponent key={i} card={card} />
                    ))}
                  </div>
                </div>

                <div className="w-full flex-1 pl-[20px] mt-2">
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

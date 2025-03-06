import "./App.css";
import { dashboard } from "./data/dashboard";
import AssignmentsComponent from "./components/AssignmentsComponent";
import DashboardComponent from "./components/DashboardComponent";
import FilterComponent from "./components/FilterComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";

export default function App() {
  // const EachDashBoard = dashboard.map((item) => {
  //   return <DashboardComponent />;
  // });

  return (
    <>
      <div className="bg-gray-300 flex border-2">
        <SidebarComponent />
        <div className="flex w-full justify-between">
          <div className="w-full border-2 p-2">
            <div className="items-center">
              <TopNavbarComponent />
            </div>

            <div className="flex">
              <div className="flex flex-2 p-2">
                <div className="">
                  <DashboardComponent />
                  <div className="mt-2">
                    <AssignmentsComponent />
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

import React from "react";

import { dashboard } from "../data/dashboard";
import { Car } from "lucide-react";
export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex gap-5">
        {dashboard.map((card) => (
          <div
            className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto"
            key={card.id}
          >
            <div className={`p-3 rounded-xl ${card.color}`}>
              <img src={card.icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-semibold">{card.totalTasks}</p>
              <p className="text-gray-400">{card.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

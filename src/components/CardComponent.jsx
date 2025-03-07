import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ card }) {
  const getProgressColor = (process) => {
    return process < 30
      ? "bg-red-500"
      : process < 70
      ? "bg-yellow-500"
      : "bg-green-500";
  };

  const getDueDateColor = (dueDate) => {
    const daysLeft = Math.ceil(
      (new Date(dueDate) - new Date()) / (1000 * 60 * 60 * 24)
    );
    return daysLeft < 3
      ? "text-red-500"
      : daysLeft < 7
      ? "text-yellow-500"
      : "color-custom-sky-blue";
  };

  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`font-medium ${getDueDateColor(card.dueDate)}`}>
            {card.dueDate}
          </p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {card.projectName}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {card.describtion}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>{card.process}%</p>
          {/* <p>100%</p> */}
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className={`h-2.5 rounded-full ${getProgressColor(card.process)}`}
            style={{ width: `${card.process}%` }}
          ></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            {Math.max(
              0,
              Math.ceil(
                (new Date(card.dueDate) - new Date()) / (1000 * 60 * 60 * 24)
              )
            )}{" "}
            days left
          </p>
        </div>
      </div>
    </div>
  );
}

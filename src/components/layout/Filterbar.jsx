import React from "react";
import {
  AdjustmentsHorizontalIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";

const Filterbar = () => {
  return (
    <div className="flex justify-between mb-5 px-3">
      <Bars3BottomLeftIcon className="w-6 h-6" />
      <AdjustmentsHorizontalIcon className="w-6 h-6" />
    </div>
  );
};

export default Filterbar;

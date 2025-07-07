import UsersChartComp from "@/components/UsersChartComp";
import React from "react";

function UsersChartTemp() {
  return (
    <div className="my-10 bg-slate-800 rounded-xl p-4 flex flex-col gap-4 items-center justify-center ">
      <p className="text-blue-500 text-3xl">Users Growth</p>
      <div className="w-[850px] h-[400px]">
        <UsersChartComp />
      </div>
    </div>
  );
}

export default UsersChartTemp;

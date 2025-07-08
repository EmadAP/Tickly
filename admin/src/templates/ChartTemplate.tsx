import React, { ReactNode } from "react";

interface ChartTemplateProps {
  title: string;
  children: ReactNode;
}

function ChartTemplate({title, children} :ChartTemplateProps) {
  return (
    <div className=" group bg-slate-800 rounded-xl p-4 flex flex-col gap-4 items-center justify-center w-full ">
      <p className="text-blue-500 text-3xl group-hover:font-bold">
        {title}
      </p>
      <div className="w-full h-[300px]">
        {children}
      </div>
    </div>
  );
}

export default ChartTemplate;

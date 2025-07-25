import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function SectionTemp({ eventId }: { eventId: string }) {
  return (
    <div className="bg-slate-800 rounded-xl flex flex-col px-2 py-6">
      <div className="px-4 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 justify-center">
          <h2 className="font-semibold text-3xl">Sections</h2>
          <ChevronDown size={40} />
        </div>
        <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer text-lg">
          Add Section
        </Button>
      </div>
      <div></div>
    </div>
  );
}

export default SectionTemp;

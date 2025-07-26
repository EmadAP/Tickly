import React from "react";
import { ChevronDown } from "lucide-react";
import { sectionColumns } from "@/components/tableColumns/sectionColumns";
import { useGetSectionsByEventId } from "@/lib/api/main/queries";
import { TableData } from "@/components/TableData";
import Link from "next/link";

function SectionComp({ eventId }: { eventId: string }) {
  const {
    data: sections,
    isLoading,
    isError,
    error,
  } = useGetSectionsByEventId(eventId);

  if (isLoading || !sections) return <div>loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-slate-800 rounded-xl flex flex-col px-2 py-6">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 justify-center">
          <h2 className="font-semibold text-3xl">Sections</h2>
          <ChevronDown size={40} />
        </div>
        <Link
          href={`/createSection?eventId=${eventId}`}
          className="bg-blue-500 hover:bg-blue-400 cursor-pointer text-lg px-2 py-2 rounded-lg"
        >
          Add Section
        </Link>
      </div>
      <div className="py-10 w-full">
        <TableData
          columns={sectionColumns}
          data={sections ?? []}
          filterKey="name"
          filterPlaceholder="Filter by name..."
        />
      </div>
    </div>
  );
}

export default SectionComp;

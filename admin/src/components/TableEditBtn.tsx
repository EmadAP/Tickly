"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

interface TableEditBtnProps {
  eventId: string;
}

const TableEditBtn = ({ eventId }: TableEditBtnProps) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/updateEvent/${eventId}`);
  };

  return (
    <Button
      onClick={handleEdit}
      className="bg-green-500 hover:bg-green-600 cursor-pointer"
    >
      <Pencil />
    </Button>
  );
};

export default TableEditBtn;

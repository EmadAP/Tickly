"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

interface TableEditBtnProps {
  ticketId: string;
}

const TableEditBtn = ({ ticketId }: TableEditBtnProps) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/updateTicket/${ticketId}`);
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

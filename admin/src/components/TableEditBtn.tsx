"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

interface TableEditBtnProps {
  id: string;
  type: "event" | "section";
}

const TableEditBtn = ({ id, type }: TableEditBtnProps) => {
  const router = useRouter();

  const handleEdit = () => {
    if (type === "event") {
      router.push(`/updateEvent/${id}`);
    } else if (type === "section") {
      router.push(`/updateSection/${id}`);
    }
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

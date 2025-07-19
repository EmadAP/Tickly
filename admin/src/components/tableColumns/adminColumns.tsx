"use client";

import { Admin } from "@/lib/type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { DeleteAdmin } from "@/lib/api/main/mutations";

export const adminColumns: ColumnDef<Admin>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "delete",
    cell: ({ row }) => {
      const deleteAdmin = DeleteAdmin();

      const handleDelete = (id: string) => {
        deleteAdmin.mutate(id);
      };

      const data = row.original;

      return (
        <div>
          <Button
            onClick={() => handleDelete(data._id)}
            className="bg-red-500 hover:bg-red-600 cursor-pointer"
          >
            <Trash2 />
          </Button>
        </div>
      );
    },
  },
  {
    id: "more",
    cell: ({ row }) => {
      const admin = row.original;

      return <Button>More</Button>;
    },
  },
];

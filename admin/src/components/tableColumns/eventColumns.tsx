"use client";

import { Event } from "@/lib/type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Trash2 } from "lucide-react";
import { DeleteEvent } from "@/lib/api/main/mutations";
import { Button } from "../ui/button";
import TableEditBtn from "../TableEditBtn";

export const eventColumns: ColumnDef<Event>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          Category
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "eventDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          Date
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    id: "delete",
    cell: ({ row }) => {
      const deleteEvent = DeleteEvent();

      const handleDelete = (id: string) => {
        deleteEvent.mutate(id);
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
    id: "edit",
    cell: ({ row }) => {
      const event = row.original;

      return (
        <div>
          <TableEditBtn eventId={event._id} />
        </div>
      );
    },
  },
];

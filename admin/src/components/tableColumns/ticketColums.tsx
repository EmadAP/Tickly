"use client";

import { Ticket } from "@/lib/type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Trash2 } from "lucide-react";
import { DeleteEvent } from "@/lib/api/main/mutations";
import { Button } from "../ui/button";

export const ticketColumns: ColumnDef<Ticket>[] = [
  {
    accessorFn: (row) =>
      typeof row.user === "object" && row.user !== null ? row.user.email : "",
    
    id: "userEmail",
    header: "Email",
  },
  {
    accessorFn: (row) =>
      typeof row.event === "object" && row.event !== null
        ? row.event.title
        : "",

    id: "eventTitle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          title
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorFn: (row) =>
      typeof row.event === "object" && row.event !== null ? row.event.country : "",
    
    id: "eventCountry",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          Country
          <ArrowUpDown />
        </Button>
      );
    },
  },

  {
    accessorFn: (row) =>
      typeof row.event === "object" && row.event !== null ? row.event.category : "",
    
    id: "eventCategory",
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
    accessorFn: (row) =>
      typeof row.section === "object" && row.section !== null ? row.section.name : "",
    
    id: "sectionCategory",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          Section
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "pricePaid",
    header: () => <div className="">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("pricePaid"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          Status
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
];

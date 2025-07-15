"use client";

import { TicketTable } from "@/lib/type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";

export const columns: ColumnDef<TicketTable>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white"
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
          className="hover:bg-blue-500 hover:text-white"
        >
          Date
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "onSell",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white"
        >
          OnSell
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },

  {
    id: "delete",
    cell: ({ row }) => {
      const tickets = row.original;

      return (
        <div>
          <Button className="bg-red-500 hover:bg-red-600">
            <Trash2 />
          </Button>
        </div>
      );
    },
  },
  {
    id: "edit",
    cell: ({ row }) => {
      const tickets = row.original;

      return (
        <div>
          <Button className="bg-green-500 hover:bg-green-600">
            <Pencil />
          </Button>
        </div>
      );
    },
  },
];

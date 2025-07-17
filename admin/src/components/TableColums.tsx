"use client";

import { Ticket, TicketTable } from "@/lib/type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteTicket } from "@/lib/api/main/mutations";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

export const columns: ColumnDef<Ticket>[] = [
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
      const deleteTicket = useDeleteTicket();

      const handleDelete = (id: string) => {
        deleteTicket.mutate(id, {
          onSuccess: () => {
            window.alert("delete successfull");
          },
        });
      };

      const data = row.original;

      return (
        <div>
          <Button
            onClick={() => handleDelete(data._id)}
            className="bg-red-500 hover:bg-red-600"
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

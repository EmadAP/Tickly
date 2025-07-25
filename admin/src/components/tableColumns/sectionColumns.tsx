"use client";

import { Section } from "@/lib/type";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Trash2 } from "lucide-react";
import { DeleteSection } from "@/lib/api/main/mutations";
import { Button } from "../ui/button";
import TableEditBtn from "../TableEditBtn";

export const sectionColumns: ColumnDef<Section>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sold",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          Sold
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
          className="hover:bg-blue-500 hover:text-white cursor-pointer"
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
      const data = row.original;
      const deleteSection = DeleteSection(data.event);

      const handleDelete = (id: string) => {
        deleteSection.mutate(id);
      };

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
      const data = row.original;

      return (
        <div>
          <TableEditBtn id={data._id} type="section" />
        </div>
      );
    },
  },
];

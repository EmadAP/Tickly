import { Ticket } from "@/lib/types/types";
import { useQuery } from "@tanstack/react-query";
import { GetAllTicketsFc, GetTicketByIdFc } from "../api";

export const GetAllTickets = () => {
  return useQuery<Ticket[], Error>({
    queryKey: ["Tickets"],
    queryFn: GetAllTicketsFc,
  });
};

export const GetTicketById = (id: string) => {
  return useQuery<Ticket, Error>({
    queryKey: ["TicketById", id],
    queryFn: () => GetTicketByIdFc(id),
  });
};

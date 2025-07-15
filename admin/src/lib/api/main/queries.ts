import { Ticket } from "@/lib/type";
import { useQuery } from "@tanstack/react-query";
import { GetAllTicketsFc } from "../api";

export const GetAllTickets = () => {
  return useQuery<Ticket[], Error>({
    queryKey: ["Tickets"],
    queryFn: GetAllTicketsFc,
  });
};

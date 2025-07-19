import { Admin, Ticket } from "@/lib/type";
import { useQuery } from "@tanstack/react-query";
import { GetAllAdminFc, GetAllTicketsFc, GetTicketByIdFc } from "../api";

export const useGetAllTickets = () => {
  return useQuery<Ticket[], Error>({
    queryKey: ["Tickets"],
    queryFn: GetAllTicketsFc,
  });
};

export const GetTicketById = (id?: string) => {
  return useQuery<Ticket, Error>({
    queryKey: ["TicketById", id],
    queryFn: () => GetTicketByIdFc(id!),
    enabled: !!id,
  });
};

export const GetAllAdmins = () => {
  return useQuery<Admin[], Error>({
    queryKey: ["Admins"],
    queryFn: GetAllAdminFc,
  });
};

import { Admin, Event, Ticket } from "@/lib/type";
import { useQuery } from "@tanstack/react-query";
import {
  GetAllAdminFc,
  GetAllEventsFc,
  GetAllTicketsFc,
  GetEventByIdFc,
  GetTicketByIdFc,
} from "../api";

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

// Get All Events
export const GetAllEvents = () => {
  return useQuery<Event[], Error>({
    queryKey: ["Events"],
    queryFn: GetAllEventsFc,
  });
};

// Get Event By Id
export const GetEventById = (id?: string) => {
  return useQuery<Event, Error>({
    queryKey: ["EventById", id],
    queryFn: () => GetEventByIdFc(id!),
    enabled: !!id,
  });
};

export const GetAllAdmins = () => {
  return useQuery<Admin[], Error>({
    queryKey: ["Admins"],
    queryFn: GetAllAdminFc,
  });
};

import { Admin, Event, Section, Ticket } from "@/lib/type";
import { useQuery } from "@tanstack/react-query";
import {
  GetAllAdminFc,
  GetAllEventsFc,
  GetAllticketsFc,
  GetEventByIdFc,
  GetSectionByIdFc,
  GetSectionsByEventIdFc,
} from "../api";

// Get All Events
export const useGetAllEvents = () => {
  return useQuery<Event[], Error>({
    queryKey: ["Events"],
    queryFn: GetAllEventsFc,
  });
};

// Get Event By Id
export const useGetEventById = (id?: string) => {
  return useQuery<Event, Error>({
    queryKey: ["EventById", id],
    queryFn: () => GetEventByIdFc(id!),
    enabled: !!id,
  });
};

// Get Sections by Event ID
export const useGetSectionsByEventId = (eventId?: string) => {
  return useQuery<Section[], Error>({
    queryKey: ["SectionsByEvent", eventId],
    queryFn: () => GetSectionsByEventIdFc(eventId!),
    enabled: !!eventId,
  });
};

// Get Sections by ID
export const useGetSectionById = (id?: string) => {
  return useQuery<Section, Error>({
    queryKey: ["SectionById", id],
    queryFn: () => GetSectionByIdFc(id!),
    enabled: !!id,
  });
};

// Get All Admins
export const GetAllAdmins = () => {
  return useQuery<Admin[], Error>({
    queryKey: ["Admins"],
    queryFn: GetAllAdminFc,
  });
};

// Get Ticket
export const useGetAlltickets = () => {
  return useQuery<Ticket[], Error>({
    queryKey: ["Tickets"],
    queryFn: GetAllticketsFc
  })
}
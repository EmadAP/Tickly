"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useParams, useRouter } from "next/navigation";
import { UpdateTicket } from "@/lib/api/main/mutations";
import TicketTemp from "@/templates/TicketTemp";
import { GetTicketById } from "@/lib/api/main/queries";
import { useQueryClient } from "@tanstack/react-query";

function Page() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const ticketId = params.id as string;

  const { data: ticket, isLoading } = GetTicketById(ticketId);

  const { mutate: updateTicket } = UpdateTicket();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-slate-900 py-10 text-white min-h-screen">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="border-b-2 border-green-500 w-full text-center pb-10">
            <h1 className="text-4xl font-bold">Update Ticket</h1>
          </div>
          <div className="w-full pt-10">
            <TicketTemp
              mode="edit"
              initialData={ticket}
              onSubmit={(formData) =>
                updateTicket(
                  { id: ticketId, formData },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries({
                        queryKey: ["TicketById", ticketId],
                      });
                      queryClient.invalidateQueries({
                        queryKey: ["Tickets"],
                      });
                      router.push("/ticketTable");
                    },
                  }
                )
              }
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;

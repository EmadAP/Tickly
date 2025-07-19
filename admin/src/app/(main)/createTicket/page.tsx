"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CreateTicket } from "@/lib/api/main/mutations";
import TicketTemp from "@/templates/TicketTemp";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const { mutate: createTicket } = CreateTicket();

  return (
    <div className="bg-slate-900 py-10 text-white min-h-screen">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="border-b-2 border-blue-500 w-full text-center pb-10">
            <h1 className="text-4xl font-bold">Create Ticket</h1>
          </div>
          <div className="w-full pt-10">
            <TicketTemp
              mode="create"
              onSubmit={(formData) =>
                createTicket(formData, {
                  onSuccess: () => router.push("/ticketTable"),
                })
              }
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;

"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useParams, useRouter } from "next/navigation";
import { UpdateEvent } from "@/lib/api/main/mutations";
import { useGetEventById } from "@/lib/api/main/queries";
import { useQueryClient } from "@tanstack/react-query";
import EventTemp from "@/templates/EventTemp";

function Page() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const eventId = params.id as string;

  const { data: event, isLoading } = useGetEventById(eventId);

  const { mutate: updateEvent } = UpdateEvent();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-slate-900 py-10 text-white min-h-screen">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="border-b-2 border-blue-500 w-full text-center pb-10">
            <h1 className="text-4xl font-bold">Update Event</h1>
          </div>
          <div className="w-full pt-10">
            <EventTemp
              mode="edit"
              initialData={event}
              onSubmit={(formData) =>
                updateEvent(
                  { id: eventId, formData },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries({
                        queryKey: ["EventById", eventId],
                      });
                      queryClient.invalidateQueries({
                        queryKey: ["Events"],
                      });
                      router.push("/eventTable");
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

"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useParams, useRouter } from "next/navigation";
import { UpdateSection } from "@/lib/api/main/mutations";
import { useGetSectionById } from "@/lib/api/main/queries";
import { useQueryClient } from "@tanstack/react-query";
import SectionTemp from "@/templates/SectionTemp";

function isPopulatedEvent(event: unknown): event is { _id: string } {
  return typeof event === "object" && event !== null && "_id" in event;
}

function Page() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  const sectionId = params.id as string;

  const { data: section, isLoading } = useGetSectionById(sectionId);

  const { mutate: updateSection } = UpdateSection();

  if (isLoading || !section) return <div>Loading...</div>;

  const event = section.event;

  const eventId = isPopulatedEvent(event) ? event._id : event;

  return (
    <div className="bg-slate-900 py-10 text-white min-h-screen">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="border-b-2 border-blue-500 w-full text-center pb-10">
            <h1 className="text-4xl font-bold">Update Event</h1>
          </div>
          <div className="w-full pt-10">
            <SectionTemp
              mode="edit"
              initialData={section}
              onSubmit={(data) =>
                updateSection(
                  { id: sectionId, data },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries({
                        queryKey: ["SectionById", sectionId],
                      });
                      queryClient.invalidateQueries({
                        queryKey: ["SectionsByEvent", eventId],
                      });
                      router.push(`/updateEvent/${eventId}`);
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

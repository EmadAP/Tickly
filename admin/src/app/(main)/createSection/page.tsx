"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CreateSection } from "@/lib/api/main/mutations";
import SectionTemp from "@/templates/SectionTemp";
import { useRouter, useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventId = searchParams.get("eventId");

  if (!eventId) {
    return <p className="text-red-500 text-center mt-10">Missing event ID</p>;
  }

  const { mutate: createSection } = CreateSection(eventId ?? "");

  return (
    <div className="bg-slate-900 py-10 text-white min-h-screen">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="border-b-2 border-blue-500 w-full text-center pb-10">
            <h1 className="text-4xl font-bold">Create Section</h1>
          </div>
          <div className="w-full pt-10">
            <SectionTemp
              mode="create"
              onSubmit={(data) =>
                createSection(data, {
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

"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CreateEvent } from "@/lib/api/main/mutations";
import EventTemp from "@/templates/EventTemp";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();
  const { mutate: createEvent } = CreateEvent();

  return (
    <div className="bg-slate-900 py-10 text-white min-h-screen">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="border-b-2 border-blue-500 w-full text-center pb-10">
            <h1 className="text-4xl font-bold">Create Event</h1>
          </div>
          <div className="w-full pt-10">
            <EventTemp
              mode="create"
              onSubmit={(formData: FormData) =>
                createEvent(formData, {
                  onSuccess: () => router.push("/eventTable"),
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

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-slate-900 h-screen w-full text-white">
      <MaxWidthWrapper className="flex flex-col gap-10 items-center">
        <div className="py-10 border-b-2 border-b-blue-500 w-full text-center">
          <h1 className="text-5xl font-bold">Log in</h1>
        </div>
        <div className="flex flex-row gap-10 items-center w-full overflow-hidden h-full  ">
          <div className="lg:block hidden w-1/2 h-full overflow-hidden">
            <Image
              src="/login-1.jpg"
              width={1000}
              height={1000}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/2 w-full h-full flex items-center justify-center">
            <form className="bg-slate-800 flex flex-col justify-around w-full max-w-md p-6 gap-6 rounded-xl shadow-lg">
              <div className="flex flex-col gap-4">
                <label className="text-xl flex flex-row items-center">
                  <span>Username </span>
                  <ChevronDown />
                </label>
                <Input
                  type="text"
                  name="username"
                  className="bg-slate-900 border-0"
                />
                <label className="text-xl flex flex-row items-center">
                  <span>Password </span>
                  <ChevronDown />
                </label>
                <Input
                  type="text"
                  name="password"
                  className="bg-slate-900 border-0"
                />
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-lg font-semibold">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;

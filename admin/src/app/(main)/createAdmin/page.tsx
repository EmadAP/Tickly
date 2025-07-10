"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignupAdmin } from "@/lib/api/auth/mutations";
import { SignupProps } from "@/lib/type";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

function Page() {
  const { mutate: signup } = SignupAdmin();
  const [preview, setPreview] = useState<string | null>(null);
  const [signupData, setSignupData] = useState<SignupProps>({
    username: "",
    email: "",
    password: "",
    image: null,
  });

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(signupData, {
      onSuccess: () => {
        window.alert("login successful");
        console.log("login successful");
      },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSignupData({ ...signupData, image: file });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-slate-900 py-10 text-white min-h-screen">
      <MaxWidthWrapper>
        <form
          onSubmit={handleSignupSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="border-b-2 border-blue-500 w-full text-center pb-10">
            <h1 className="text-4xl font-bold">Admin Signup</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full pt-10 gap-8">
            {/* Avatar + Upload */}
            <div className="flex flex-col gap-6 items-center">
              <Avatar className="w-52 h-52 rounded-full border-4 border-blue-500 shadow-lg">
                <AvatarImage
                  className="rounded-full object-cover"
                  src={preview || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>

              <label className="relative cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition-colors">
                Upload Picture
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            </div>

            {/* Form Inputs */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-lg flex items-center gap-1">
                  <span>Username</span>
                  <ChevronDown size={16} />
                </label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  onChange={(e) =>
                    setSignupData({ ...signupData, username: e.target.value })
                  }
                  className="bg-slate-800 border border-slate-700"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg flex items-center gap-1">
                  <span>Password</span>
                  <ChevronDown size={16} />
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  className="bg-slate-800 border border-slate-700"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg flex items-center gap-1">
                  <span>Email</span>
                  <ChevronDown size={16} />
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  className="bg-slate-800 border border-slate-700 "
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end w-full pt-10">
            <Button className="bg-green-600 hover:bg-green-500 text-lg">
              Submit
            </Button>
          </div>
        </form>
      </MaxWidthWrapper>
    </div>
  );
}

export default Page;

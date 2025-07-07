import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Tickets } from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky z-20 h-20 inset-x-0 top-0 px-4 w-full bg-slate-900 text-white border-b-2 border-blue-500">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-4xl font-semibold">Tickly</div>
            <Tickets size={32} className="text-blue-500" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Tickets } from "lucide-react";
import Link from "next/link";
import {
  FaApple,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaGooglePlay,
  FaSignsPost,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="dark:bg-slate-800 bg-zinc-200 dark:text-white text-black py-10">
      <MaxWidthWrapper className="flex flex-col gap-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-5  pb-7 border-b border-b-orange-500">
          <div className="flex flex-col gap-3 space-y-2 border-r">
            <div className="flex flex-row items-center gap-2">
              <p className="text-xl font-semibold">Tickly</p>
              <Tickets size={23} className="text-orange-500" />
            </div>
            <p className="text-sm">
              <span className="text-orange-500 text-lg">safest</span> way to buy
              Tickets
            </p>
            <div className="flex flex-row gap-5">
              <FaApple
                size={25}
                className="hover:text-orange-500 cursor-pointer"
              />
              <FaGooglePlay
                size={25}
                className="hover:text-orange-500 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 space-y-2 border-r-0 md:border-r">
            <Link
              href="/"
              className="w-fit hover:underline decoration-orange-500"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="w-fit hover:underline decoration-orange-500"
            >
              Browse Events
            </Link>
            <Link
              href="#"
              className="w-fit hover:underline decoration-orange-500"
            >
              Contact Us / Help
            </Link>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 space-y-2 border-t md:border-t-0 md:pt-0 pt-5">
            <div className="flex flex-row gap-5">
              <IoLogoInstagram
                size={25}
                className="hover:text-orange-500 cursor-pointer"
              />
              <FaXTwitter
                size={25}
                className="hover:text-orange-500 cursor-pointer"
              />
              <FaTiktok
                size={25}
                className="hover:text-orange-500 cursor-pointer"
              />
              <FaFacebookF
                size={25}
                className="hover:text-orange-500 cursor-pointer"
              />
            </div>
            <div className="flex flex-row items-center gap-2  w-fit cursor-pointer">
              <FaSignsPost size={25} className="text-orange-500" />
              <Link href="#" className="w-fit hover:underline decoration-orange-500">
                Subscribe for updates
              </Link>
            </div>
            <div className="flex flex-row gap-5">
              <FaCcVisa size={30} className="text-orange-500" />
              <FaCcMastercard size={30} className="text-orange-500" />
              <FaCcPaypal size={30} className="text-orange-500" />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-lg flex flex-row items-center gap-5">
          <p className="border-r pr-5">
            &copy; 2025 <span className="text-orange-500">Tickly</span>. All
            rights reserved
          </p>
          <Link
            href="#"
            className="w-fit border-r pr-5 hover:underline decoration-orange-500"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="w-fit hover:underline decoration-orange-500"
          >
            Privacy
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;

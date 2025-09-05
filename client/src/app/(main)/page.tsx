import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainBanner from "@/templates/MainBanner";
import MainBottom from "@/templates/MainBottom";
import MainLeft from "@/templates/MainLeft";
import MainRight from "@/templates/MainRight";
import MainTestimonial from "@/templates/MainTestimonial";

export default function Home() {
  return (
    <div className="dark:bg-slate-900 bg-white dark:text-white text-black">
      <MainBanner />
      <MaxWidthWrapper className="h-auto lg:px-3 xl:px-6 2xl:px-9 max-w-screen-4xl py-10">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-3 xl:gap-6 2xl:gap-9 pb-10">
            {/* left side */}
            <MainLeft />
            {/* right side */}
            <MainRight />
          </div>
          <MainBottom />
        </div>
      </MaxWidthWrapper>
      <div className="bg-slate-900 py-20">
        <MainTestimonial />
      </div>
    </div>
  );
}

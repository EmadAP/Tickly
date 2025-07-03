import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainBanner from "@/templates/MainBanner";

export default function Home() {
  return (
    <div className="bg-slate-800 text-white">
      <MainBanner />
      <MaxWidthWrapper>
        <div></div>
      </MaxWidthWrapper>
    </div>
  );
}

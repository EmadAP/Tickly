import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MainBanner from "@/templates/MainBanner";

export default function Home() {
  return (
    <div className="bg-slate-700 text-white">
      <MaxWidthWrapper >
        <div>
          <MainBanner />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

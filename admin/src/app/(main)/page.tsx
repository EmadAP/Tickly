import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UsersChartTemp from "@/templates/UsersChartTemp";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <MaxWidthWrapper>
        <div className="min-h-screen grid gap-4 grid-cols-1 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <UsersChartTemp />
          </div>
          <div className="lg:col-span-2">second</div>
          <div className="lg:col-span-4">third</div>
          <div className="lg:col-span-4">forth</div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

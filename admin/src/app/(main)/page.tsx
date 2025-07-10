"use client";
import BarChartComp from "@/components/BarChartComp";
import LineChartComp from "@/components/LineChartComp";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  CategorySalesData,
  MonthlyRevenueData,
  TopEventsData,
  UsersData,
} from "@/lib/mock/mock";
import ChartTemplate from "@/templates/ChartTemplate";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { useAdmin } from "@/lib/context/AdminContext";

export default function Home() {
  // const { admin } = useAdmin();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!admin) {
  //     router.push("/login");
  //   }
  // }, [admin, router]);
  return (
    <div className="bg-slate-900 text-white py-10">
      <MaxWidthWrapper>
        <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-1  ">
            <div className="flex flex-col md:flex-row lg:flex-col w-full gap-10">
              <ChartTemplate title="Sales by Category">
                <BarChartComp
                  data={CategorySalesData}
                  dataKey="tickets"
                  xKey="category"
                />
              </ChartTemplate>
              <ChartTemplate title="Top Events by Sales">
                <BarChartComp data={TopEventsData} dataKey="ticketsSold" />
              </ChartTemplate>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col gap-10">
              <ChartTemplate title="Monthly Revenue">
                <LineChartComp data={MonthlyRevenueData} dataKey="revenue" />
              </ChartTemplate>
              <ChartTemplate title="User Growth">
                <LineChartComp data={UsersData} dataKey="pv" />
              </ChartTemplate>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

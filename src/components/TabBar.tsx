"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();
  const tabs = [
    {
      name: "上报",
      path: "/",
    },
    {
      name: "统计",
      path: "/statistic",
    },
  ];
  return (
    <div className="w-full text-center text-lg h-12 leading-[48px] overflow-hidden flex bg-[#F9F9F9]">
      {tabs.map((tab) => {
        return (
          <div
            key={tab.name}
            className={`flex-1 ${pathname == tab.path ? "font-semibold" : ""}`}
          >
            <Link href={tab.path}>{tab.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

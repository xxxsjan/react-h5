"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();
  const tabs = [
    {
      name: "统计页面",
      path: "/statistic",
    },
    {
      name: "上报页面",
      path: "/",
    },
  ];
  return (
    <div className="w-full text-center text-lg h-12 leading-[48px] overflow-hidden flex">
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

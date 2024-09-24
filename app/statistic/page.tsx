"use client";

import React from "react";
import { Card, Tabs } from "antd";
import Link from "next/link";
import useTitle from "@/hooks/useTitle";
// export const getServerSideProps = async (context) => {
//   const { req } = context;
//   // const user = await getUserFromSession(req); // 获取用户身份信息
//   const user = {isAdmin:false}
//   if (!user.isAdmin) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user },
//   };
// };

export default function Statistic() {
  useTitle("统计");
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="h-screen p-2 flex flex-col items-center">
      <div className="w-full">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: "今日",
            },
            {
              key: "2",
              label: "昨日",
            },
          ]}
          onChange={onChange}
        />

        <div className="min-h-[calc(100vh-100px)]">
          <Card className="w-full">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>

      
    </div>
  );
}

"use client";

import React from "react";
import { Card, Tabs } from "antd";
import Link from "next/link";
import useTitle from "~/hooks/useTitle";
import Layout from "~/components/Layout";

export default function Statistic() {
  useTitle("统计");
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Layout>
      <div className="h-screen px-8 py-6 flex flex-col items-center">
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
              <p>2024年9月25日11:01:22</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti commodi, eum nobis pariatur, fugit aliquid veritatis est quibusdam dolorem deserunt praesentium error sed ipsam quisquam. Maxime adipisci est et.</p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

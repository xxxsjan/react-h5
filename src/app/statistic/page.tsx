"use client";

import React, { useEffect, useState } from "react";
import { Card, Tabs } from "antd";
import Link from "next/link";
import useTitle from "~/hooks/useTitle";
import Layout from "~/components/Layout";

export default function Statistic() {
  useTitle("统计");
  const [listData, setListData] = useState<any[]>([]);
  const onChange = (key: string) => {
    console.log(key);
    getData();
  };
  const getData = () => {
    setListData([
      {
        id: 1,
        url: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Indeleniti commodi, eum nobis pariatur, fugit aliquid veritatisest quibusdam dolorem deserunt praesentium error sed ipsamquisquam. Maxime adipisci est et.`,
        time: Date.now(),
      },
      {
        id: 2,
        url: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Indeleniti commodi, eum nobis pariatur, fugit aliquid veritatisest quibusdam dolorem deserunt praesentium error sed ipsamquisquam. Maxime adipisci est et.`,
        time: Date.now(),
      },
      {
        id: 3,
        url: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Indeleniti commodi, eum nobis pariatur, fugit aliquid veritatisest quibusdam dolorem deserunt praesentium error sed ipsamquisquam. Maxime adipisci est et.`,
        time: Date.now(),
      },
      {
        id: 4,
        url: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Indeleniti commodi, eum nobis pariatur, fugit aliquid veritatisest quibusdam dolorem deserunt praesentium error sed ipsamquisquam. Maxime adipisci est et.`,
        time: Date.now(),
      }
    ]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className="h-full w-full px-8 flex flex-col items-center">
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

        <div className="">
          {listData.map((item) => (
            <Card className="w-full mb-2" key={item.id}>
              <p>{item.time}</p>
              <p>{item.url}</p>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

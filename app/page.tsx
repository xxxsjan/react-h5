"use client";

import React from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import useTitle from "../hooks/useTitle";

const HomePage = () => {
  useTitle("首页");
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="w-screen h-full p-4 flex items-center justify-center flex-col">
      <div className="m-auto w-full">
        <Form
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
           layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
        >
          <Form.Item name={"url"} label="链接">
            <Input.TextArea placeholder="请输入链接" rows={8} />
          </Form.Item>
          <Form.Item className="justify-center flex">
            <Button type="primary" htmlType="submit">
              上报
            </Button>
          </Form.Item>
        </Form>
        
      </div>
    </div>
  );
};

export default HomePage;

"use client";

import React from "react";
import { Button, Card, Form, Input } from "antd";
import Link from "next/link";
import useTitle from "~/hooks/useTitle";
import Layout from "~/components/Layout";

function withAuth(Component: any) {
  return function auth(props: JSX.IntrinsicAttributes) {
    const token = window.localStorage.getItem("token");
    if (token) {
      console.log("登录成功");
    } else {
      window && (location.href = "/login");
      return (
        <div className="w-screen h-screen flex items-center justify-center">
          <Link href="/login" replace>
            去登录
          </Link>
        </div>
      );
    }
    return <Component {...props} />;
  };
}

const HomePage = () => {
  useTitle("首页");
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Layout>
      <div className="w-screen h-full px-8 py-6 flex items-center justify-center flex-col">
        <div className="m-auto w-full">
          <Card className="w-full">
            <Form layout="vertical" name="nest-messages" onFinish={onFinish}>
              <Form.Item name={"url"} label="链接">
                <Input.TextArea placeholder="请输入链接" rows={8} />
              </Form.Item>
              <Button type="primary" htmlType="submit" block size="large">
                上报
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(HomePage);

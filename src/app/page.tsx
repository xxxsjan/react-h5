"use client";

import React, { useEffect } from "react";
import { Button, Card, Form, Input } from "antd";
import useTitle from "~/hooks/useTitle";
import Layout from "~/components/Layout";


const HomePage = () => {
  useTitle("上报");
  const [loading, setLoading] = React.useState(false);

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
                <Input.TextArea placeholder="请输入链接" rows={15} />
              </Form.Item>
              <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                上报
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

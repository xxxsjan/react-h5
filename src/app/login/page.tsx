"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Card, Form, Input, Tabs } from "antd";
import { useRouter } from "next/navigation";
import useTitle from "~/hooks/useTitle";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

type FieldType = {
  username?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  useTitle("登录");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    window.localStorage.setItem("token", "123456");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/");
    }, 1000);
  };
  return (
    <div className="w-screen h-screen px-8 py-6 flex items-center justify-center">
      <div className="m-auto w-full">
        <Card>
          <div className="mb-6 text-xl font-semibold text-center">账户密码登录</div>
          <div className="mb-6">
            <Form
              name="basic"
              layout="vertical"
              initialValues={{}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label=""
                name="username"
                rules={[{ required: true, message: "请输入账号" }]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="用户名"
                  allowClear
                />
              </Form.Item>

              <Form.Item<FieldType>
                label=""
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="密码"
                />
              </Form.Item>

              <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                登录
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;

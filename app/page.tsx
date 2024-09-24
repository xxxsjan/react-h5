"use client";

import React from "react";
import Link from "next/link";
import { SmileFilled } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Select,
  Slider,
  Switch,
  ConfigProvider,
} from "antd";
import theme from "./themeConfig";

const HomePage = () => (
  <ConfigProvider  >
    <div style={{ padding: 10, height: "100vh" }}>
      home
    </div>
  </ConfigProvider>
);

export default HomePage;

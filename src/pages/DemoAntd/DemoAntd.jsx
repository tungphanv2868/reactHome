import React from "react";
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/antd.css";

export default function DemoAntd() {
  return (
    <div className="container">
      <h3>Demo Antd</h3>
      <div className="App">
        <h1>antd version: {version}</h1>
        <Space>
          <DatePicker />
          <Button type="primary">Primary Button</Button>
        </Space>
      </div>
    </div>
  );
}

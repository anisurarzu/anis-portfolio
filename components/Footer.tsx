import { Divider, Space, Typography } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export default function Footer() {
  return (
    <footer
      className="py-8 border-t text-center"
      style={{ backgroundColor: "#89BF55", borderColor: "#78a94a" }}
    >
      <Space direction="vertical" size="middle" className="w-full">
        <Space size="large">
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors duration-300"
          >
            <GithubOutlined style={{ color: "white", fontSize: 24 }} />
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors duration-300"
          >
            <LinkedinOutlined style={{ color: "white", fontSize: 24 }} />
          </a>
          <a
            href="https://twitter.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-200 transition-colors duration-300"
          >
            <TwitterOutlined style={{ color: "white", fontSize: 24 }} />
          </a>
        </Space>

        <Divider className="my-0 bg-white/30" />
        <Text className="!text-white font-medium">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </Text>
      </Space>
    </footer>
  );
}

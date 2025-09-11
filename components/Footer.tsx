import { Space, Typography } from "antd";

const { Text } = Typography;

export default function Footer() {
  return (
    <footer
      className="py-6 border-t text-center"
      style={{ backgroundColor: "#111111", borderColor: "#1f1f1f" }}
    >
      <Space direction="vertical" size={2} className="w-full">
        <Text className="!text-gray-300 font-medium">
          © {new Date().getFullYear()} Anisur Rahman Arzu. All rights reserved.
        </Text>
      </Space>
    </footer>
  );
}

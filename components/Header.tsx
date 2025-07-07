"use client";
import { Menu } from "antd";
import {
  HomeOutlined,
  CodeOutlined,
  LaptopOutlined,
  StarOutlined,
  MailOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type HeaderProps = {
  activeSection: string;
  setActiveSection: (key: string) => void;
};

const items: MenuProps["items"] = [
  {
    label: <span style={{ color: "#fff" }}>Home</span>,
    key: "home",
    icon: <HomeOutlined style={{ color: "#fff" }} />,
  },
  {
    label: <span style={{ color: "#fff" }}>Projects</span>,
    key: "projects",
    icon: <CodeOutlined style={{ color: "#fff" }} />,
  },
  {
    label: <span style={{ color: "#fff" }}>Experience</span>,
    key: "experience",
    icon: <LaptopOutlined style={{ color: "#fff" }} />,
  },
  {
    label: <span style={{ color: "#fff" }}>Skills</span>,
    key: "skills",
    icon: <StarOutlined style={{ color: "#fff" }} />,
  },
  {
    label: <span style={{ color: "#fff" }}>Contact</span>,
    key: "contact",
    icon: <MailOutlined style={{ color: "#fff" }} />,
  },
];

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  return (
    <header
      className="fixed w-full z-10 shadow-sm"
      style={{ backgroundColor: "#89BF55" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <Menu
          mode="horizontal"
          selectedKeys={[activeSection]}
          onSelect={({ key }) => setActiveSection(key)}
          className="border-b-0"
          style={{
            backgroundColor: "#89BF55",
            color: "#fff",
          }}
          items={items}
        />
      </div>
    </header>
  );
}

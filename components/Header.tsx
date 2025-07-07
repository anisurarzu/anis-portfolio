"use client";

import { useState, useEffect, type ReactNode } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  CodeOutlined,
  LaptopOutlined,
  StarOutlined,
  MailOutlined,
} from "@ant-design/icons";

type HeaderProps = {
  activeSection: string;
  setActiveSection: (key: string) => void;
};

type MenuItem = {
  key: string;
  icon: ReactNode;
  label: ReactNode;
};

const items: MenuItem[] = [
  {
    key: "home",
    icon: <HomeOutlined style={{ color: "#fff" }} />,
    label: "Home",
  },
  {
    key: "projects",
    icon: <CodeOutlined style={{ color: "#fff" }} />,
    label: "Projects",
  },
  {
    key: "experience",
    icon: <LaptopOutlined style={{ color: "#fff" }} />,
    label: "Experience",
  },
  {
    key: "skills",
    icon: <StarOutlined style={{ color: "#fff" }} />,
    label: "Skills",
  },
  {
    key: "contact",
    icon: <MailOutlined style={{ color: "#fff" }} />,
    label: "Contact",
  },
];

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setExpandedKey(null);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSelect = (key: string) => {
    setActiveSection(key);
    setExpandedKey(key === expandedKey ? null : key);
  };

  return (
    <>
      <style>{`
        .header-container {
          background-color: #89BF55;
          position: fixed;
          width: 100%;
          z-index: 10;
          box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
        }
        .desktop-menu {
          background-color: #89BF55 !important;
          color: white !important;
        }
        .desktop-menu .ant-menu-item, 
        .desktop-menu .ant-menu-item-icon {
          color: white !important;
        }
        .desktop-menu .ant-menu-item-selected {
          background-color: transparent !important;
          font-weight: 600;
          border-bottom: 2px solid white;
          color: white !important;
        }
        /* Mobile icon row */
        .mobile-menu {
          display: flex;
          justify-content: space-around;
          padding: 8px 0;
          background-color: #89BF55;
        }
        .icon-box {
          width: 44px;
          height: 44px;
          background-color: #6a9b3f;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select: none;
          font-weight: 600;
        }
        .icon-box:hover {
          background-color: #a4d16c;
        }
        .icon-box.expanded {
          width: 140px;
          padding: 0 12px;
          justify-content: flex-start;
          gap: 8px;
          background-color: #d0e8b4;
          color: #333;
        }
      `}</style>

      <header className="header-container">
        <div className="container mx-auto px-4 md:px-8">
          {!isMobile && (
            <Menu
              mode="horizontal"
              selectedKeys={[activeSection]}
              onSelect={({ key }) => setActiveSection(key)}
              items={items}
              className="desktop-menu"
              style={{ backgroundColor: "#89BF55" }}
            />
          )}

          {isMobile && (
            <nav
              className="mobile-menu"
              role="navigation"
              aria-label="Mobile Menu"
            >
              {items.map(({ key, icon, label }) => {
                const isExpanded = expandedKey === key;
                return (
                  <div
                    key={key}
                    className={`icon-box ${isExpanded ? "expanded" : ""}`}
                    onClick={() => onSelect(key)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") onSelect(key);
                    }}
                    aria-pressed={isExpanded}
                    aria-label={label as string}
                  >
                    {icon}
                    {isExpanded && <span>{label}</span>}
                  </div>
                );
              })}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

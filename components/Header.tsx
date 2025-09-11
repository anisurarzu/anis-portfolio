"use client";

import { useState, useEffect, type ReactNode } from "react";
import {
  HomeOutlined,
  CodeOutlined,
  LaptopOutlined,
  StarOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

type HeaderProps = {
  activeSection: string;
  setActiveSection: (key: string) => void;
};

type MenuItem = {
  key: string;
  icon: ReactNode;
  label: string;
};

const items: MenuItem[] = [
  { key: "home", icon: <HomeOutlined />, label: "Home" },
  { key: "projects", icon: <CodeOutlined />, label: "Projects" },
  { key: "experience", icon: <LaptopOutlined />, label: "Experience" },
  { key: "skills", icon: <StarOutlined />, label: "Skills" },
  { key: "contact", icon: <MailOutlined />, label: "Contact" },
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
    setExpandedKey(key === expandedKey ? null : key);
    setActiveSection(key);
  };

  return (
    <>
      <style>{`
        .header-container {
          position: fixed;
          top: 50%;
          right: 3%;
          transform: translateY(-50%);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          background-color: #333;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.4s ease;
        }

        .icon-box.expanded {
          width: 140px;
          justify-content: flex-start;
          padding: 0 12px;
          gap: 8px;
          background-color: #f0f0f0;
          color: #333;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .mobile-menu {
          display: flex;
          justify-content: space-around;
          padding: 8px 0;
          background-color: #333;
          height: 64px;
          align-items: center;
        }

        .mobile-menu .icon-box {
          width: 44px;
          height: 44px;
          background-color: #555;
        }

        .mobile-menu .icon-box.expanded {
          width: 120px;
        }
      `}</style>

      {/* Desktop vertical menu */}
      {!isMobile && (
        <div className="header-container">
          {items.map(({ key, icon, label }) => {
            const isExpanded = expandedKey === key;
            return (
              <Tooltip title={label} placement="left" key={key}>
                <div
                  className={`icon-box ${isExpanded ? "expanded" : ""}`}
                  onClick={() => onSelect(key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") onSelect(key);
                  }}
                  aria-pressed={isExpanded}
                  aria-label={label}
                >
                  {icon}
                  {isExpanded && <span>{label}</span>}
                </div>
              </Tooltip>
            );
          })}
        </div>
      )}

      {/* Mobile bottom menu */}
      {isMobile && (
        <nav className="mobile-menu">
          {items.map(({ key, icon, label }) => {
            const isExpanded = expandedKey === key;
            return (
              <Tooltip title={label} placement="top" key={key}>
                <div
                  className={`icon-box ${isExpanded ? "expanded" : ""}`}
                  onClick={() => onSelect(key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") onSelect(key);
                  }}
                  aria-pressed={isExpanded}
                  aria-label={label}
                >
                  {icon}
                  {isExpanded && <span>{label}</span>}
                </div>
              </Tooltip>
            );
          })}
        </nav>
      )}
    </>
  );
}

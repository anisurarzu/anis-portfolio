"use client";
import { useState } from "react";
import Head from "next/head";
import { Layout } from "antd";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const { Content } = Layout;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <Layout className="">
      <Head>
        <title>Anisur Rahman | Professional Web Developer</title>
        <meta
          name="description"
          content="Professional portfolio of John Doe, Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Content className="">
        <div className=" mx-auto">
          <HomeSection
            active={activeSection === "home"}
            setActiveSection={setActiveSection}
          />
          <ProjectsSection active={activeSection === "projects"} />
          <ExperienceSection active={activeSection === "experience"} />
          <SkillsSection active={activeSection === "skills"} />
          <ContactSection active={activeSection === "contact"} />
        </div>
      </Content>

      <Footer />
    </Layout>
  );
}

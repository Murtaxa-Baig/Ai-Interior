import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PrivacySectionContent } from "../../components/sections/PrivacySectionContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ai Interior",
  description:
    "Learn about data privacy, camera and notification permissions, and user rights for Ai Interior.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <PrivacySectionContent />
      <Footer />
    </div>
  );
}

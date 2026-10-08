import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { TermsSectionContent } from "../../components/sections/TermsSectionContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Ai Interior",
  description:
    "Review the terms and conditions, subscription guidelines, and AI render usage rights for Ai Interior.",
};

export default function TermsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <TermsSectionContent />
      <Footer />
    </div>
  );
}

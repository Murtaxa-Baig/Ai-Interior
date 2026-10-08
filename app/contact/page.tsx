import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { ContactFormSection } from "../../components/sections/ContactFormSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Ai Interior Support Desk",
  description:
    "Get in touch with the Ai Interior support desk for help with features, subscriptions, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <ContactFormSection />
      <Footer />
    </div>
  );
}

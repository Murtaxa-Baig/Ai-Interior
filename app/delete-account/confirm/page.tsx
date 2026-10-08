import React from "react";
import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import DeleteConfirmForm from "../../../components/DeleteConfirmForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Account Deletion — Ai Interior",
  description:
    "Enter 6-digit PIN verification code or token to confirm Ai Interior account deletion.",
};

export default function DeleteConfirmPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <DeleteConfirmForm />
      </main>
      <Footer />
    </div>
  );
}

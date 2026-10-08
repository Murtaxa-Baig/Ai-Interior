"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Trash2,
  AlertTriangle,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  Link2,
} from "lucide-react";
import { ErasureAssetCard } from "./ui/ErasureAssetCard";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const isFormValid = email.trim() !== "" && reason !== "" && confirmed;

  const handleDeleteClick = async () => {
    if (!isFormValid) return;
    setIsLoading(true);
    setToast(null);

    const finalReason = reason === "other" ? customReason : reason;

    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, reason: finalReason }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsVerificationSent(true);
        setToast({
          type: "success",
          message: "Verification code sent! Check your inbox.",
        });
      } else {
        setToast({
          type: "error",
          message: data.error || "Failed to submit request. Please try again.",
        });
      }
    } catch {
      setToast({
        type: "error",
        message: "An unexpected error occurred. Please check your internet connection.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-20 right-4 z-50 p-4 rounded-xl shadow-lg border flex items-center gap-3 ${
              toast.type === "success"
                ? "bg-emerald-500 border-emerald-400 text-white"
                : "bg-red-500 border-red-400 text-white"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <p className="font-medium text-sm">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isVerificationSent ? (
          <motion.div
            key="request-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Page Title & Warning Banner */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                Data &amp; Account Protection Portal
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Delete Your Ai Interior Account
              </h1>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                Submitting this form initiates an irreversible account deletion process. All your saved interior renders, history, profile data, and subscription credentials will be permanently erased.
              </p>
            </div>

            {/* What Will Be Erased Breakdown */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Summary of Data To Be Purged:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ErasureAssetCard
                  icon={<Trash2 className="w-4 h-4" />}
                  title="Render History & Vault"
                  description="All AI generated interior, exterior, floor restyle, scenario change, and sketch render images."
                  badge="Irreversible"
                />
                <ErasureAssetCard
                  icon={<Trash2 className="w-4 h-4" />}
                  title="Profile & Images"
                  description="Your profile photo, saved prompt parameters, uploaded room photos, and account settings."
                  badge="Immediate Purge"
                />
                <ErasureAssetCard
                  icon={<Trash2 className="w-4 h-4" />}
                  title="Active Subscriptions"
                  description="Any active weekly, monthly, or yearly subscription linkages will be terminated."
                  badge="Subscription Cancelled"
                />
              </div>
            </div>

            {/* Main Deletion Form */}
            <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <p>
                  <strong>Security Verification Required:</strong> For your security, an email with a 6-digit confirmation code will be dispatched to verify your ownership of the account before deletion.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Account Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered account email"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-[#FF7E2C] focus:outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Reason Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Reason for Leaving
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-[#FF7E2C] focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    <option value="no-longer-needed">
                      No longer need interior AI design
                    </option>
                    <option value="switching">
                      Switching to another application
                    </option>
                    <option value="privacy">Privacy concerns</option>
                    <option value="costs">Subscription Pricing</option>
                    <option value="other">Other reason</option>
                  </select>
                </div>

                {/* Custom Reason Field */}
                {reason === "other" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1.5"
                  >
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Specify Your Reason
                    </label>
                    <input
                      type="text"
                      required
                      value={customReason}
                      onChange={(e) => setCustomReason(e.target.value)}
                      placeholder="Let us know how we can improve"
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-[#FF7E2C] focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </motion.div>
                )}

                {/* Confirmation Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      I confirm that I want to permanently delete my Ai Interior account and understand all saved design renders and history will be permanently erased.
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Action Button */}
              <button
                onClick={handleDeleteClick}
                disabled={isLoading || !isFormValid}
                className={`w-full flex items-center justify-center rounded-xl h-12 px-6 bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all shadow-md active:scale-[0.98] cursor-pointer ${
                  isLoading || !isFormValid
                    ? "opacity-50 cursor-not-allowed shadow-none"
                    : ""
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Requesting Deletion...</span>
                  </div>
                ) : (
                  "Request Account Deletion"
                )}
              </button>
            </div>

            <p className="text-center text-xs text-gray-500">
              Having trouble?{" "}
              <Link href="/contact" className="text-[#FF7E2C] hover:underline font-medium">
                Contact our support desk
              </Link>{" "}
              for assistance.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="verification-sent"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl text-center space-y-6 max-w-lg mx-auto"
          >
            <div className="w-20 h-20 bg-orange-50 text-[#FF7E2C] rounded-full flex items-center justify-center mx-auto relative">
              <Mail className="w-10 h-10 animate-bounce" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Verification Sent!
              </h2>
              <p className="text-gray-500 text-sm">
                We have dispatched a verification security email to
              </p>
              <p className="text-[#FF7E2C] font-semibold text-lg select-all">
                {email}
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl text-left border border-gray-100 text-sm text-gray-600 space-y-3">
              <div className="flex gap-3">
                <Link2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p>
                  <strong>Option 1:</strong> Click the secure <strong>&quot;Permanently Delete My Account&quot;</strong> magic link inside the email.
                </p>
              </div>
              <div className="flex gap-3">
                <KeyRound className="w-5 h-5 text-[#FF7E2C] shrink-0 mt-0.5" />
                <p>
                  <strong>Option 2:</strong> Copy the 6-digit confirmation PIN code and enter it on our confirmation page.
                </p>
              </div>
            </div>

            <p className="text-xs text-red-500 font-medium">
              * The link and code are valid for exactly 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
              <Link
                href="/delete-account/confirm"
                className="px-6 py-3 bg-[#FF7E2C] text-white font-bold rounded-xl shadow-md hover:bg-[#E56919] transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>Enter Code Manually</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsVerificationSent(false)}
                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all text-sm cursor-pointer"
              >
                Back to Form
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { FormField } from "../ui/FormField";
import { Button } from "../ui/Button";
import { ContactInfoCard } from "../ui/ContactInfoCard";
import { Mail, MapPin, Clock, CheckCircle2, AlertCircle, Send } from "lucide-react";

export const ContactFormSection: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, subject, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({
          type: "success",
          text: "Thank you! Your message has been sent successfully. Our team will get back to you shortly.",
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          text: data.error || "Failed to send email. Please try again.",
        });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setStatus({ type: "error", text: msg });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full py-16 md:py-24 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col gap-12">
        {/* Header Title */}
        <div className="flex flex-col items-center text-center gap-3 max-w-[60ch] mx-auto">
          <span className="text-xs font-bold text-[#FF7E2C] uppercase tracking-wider bg-[#FFF4ED] px-3 py-1 rounded-full border border-[#FFD8C2]">
            Customer Support Desk
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            We&apos;re Here to Help
          </h1>
          <p className="text-base text-[#4b5563]">
            Have questions about Ai Interior features, subscription plans, or need technical help? Send us a message below.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactInfoCard
            icon={<Mail className="w-5 h-5" />}
            title="Direct Support Email"
            subtitle="Reach our customer success team directly for instant support on account or billing questions."
            actionText="supportappnaya@gmail.com"
            actionHref="mailto:supportappnaya@gmail.com"
          />
          <ContactInfoCard
            icon={<Clock className="w-5 h-5" />}
            title="Response Time Guarantee"
            subtitle="We review and reply to all inquiries within 24 business hours."
            actionText="Check SLAs"
            actionHref="#form"
          />
          <ContactInfoCard
            icon={<MapPin className="w-5 h-5" />}
            title="Developed by AppNaya"
            subtitle="AppNaya Technologies - Crafting state-of-the-art mobile and web AI solutions."
            actionText="Visit AppNaya"
            actionHref="http://www.appnayatech.com/"
          />
        </div>

        {/* Main Form Box */}
        <div id="form" className="bg-white border border-[#e5e7eb] rounded-3xl p-8 md:p-12 shadow-xl max-w-[800px] mx-auto w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold text-[#111827]">Send Us a Message</h2>
              <p className="text-xs text-gray-500">
                Fill out the details below and we will reach back to your inbox.
              </p>
            </div>

            {status && (
              <div
                className={`p-4 rounded-xl text-xs flex items-center gap-3 border ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-red-50 text-red-800 border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                )}
                <span className="font-medium leading-relaxed">{status.text}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
                required
              />
              <FormField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
              />
            </div>

            <FormField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              required
            />

            <FormField
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Question about Subscription / Feature Request"
            />

            <FormField
              label="Message"
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              rows={5}
              required
            />

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

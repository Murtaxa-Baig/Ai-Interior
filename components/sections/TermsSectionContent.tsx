import React from "react";
import Link from "next/link";
import { QuickJumpBar } from "../ui/QuickJumpBar";
import { LegalCallout } from "../ui/LegalCallout";
import { Button } from "../ui/Button";
import { Mail, ArrowRight } from "lucide-react";

export const TermsSectionContent: React.FC = () => {
  const jumpItems = [
    { id: "overview", label: "01 Overview" },
    { id: "ai-rights", label: "02 AI Generation Rights" },
    { id: "features", label: "03 Core Features & Options" },
    { id: "subscriptions", label: "04 Billing & Subscriptions" },
    { id: "permissions", label: "05 Device Permissions" },
    { id: "acceptable-use", label: "06 Acceptable Use" },
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-[#fafafa]">
      <div className="max-w-[1000px] mx-auto px-5 md:px-12 flex flex-col gap-10">
        {/* Header Title */}
        <div className="flex flex-col gap-3 border-b border-[#e5e7eb] pb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#FF7E2C] uppercase tracking-wider bg-[#FFF4ED] px-3 py-1 rounded-full border border-[#FFD8C2]">
              Legal Documentation
            </span>
            <span className="text-xs text-[#575e70]">Effective October 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-base text-[#4b5563] max-w-[70ch] leading-relaxed">
            Please read these terms carefully before accessing or using the Ai Interior mobile application and web platform.
          </p>
        </div>

        {/* Sticky Quick Jump Bar */}
        <QuickJumpBar items={jumpItems} />

        {/* Legal Callout Summary */}
        <LegalCallout
          type="info"
          title="Important Billing & Ownership Notice"
          description="By subscribing to Ai Interior (Weekly, Monthly, or Yearly), you gain personal and commercial usage rights over all AI-generated interior, exterior, flooring, scenario, and sketch renders produced via your account."
        />

        {/* Content Sections */}
        <div className="flex flex-col gap-12 text-[#111827]">
          {/* Section 1: Overview */}
          <section id="overview" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                01
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Overview &amp; Acceptance
              </h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              These Terms and Conditions govern your relationship with <strong>Ai Interior</strong>, developed and operated by <strong>AppNaya Technologies</strong>. By downloading the application, creating an account, or purchasing a subscription, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Section 2: AI Rights */}
          <section id="ai-rights" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                02
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                AI Generation &amp; Intellectual Property
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col gap-3">
              <h3 className="font-bold text-sm text-[#111827]">
                Ownership of Rendered Assets
              </h3>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                You retain full commercial and personal rights to all rendered image outputs generated using your input photos or text prompts. Ai Interior does not claim trademark or copyright ownership over the final rendered spatial images synthesized through our AI model.
              </p>
            </div>
          </section>

          {/* Section 3: Core Features */}
          <section id="features" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                03
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Core Application Features &amp; Options
              </h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              Ai Interior provides five main AI architectural tools, operating via two primary options:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#4b5563]">
              <li>
                <strong>Interior Design:</strong> Option 1 allows uploading room/office/sitting area photos and picking styles; Option 2 supports direct text prompt generation.
              </li>
              <li>
                <strong>Exterior Design:</strong> Option 1 allows uploading home/apartment/office photos and selecting styles; Option 2 supports direct text prompts.
              </li>
              <li>
                <strong>Floor Restyle:</strong> Option 1 allows selecting material types (Vinyl, Marble, Ceramic Tiles, Hardwood) and styles; Option 2 supports text prompts.
              </li>
              <li>
                <strong>Change Scenario:</strong> Option 1 supports shifting lighting scenarios (Day, Night, Sunset); Option 2 supports text prompts.
              </li>
              <li>
                <strong>Sketch Rendering:</strong> Converts conceptual sketches and architectural drawings into photorealistic 3D renders via prompt description.
              </li>
            </ul>
          </section>

          {/* Section 4: Billing & Subscriptions */}
          <section id="subscriptions" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                04
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Billing, Subscriptions &amp; Cancellation
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col gap-4">
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Ai Interior offers flexible subscription tiers billed through Apple App Store and Google Play billing mechanisms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#FFF4ED] border border-[#FFD8C2] flex flex-col gap-1">
                  <span className="font-bold text-[#FF7E2C] uppercase">Weekly Pass</span>
                  <span className="text-[#111827] font-semibold">Short-term Access</span>
                  <p className="text-gray-500">Billed weekly; auto-renews unless cancelled 24h prior.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FFF4ED] border border-[#FFD8C2] flex flex-col gap-1">
                  <span className="font-bold text-[#FF7E2C] uppercase">Monthly Pass</span>
                  <span className="text-[#111827] font-semibold">Pro Interior Designer</span>
                  <p className="text-gray-500">Billed monthly; auto-renews unless cancelled 24h prior.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FFF4ED] border border-[#FFD8C2] flex flex-col gap-1">
                  <span className="font-bold text-[#FF7E2C] uppercase">Yearly Unlimited</span>
                  <span className="text-[#111827] font-semibold">Best Value Plan</span>
                  <p className="text-gray-500">Billed annually; unlimited high-speed AI synthesis.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Device Permissions */}
          <section id="permissions" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                05
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Device Permissions &amp; Access
              </h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              To deliver full mobile app capabilities, Ai Interior requests permission for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#4b5563]">
              <li>
                <strong>Camera &amp; Photo Gallery Permission:</strong> Required for uploading interior, exterior, floor, or scenario images and updating your user profile photo.
              </li>
              <li>
                <strong>Notification Permission:</strong> Required to notify you when complex render jobs or inspiration feeds update.
              </li>
              <li>
                <strong>In-App Billing Permission:</strong> Required to process weekly, monthly, and yearly subscriptions securely through store processors.
              </li>
            </ul>
          </section>

          {/* Section 6: Acceptable Use */}
          <section id="acceptable-use" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                06
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Acceptable Use &amp; Account Termination
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[#111827] text-base">Account Deletion Rights</h3>
                <p className="text-xs text-[#575e70] leading-relaxed">
                  You may request permanent account deletion at any time. All saved render history, profile details, and data will be purged.
                </p>
              </div>
              <Button href="/delete-account" variant="danger" size="md">
                Delete Account Page
              </Button>
            </div>
          </section>
        </div>

        {/* Footer Support Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#e5e7eb] text-xs text-[#575e70]">
          <span>Ai Interior Terms &amp; Conditions • AppNaya Technologies</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#FF7E2C]" />
            <a href="mailto:supportappnaya@gmail.com" className="font-bold text-[#FF7E2C] hover:underline">
              supportappnaya@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

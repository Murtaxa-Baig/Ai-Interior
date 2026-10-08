import React from "react";
import Link from "next/link";
import { QuickJumpBar } from "../ui/QuickJumpBar";
import { LegalCallout } from "../ui/LegalCallout";
import { DataCategoryCard } from "../ui/DataCategoryCard";
import { Button } from "../ui/Button";
import { Camera, Bell, CreditCard, ShieldCheck, Download, Trash2, Mail } from "lucide-react";

export const PrivacySectionContent: React.FC = () => {
  const jumpItems = [
    { id: "collection", label: "01 Data Collection" },
    { id: "use", label: "02 Use of Images & Prompts" },
    { id: "permissions", label: "03 Device Permissions" },
    { id: "third-parties", label: "04 Third-Party Processing" },
    { id: "erasure", label: "05 Data Erasure & Rights" },
    { id: "contact", label: "06 Security & Contact" },
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-[#fafafa]">
      <div className="max-w-[1000px] mx-auto px-5 md:px-12 flex flex-col gap-10">
        {/* Header Title */}
        <div className="flex flex-col gap-3 border-b border-[#e5e7eb] pb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#FF7E2C] uppercase tracking-wider bg-[#FFF4ED] px-3 py-1 rounded-full border border-[#FFD8C2]">
              Privacy &amp; Data Security
            </span>
            <span className="text-xs text-[#575e70]">Updated October 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base text-[#4b5563] max-w-[70ch] leading-relaxed">
            Learn how Ai Interior collects, processes, and protects your uploaded spatial photos, render history, profile image, and subscription permissions.
          </p>
        </div>

        {/* Sticky Quick Jump Bar */}
        <QuickJumpBar items={jumpItems} />

        {/* Legal Callout */}
        <LegalCallout
          type="info"
          title="Zero Data Broker Commitment"
          description="Ai Interior does not sell, rent, or trade your uploaded room photos, render history, or personal identifiers to third-party advertisers or data brokers."
        />

        {/* Content Sections */}
        <div className="flex flex-col gap-12 text-[#111827]">
          {/* Section 1: Data Collection */}
          <section id="collection" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                01
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Information We Collect
              </h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              We collect information strictly necessary to operate our AI spatial rendering engine:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DataCategoryCard
                icon={<Camera className="w-5 h-5" />}
                badgeText="Media Uploads"
                title="User Uploaded Photos"
                description="Interior, exterior, floor, or scenario images uploaded under Option 1 to compute style transformations."
              />
              <DataCategoryCard
                icon={<ShieldCheck className="w-5 h-5" />}
                badgeText="Profile & Account"
                title="Profile & History"
                description="Your registered email address, profile avatar image, and saved render history."
              />
            </div>
          </section>

          {/* Section 2: Use of Images & Prompts */}
          <section id="use" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                02
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Use of Uploaded Photos &amp; Prompts
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col gap-3">
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Photos uploaded for <strong>Interior Design</strong>, <strong>Exterior Design</strong>, <strong>Floor Restyle</strong>, <strong>Change Scenario</strong>, or <strong>Sketch Rendering</strong> are processed solely for generating your requested spatial design. We do not train public AI models on your private home or room photos.
              </p>
            </div>
          </section>

          {/* Section 3: Device Permissions */}
          <section id="permissions" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                03
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Device Permissions Details
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DataCategoryCard
                icon={<Camera className="w-5 h-5" />}
                badgeText="Image & Gallery"
                title="Camera &amp; Photo Access"
                description="Allows uploading room/building photos and updating profile images."
              />
              <DataCategoryCard
                icon={<Bell className="w-5 h-5" />}
                badgeText="System Push"
                title="Notification Permission"
                description="Alerts you when AI render jobs complete or when new design inspirations are added."
              />
              <DataCategoryCard
                icon={<CreditCard className="w-5 h-5" />}
                badgeText="Store Billing"
                title="Billing Permission"
                description="Enables weekly, monthly, and yearly subscription processing via App Store &amp; Play Store."
              />
            </div>
          </section>

          {/* Section 4: Third Parties */}
          <section id="third-parties" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                04
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Third-Party Processing &amp; Subscriptions
              </h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              We partner only with SOC2-compliant cloud GPU providers and official App Store / Google Play payment infrastructure. Financial card data is processed directly by Apple/Google and never stored on Ai Interior servers.
            </p>
          </section>

          {/* Section 5: Data Erasure */}
          <section id="erasure" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                05
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                User Rights &amp; Immediate Erasure
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DataCategoryCard
                variant="user-right"
                icon={<Download className="w-5 h-5" />}
                title="Export Render Vault"
                description="Download high-resolution 4K render images and room descriptions at any time."
              />
              <DataCategoryCard
                variant="user-right"
                icon={<Trash2 className="w-5 h-5" />}
                title="Permanent Account Deletion"
                description="Request an immediate account purge to permanently erase all saved history, renders, and profile images."
              />
            </div>
          </section>

          {/* Section 6: Security & Contact */}
          <section id="contact" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold">
                06
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Security Standards &amp; Contact
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e5e7eb] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-xl">
                <span className="text-sm font-semibold text-[#111827]">
                  Privacy &amp; Data Protection Desk
                </span>
                <p className="text-xs md:text-sm text-[#4b5563] leading-relaxed">
                  For privacy inquiries, GDPR data portability requests, or security reports, reach out to our team:
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <Mail className="w-4 h-4 text-[#FF7E2C]" />
                  <a
                    href="mailto:supportappnaya@gmail.com"
                    className="font-bold text-[#FF7E2C] hover:underline"
                  >
                    supportappnaya@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:supportappnaya@gmail.com"
                >
                  Contact Privacy Desk
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/delete-account"
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#e5e7eb] text-xs text-[#575e70]">
          <span>Ai Interior Privacy Policy • AppNaya Technologies</span>
          <div className="flex items-center gap-3 font-medium">
            <Link href="/terms-and-conditions" className="hover:text-[#111827] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#111827] transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

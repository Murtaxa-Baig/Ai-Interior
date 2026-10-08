import React from "react";
import { AlertCircle, ShieldCheck } from "lucide-react";

interface LegalCalloutProps {
  title: string;
  description: string;
  type?: "info" | "warning";
}

export const LegalCallout: React.FC<LegalCalloutProps> = ({
  title,
  description,
  type = "info",
}) => {
  const isInfo = type === "info";
  return (
    <div
      className={`rounded-xl p-5 border flex gap-4 ${
        isInfo
          ? "bg-[#FFF4ED]/60 border-[#FFD8C2] text-[#111827]"
          : "bg-amber-50/70 border-amber-200 text-amber-900"
      }`}
    >
      <div className="shrink-0 mt-0.5">
        {isInfo ? (
          <ShieldCheck className="w-5 h-5 text-[#FF7E2C]" />
        ) : (
          <AlertCircle className="w-5 h-5 text-amber-600" />
        )}
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <strong className="font-bold text-sm">{title}</strong>
        <p className="leading-relaxed text-[#4b5563]">{description}</p>
      </div>
    </div>
  );
};

import React from "react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  actionText?: string;
  actionHref?: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  title,
  subtitle,
  actionText,
  actionHref,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[#FF7E2C] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-[#111827] text-base">{title}</h3>
        <p className="text-xs text-[#575e70] leading-relaxed">{subtitle}</p>
      </div>
      {actionText && actionHref && (
        <a
          href={actionHref}
          className="text-xs font-bold text-[#FF7E2C] hover:underline mt-1 inline-flex items-center gap-1"
        >
          {actionText} &rarr;
        </a>
      )}
    </div>
  );
};

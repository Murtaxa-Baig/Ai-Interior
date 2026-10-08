import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  stepNumber: string;
  title: string;
  description: string;
  tagText: string;
  tagIcon?: React.ReactNode;
  badgeContent?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  stepNumber,
  title,
  description,
  tagText,
  tagIcon,
  badgeContent,
}) => {
  return (
    <div className="group bg-white rounded-2xl p-7 border border-[#e5e7eb] shadow-sm hover:shadow-xl hover:border-[#FFD8C2] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFF4ED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full pointer-events-none" />

      <div className="flex flex-col gap-5 relative z-10">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-[#FFF4ED] text-[#FF7E2C] flex items-center justify-center group-hover:bg-[#FF7E2C] group-hover:text-white transition-colors duration-300 shadow-sm">
            {icon}
          </div>
          <span className="text-2xl font-black text-[#e5e7eb] group-hover:text-[#FF7E2C]/30 transition-colors">
            {stepNumber}
          </span>
        </div>

        {badgeContent && (
          <span className="inline-block self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FF7E2C]/10 text-[#FF7E2C]">
            {badgeContent}
          </span>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#111827] tracking-tight group-hover:text-[#FF7E2C] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#4b5563] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[#f3f4f6] flex items-center gap-2 text-xs font-semibold text-[#575e70] group-hover:text-[#FF7E2C] transition-colors">
        {tagIcon && <span className="text-[#FF7E2C]">{tagIcon}</span>}
        <span>{tagText}</span>
      </div>
    </div>
  );
};

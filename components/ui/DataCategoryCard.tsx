import React from "react";

interface DataCategoryCardProps {
  icon: React.ReactNode;
  badgeText?: string;
  title: string;
  description: string;
  variant?: "default" | "user-right";
}

export const DataCategoryCard: React.FC<DataCategoryCardProps> = ({
  icon,
  badgeText,
  title,
  description,
  variant = "default",
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col gap-3 hover:border-[#FFD8C2] transition-colors">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-lg bg-[#FFF4ED] text-[#FF7E2C] flex items-center justify-center">
          {icon}
        </div>
        {badgeText && (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-[#575e70]">
            {badgeText}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-bold text-[#111827] text-base">{title}</h3>
        <p className="text-xs text-[#4b5563] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

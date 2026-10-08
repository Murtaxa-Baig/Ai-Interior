import React from "react";

interface ErasureAssetCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

export const ErasureAssetCard: React.FC<ErasureAssetCardProps> = ({
  icon,
  title,
  description,
  badge,
}) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-red-100 shadow-sm flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
          {badge}
        </span>
      </div>
      <h4 className="font-bold text-[#111827] text-sm">{title}</h4>
      <p className="text-xs text-[#575e70] leading-relaxed">{description}</p>
    </div>
  );
};

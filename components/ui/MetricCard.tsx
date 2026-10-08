import React from "react";

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  highlightValue?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  description,
  highlightValue = false,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col gap-2 transition-all hover:shadow-md hover:border-[#FFD8C2]">
      <span className="text-xs font-bold uppercase tracking-wider text-[#575e70]">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span
          className={`text-4xl font-extrabold tracking-tight ${
            highlightValue ? "text-[#FF7E2C]" : "text-[#111827]"
          }`}
        >
          {value}
        </span>
      </div>
      <p className="text-xs text-[#4b5563] leading-relaxed mt-1">{description}</p>
    </div>
  );
};

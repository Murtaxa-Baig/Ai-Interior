import React from "react";
import { Star } from "lucide-react";

interface AppDownloadCardProps {
  platformIcon: React.ReactNode;
  rating: string;
  reviewCount: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  badge?: string;
}

export const AppDownloadCard: React.FC<AppDownloadCardProps> = ({
  platformIcon,
  rating,
  reviewCount,
  subtitle,
  title,
  description,
  buttonText,
  buttonIcon,
  badge,
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] shadow-sm hover:shadow-xl hover:border-[#FFD8C2] transition-all flex flex-col justify-between text-left gap-6 relative">
      {badge && (
        <span className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-wider bg-[#FFF4ED] text-[#FF7E2C] border border-[#FFD8C2] px-2.5 py-1 rounded-full">
          {badge}
        </span>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#111827] text-white flex items-center justify-center">
            {platformIcon}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#575e70] uppercase tracking-wider">
              {subtitle}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#111827]">
              <span className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="ml-1 text-xs text-[#111827]">{rating}</span>
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 font-normal">{reviewCount} reviews</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-bold text-[#111827]">{title}</h3>
          <p className="text-sm text-[#4b5563] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <button className="w-full h-12 px-6 rounded-xl bg-[#FF7E2C] hover:bg-[#E56919] active:bg-[#D45B0E] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer">
        {buttonIcon}
        <span>{buttonText}</span>
      </button>
    </div>
  );
};

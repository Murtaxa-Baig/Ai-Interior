import React from "react";

interface QuickJumpItem {
  id: string;
  label: string;
}

interface QuickJumpBarProps {
  items: QuickJumpItem[];
}

export const QuickJumpBar: React.FC<QuickJumpBarProps> = ({ items }) => {
  return (
    <nav className="sticky top-20 z-40 bg-white/90 backdrop-blur border border-[#e5e7eb] rounded-xl p-2.5 shadow-sm mb-8">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        <span className="text-xs font-bold text-[#575e70] uppercase px-3 shrink-0">
          Quick Jump:
        </span>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-xs font-medium text-[#4b5563] hover:text-[#FF7E2C] hover:bg-[#FFF4ED] px-3 py-1.5 rounded-lg transition-colors shrink-0"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

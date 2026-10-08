"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Sliders, CheckCircle2, RefreshCw, Wand2 } from "lucide-react";

export const HeroDeviceMockup: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState("Modern Minimalist");
  const [isGenerating, setIsGenerating] = useState(false);

  const styles = ["Modern Minimalist", "Japandi", "Luxury Scandinavian", "Industrial Chic"];

  const handleStyleChange = (style: string) => {
    setActiveStyle(style);
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-[540px] mx-auto relative group">
      {/* Glow Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7E2C] to-amber-500 rounded-[36px] blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />

      {/* Main Mockup Container */}
      <div className="relative bg-[#111827] border border-gray-800 rounded-[32px] p-4 sm:p-5 shadow-2xl overflow-hidden text-white">
        {/* Top Header Status Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF7E2C] animate-pulse" />
            <span className="font-bold text-white tracking-wide">Ai Interior v2.5</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-800/80 px-2.5 py-1 rounded-full text-[11px] font-semibold text-amber-400">
            <Sparkles className="w-3 h-3" />
            <span>AI Neural Engine</span>
          </div>
        </div>

        {/* Studio Viewport Screen */}
        <div className="relative rounded-2xl overflow-hidden mt-3 aspect-square bg-gray-900 border border-gray-800">
          <Image
            src={activeStyle === "Industrial Chic" ? "/images/exterior-render.jpg" : "/images/hero-render.jpg"}
            alt="AI Interior Render Preview"
            fill
            className={`object-cover transition-all duration-700 ${
              isGenerating ? "scale-105 blur-sm opacity-60" : "scale-100 blur-0 opacity-100"
            }`}
            priority
          />

          {/* Render Overlay Badge */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#FF7E2C]" />
            <span>Style: {activeStyle}</span>
          </div>

          {/* Render Time Badge */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-gray-300">
            Inference: 1.8s
          </div>

          {/* Loading Indicator Overlay */}
          {isGenerating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 backdrop-blur-xs">
              <RefreshCw className="w-8 h-8 text-[#FF7E2C] animate-spin" />
              <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/70 px-3 py-1 rounded-full">
                Synthesizing {activeStyle}...
              </span>
            </div>
          )}

          {/* Bottom Interactive Spec Bar */}
          <div className="absolute bottom-3 inset-x-3 bg-black/70 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-medium uppercase">Option 1 • Image Upload</span>
              <span className="font-bold text-white text-xs truncate max-w-[200px]">
                Living Room • Warm Ambient Lighting
              </span>
            </div>
            <button
              onClick={() => handleStyleChange(styles[(styles.indexOf(activeStyle) + 1) % styles.length])}
              className="px-3 py-1.5 bg-[#FF7E2C] hover:bg-[#E56919] text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Next Style</span>
            </button>
          </div>
        </div>

        {/* Style Selector Chips */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="font-semibold uppercase tracking-wider text-[11px] text-gray-300">
              Interactive Style Switcher:
            </span>
            <span className="flex items-center gap-1 text-[#FF7E2C]">
              <Sliders className="w-3 h-3" /> Select Style
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {styles.map((s) => (
              <button
                key={s}
                onClick={() => handleStyleChange(s)}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-left truncate cursor-pointer ${
                  activeStyle === s
                    ? "bg-[#FF7E2C] text-white shadow-md border border-[#FF7E2C]"
                    : "bg-gray-800/60 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

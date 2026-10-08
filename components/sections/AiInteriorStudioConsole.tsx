"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Home,
  Building2,
  Grid,
  SunMoon,
  Pencil,
  Sparkles,
  Upload,
  MessageSquareText,
  History,
  Compass,
  CheckCircle2,
  Wand2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const AiInteriorStudioConsole: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<
    "interior" | "exterior" | "floor" | "scenario" | "sketch"
  >("interior");
  const [mode, setMode] = useState<"option1" | "option2">("option1");
  const [selectedSubOption, setSelectedSubOption] = useState<string>("Room");
  const [selectedStyle, setSelectedStyle] = useState<string>("Modern Minimalist");
  const [promptText, setPromptText] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasRendered, setHasRendered] = useState<boolean>(true);

  // Sub-option presets per feature for Option 1
  const subOptionsMap: Record<string, string[]> = {
    interior: ["Room", "Office", "Sitting Area"],
    exterior: ["Home", "Apartment", "Office Building"],
    floor: ["Vinyl Flooring", "Marble", "Ceramic Tiles", "Hardwood"],
    scenario: ["Day", "Night", "Sunset", "Golden Hour"],
    sketch: [], // Sketch only has Option 2 (Prompt)
  };

  const stylesList = [
    "Modern Minimalist",
    "Japandi",
    "Scandinavian Luxury",
    "Industrial Chic",
    "Warm Contemporary",
  ];

  const handleFeatureSwitch = (
    feat: "interior" | "exterior" | "floor" | "scenario" | "sketch"
  ) => {
    setActiveFeature(feat);
    if (feat === "sketch") {
      setMode("option2");
    } else {
      setMode("option1");
    }
    const defaults = subOptionsMap[feat];
    if (defaults && defaults.length > 0) {
      setSelectedSubOption(defaults[0]);
    }
    setHasRendered(true);
  };

  const handleGenerate = () => {
    setIsProcessing(true);
    setHasRendered(false);
    setTimeout(() => {
      setIsProcessing(false);
      setHasRendered(true);
    }, 1200);
  };

  // Content descriptions per feature
  const renderDescriptions: Record<string, { title: string; desc: string; image: string }> = {
    interior: {
      title: "Luxury Interior Spatial Render",
      desc: "Our AI model harmonized room geometry with high-end Scandinavian aesthetics. Features tailored ambient warm lighting, custom oak wood paneling, ergonomic minimalist seating, and seamless indoor-outdoor connectivity.",
      image: "/images/hero-render.jpg",
    },
    exterior: {
      title: "Contemporary Facade Architectural Render",
      desc: "AI transformed the structural exterior with cantilevered concrete terraces, perimeter warm LED strip lighting, dusk infinity pool reflections, and full-height glass fenestration.",
      image: "/images/exterior-render.jpg",
    },
    floor: {
      title: "Custom Restyled Flooring Texture",
      desc: "AI accurately re-textured floor surfaces using premium chevron chevron marble & polished hardwood grain. Preserves shadow dynamics and light bounces across the room.",
      image: "/images/hero-render.jpg",
    },
    scenario: {
      title: "Sunset Atmospheric Lighting Transformation",
      desc: "The scene's natural lighting scenario was shifted to golden hour dusk. Recomputed warm color temperature (3200K), soft window shadows, and cozy night ambiance.",
      image: "/images/exterior-render.jpg",
    },
    sketch: {
      title: "Photorealistic Sketch-to-3D Synthesis",
      desc: "Conceptual pencil sketch converted into a high-fidelity 3D architectural rendering with realistic ray-traced materials, depth mapping, and physically based light dispersion.",
      image: "/images/hero-render.jpg",
    },
  };

  return (
    <section id="studio-console" className="w-full bg-[#111827] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF7E2C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col gap-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-[65ch]">
            <span className="text-xs font-bold text-[#FF7E2C] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Live Interactive Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Try the Ai Interior Studio Engine
            </h2>
            <p className="text-base text-gray-400">
              Select any of our 5 core features to preview how Option 1 (Image Upload) and Option 2 (Text Prompt) generate instant AI renders.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-xl border border-gray-700 text-xs font-semibold text-gray-300">
            <ShieldCheck className="w-4 h-4 text-[#FF7E2C]" />
            <span>Saved to User History &amp; Inspirations</span>
          </div>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { id: "interior", label: "1. Interior Design", icon: <Home className="w-4 h-4" /> },
            { id: "exterior", label: "2. Exterior Design", icon: <Building2 className="w-4 h-4" /> },
            { id: "floor", label: "3. Floor Restyle", icon: <Grid className="w-4 h-4" /> },
            { id: "scenario", label: "4. Change Scenario", icon: <SunMoon className="w-4 h-4" /> },
            { id: "sketch", label: "5. Sketch Render", icon: <Pencil className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                handleFeatureSwitch(
                  tab.id as "interior" | "exterior" | "floor" | "scenario" | "sketch"
                )
              }
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFeature === tab.id
                  ? "bg-[#FF7E2C] text-white shadow-lg border border-[#FF7E2C]"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700/50"
              }`}
            >
              {tab.icon}
              <span className="truncate">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Console Workspace Box */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Controls Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              {/* Option Selector Mode Toggle (Option 1 vs Option 2) */}
              {activeFeature !== "sketch" && (
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Generation Mode:
                  </span>
                  <div className="grid grid-cols-2 gap-2 bg-gray-800 p-1 rounded-xl border border-gray-700">
                    <button
                      onClick={() => setMode("option1")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        mode === "option1"
                          ? "bg-[#FF7E2C] text-white shadow"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Option 1: Image Upload</span>
                    </button>

                    <button
                      onClick={() => setMode("option2")}
                      className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        mode === "option2"
                          ? "bg-[#FF7E2C] text-white shadow"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <MessageSquareText className="w-3.5 h-3.5" />
                      <span>Option 2: Text Prompt</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Mode 1: Image Upload & Category Pickers */}
              {mode === "option1" && activeFeature !== "sketch" && (
                <div className="flex flex-col gap-5">
                  {/* Image Drag/Drop Box */}
                  <div className="border-2 border-dashed border-gray-700 hover:border-[#FF7E2C] bg-gray-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 text-[#FF7E2C] group-hover:bg-[#FF7E2C] group-hover:text-white flex items-center justify-center transition-colors">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-white">
                        Upload Your {activeFeature.toUpperCase()} Image
                      </span>
                      <span className="text-xs text-gray-400">
                        Supports JPG, PNG, WEBP up to 25MB
                      </span>
                    </div>
                  </div>

                  {/* Sub-option Selection (Room/Office/Sitting, Building Type, Floor Type, Scenario) */}
                  {subOptionsMap[activeFeature] && subOptionsMap[activeFeature].length > 0 && (
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Select Category / Type:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {subOptionsMap[activeFeature].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setSelectedSubOption(opt)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              selectedSubOption === opt
                                ? "bg-white text-[#111827] shadow"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Style Preset Picker */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Select Architectural Style:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {stylesList.map((st) => (
                        <button
                          key={st}
                          onClick={() => setSelectedStyle(st)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-left truncate cursor-pointer ${
                            selectedStyle === st
                              ? "bg-[#FF7E2C] text-white border border-[#FF7E2C]"
                              : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700/50"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Mode 2: Prompt Mode */}
              {(mode === "option2" || activeFeature === "sketch") && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Describe Your Ideal {activeFeature.toUpperCase()} Design:
                    </label>
                    <textarea
                      rows={5}
                      value={promptText}
                      onChange={(e) => setPromptText(e.target.value)}
                      placeholder={
                        activeFeature === "sketch"
                          ? "e.g. A hand-drawn sketch of a contemporary glass cliffside villa with warm wooden overhangs and sunset ambient light..."
                          : "e.g. A modern Japandi living room with beige linen sectional, floor-to-ceiling windows, warm oak flooring, and subtle olive houseplants..."
                      }
                      className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF7E2C] transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 bg-gray-800/70 p-3 rounded-xl border border-gray-700/50">
                    <span>AI Model: InteriorDiffusion XL 2.5</span>
                    <span className="text-[#FF7E2C] font-semibold">100% Fidelity</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Trigger Button */}
            <button
              onClick={handleGenerate}
              disabled={isProcessing}
              className="w-full py-4 px-6 rounded-2xl bg-[#FF7E2C] hover:bg-[#E56919] active:bg-[#D45B0E] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Synthesizing AI Design...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  <span>Press Continue to Generate AI Design</span>
                </>
              )}
            </button>
          </div>

          {/* Right Output Viewport Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF7E2C]" />
                Generated AI Render Output &amp; Specifications
              </span>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-gray-400">
                  <History className="w-3.5 h-3.5 text-[#FF7E2C]" /> Auto-saved to History
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <Compass className="w-3.5 h-3.5 text-amber-400" /> Featured in Inspirations
                </span>
              </div>
            </div>

            {/* Result Display Box */}
            <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-800 aspect-video md:aspect-[4/3] flex flex-col justify-end">
              <Image
                src={renderDescriptions[activeFeature].image}
                alt="AI Output Render"
                fill
                className={`object-cover transition-all duration-700 ${
                  isProcessing ? "opacity-30 scale-105 blur-md" : "opacity-100 scale-100 blur-0"
                }`}
              />

              {/* Shimmer Overlay during Processing */}
              {isProcessing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 backdrop-blur-xs">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7E2C]/20 border border-[#FF7E2C] flex items-center justify-center animate-bounce">
                    <Sparkles className="w-6 h-6 text-[#FF7E2C]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF7E2C] animate-pulse">
                    Computing Neural Materials &amp; Ray Tracing...
                  </span>
                </div>
              )}

              {/* Output Description Overlay */}
              {hasRendered && !isProcessing && (
                <div className="relative z-10 bg-black/80 backdrop-blur-md p-5 border-t border-white/10 flex flex-col gap-2 animate-in slide-in-from-bottom duration-300">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {renderDescriptions[activeFeature].title}
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FF7E2C] text-white px-2.5 py-0.5 rounded-full">
                      AI Generated
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {renderDescriptions[activeFeature].desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroDeviceMockup } from "../components/sections/HeroDeviceMockup";
import { AiInteriorStudioConsole } from "../components/sections/AiInteriorStudioConsole";
import { MetricCard } from "../components/ui/MetricCard";
import { FeatureCard } from "../components/ui/FeatureCard";
import { AppDownloadCard } from "../components/ui/AppDownloadCard";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import {
  Home as HomeIcon,
  Building2,
  Grid,
  SunMoon,
  Pencil,
  History,
  Compass,
  CheckCircle2,
  Smartphone,
  Sparkles,
  Bell,
  Camera,
  CreditCard,
  Layers,
  Wand2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      {/* Header */}
      <Header />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-[#FFF4ED]/30 to-[#fafafa]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
              <Badge variant="orange" className="shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen AI Architectural Studio</span>
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.1]">
                Redefine Any Space with{" "}
                <span className="text-[#FF7E2C] underline decoration-[#FF7E2C]/30">
                  AI Precision
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4b5563] max-w-[55ch] leading-relaxed">
                Transform interiors, exteriors, flooring styles, lighting scenarios, and architectural sketches into photorealistic 3D renders in seconds.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
                <Button href="#download" variant="primary" size="lg" className="w-full sm:w-auto">
                  <Smartphone className="w-5 h-5" />
                  <span>Download Ai Interior App</span>
                </Button>
                <Button href="#studio-console" variant="outline" size="lg" className="w-full sm:w-auto">
                  <Wand2 className="w-5 h-5 text-[#FF7E2C]" />
                  <span>Try Live AI Studio Demo</span>
                </Button>
              </div>

              {/* Social Proof Badges */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/80 w-full justify-center lg:justify-start text-xs text-[#575e70]">
                <div className="flex items-center gap-1 font-bold text-[#111827]">
                  <span className="text-amber-500">★★★★★</span>
                  <span>4.9 / 5.0</span>
                </div>
                <span>•</span>
                <span>Over 500,000+ AI Renders Created</span>
              </div>
            </div>

            {/* Right Interactive Mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <HeroDeviceMockup />
            </div>
          </div>
        </section>

        {/* Metrics & Trust Proof Strip */}
        <section className="w-full bg-[#f3f4f6] py-12 border-y border-[#e5e7eb]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                label="Active Usage & Renders"
                value="500K+"
                description="Spatial interior, exterior & flooring designs synthesized with zero loss in resolution."
              />
              <MetricCard
                label="Architectural Style Match"
                value="99.4%"
                description="Verified material fidelity across Japandi, Scandinavian, Modern Minimalist, and Luxury styles."
                highlightValue
              />
              <MetricCard
                label="Inference Velocity"
                value="<3 Seconds"
                description="Ultra low-latency neural image synthesis direct from mobile cloud GPUs."
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full bg-[#fafafa] py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2 max-w-[65ch]">
                <span className="text-xs font-bold text-[#FF7E2C] uppercase tracking-wider">
                  5 Core AI Features &amp; Workflows
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
                  Comprehensive Architectural Toolkit
                </h2>
                <p className="text-base text-[#4b5563]">
                  Choose between Option 1 (Image Upload + Style Picker) or Option 2 (Text Prompt) across all core spatial tools.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#575e70] text-xs font-medium bg-white px-3 py-1.5 rounded-full border border-[#e5e7eb] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#FF7E2C]" />
                <span>AI Engine 2026</span>
              </div>
            </div>

            {/* Feature Cards Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<HomeIcon className="w-6 h-6" />}
                stepNumber="01"
                title="1. Interior Design"
                description="Option 1: Upload an interior image, select Room, Office, or Sitting Area, choose a style, and receive your AI design + description. Option 2: Describe your dream interior in a text prompt."
                tagText="Room, Office &amp; Sitting Area Styles"
                tagIcon={<Layers className="w-4 h-4" />}
                badgeContent="Option 1 &amp; 2 Supported"
              />
              <FeatureCard
                icon={<Building2 className="w-6 h-6" />}
                stepNumber="02"
                title="2. Exterior Design"
                description="Option 1: Upload your exterior image, pick building type (Home, Apartment, Office), select architectural style, and get instant render + specs. Option 2: Generate from text prompts."
                tagText="Home, Apartment &amp; Commercial"
                tagIcon={<Layers className="w-4 h-4" />}
                badgeContent="Option 1 &amp; 2 Supported"
              />
              <FeatureCard
                icon={<Grid className="w-6 h-6" />}
                stepNumber="03"
                title="3. Floor Restyle"
                description="Option 1: Upload floor image, select material (Vinyl Flooring, Marble, Ceramic Tiles, Hardwood), choose style, and view redesigned floor render. Option 2: Text prompt restyle."
                tagText="Vinyl, Marble, Hardwood &amp; Tiles"
                tagIcon={<Layers className="w-4 h-4" />}
                badgeContent="Option 1 &amp; 2 Supported"
              />
              <FeatureCard
                icon={<SunMoon className="w-6 h-6" />}
                stepNumber="04"
                title="4. Change Scenario"
                description="Option 1: Upload scenario photo, pick lighting (Day, Night, Sunset, Golden Hour) to transform mood and atmosphere with AI. Option 2: Explain lighting in prompt."
                tagText="Day, Night &amp; Sunset Transformations"
                tagIcon={<Layers className="w-4 h-4" />}
                badgeContent="Option 1 &amp; 2 Supported"
              />
              <FeatureCard
                icon={<Pencil className="w-6 h-6" />}
                stepNumber="05"
                title="5. Sketch Rendering"
                description="Explain your architectural sketch or hand-drawn concept via text prompt, and receive a photorealistic 3D render with material descriptions."
                tagText="Architectural Sketch to 3D"
                tagIcon={<Layers className="w-4 h-4" />}
                badgeContent="Prompt Mode"
              />
              <FeatureCard
                icon={<History className="w-6 h-6" />}
                stepNumber="06"
                title="Design History Vault"
                description="Every generated interior, exterior, flooring, and sketch design is automatically saved to your history vault for quick comparison and redownloading."
                tagText="Auto-Saved Project Vault"
                tagIcon={<CheckCircle2 className="w-4 h-4" />}
                badgeContent="History Included"
              />
            </div>
          </div>
        </section>

        {/* Inspirations & App Features Highlight Banner */}
        <section className="w-full bg-[#FFF4ED]/60 py-16 border-y border-[#FFD8C2]/60">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-[60ch]">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#FF7E2C]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7E2C]">
                  Curated Design Inspirations
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#111827]">
                Explore Endless Architectural Inspirations
              </h3>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Browse through hundreds of curated interior themes, trending architectural color schemes, material pairings, and prompt ideas right inside the Ai Interior mobile app screen.
              </p>
            </div>
            <Button href="#studio-console" variant="primary" size="lg" className="shrink-0">
              <Compass className="w-5 h-5" />
              <span>Browse Inspirations</span>
            </Button>
          </div>
        </section>

        {/* Permissions & Subscription Section */}
        <section className="w-full bg-white py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col gap-12">
            <div className="flex flex-col items-center text-center gap-3 max-w-[65ch] mx-auto">
              <span className="text-xs font-bold text-[#FF7E2C] uppercase tracking-wider bg-[#FFF4ED] px-3 py-1 rounded-full border border-[#FFD8C2]">
                App Privileges &amp; Subscriptions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">
                Transparent App Permissions &amp; Pricing
              </h2>
              <p className="text-sm text-[#4b5563]">
                Ai Interior operates with strict user privacy and transparent billing tiers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#fafafa] rounded-2xl p-7 border border-[#e5e7eb] flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFF4ED] text-[#FF7E2C] flex items-center justify-center">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#111827]">Image &amp; Gallery Access</h3>
                <p className="text-xs text-[#575e70] leading-relaxed">
                  Requested to allow uploading your interior, exterior, floor, or scenario photos (Option 1) and updating your user profile photo.
                </p>
              </div>

              <div className="bg-[#fafafa] rounded-2xl p-7 border border-[#e5e7eb] flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFF4ED] text-[#FF7E2C] flex items-center justify-center">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#111827]">Notification Access</h3>
                <p className="text-xs text-[#575e70] leading-relaxed">
                  Requested to send system push notifications whenever long-running AI render synthesis or inspiration updates complete.
                </p>
              </div>

              <div className="bg-[#fafafa] rounded-2xl p-7 border border-[#e5e7eb] flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFF4ED] text-[#FF7E2C] flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#111827]">Flexible Subscriptions</h3>
                <p className="text-xs text-[#575e70] leading-relaxed">
                  Choose between Weekly, Monthly, and Yearly subscription options for unlimited high-resolution rendering and full feature access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive AI Studio Console */}
        <AiInteriorStudioConsole />

        {/* App Download Section */}
        <section id="download" className="w-full bg-[#fafafa] py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col items-center text-center gap-12">
            {/* Header */}
            <div className="flex flex-col items-center gap-2 max-w-[60ch]">
              <span className="text-xs font-semibold text-[#FF7E2C] uppercase tracking-wider">
                Mobile App Deployment
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
                Download Ai Interior App
              </h2>
              <p className="text-base text-[#4b5563]">
                Available on iOS and Android for mobile designers and homeowners.
              </p>
            </div>

            {/* Download Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]">
              <AppDownloadCard
                platformIcon={
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.35-.56.65-.98 1.7-0.86 2.72.99.08 1.96-.47 2.58-1.22z" />
                  </svg>
                }
                rating="4.9"
                reviewCount="18k"
                subtitle="iOS Ecosystem"
                title="Download on the App Store"
                description="Optimized for Apple Neural Engine with low-latency GPU dispatch."
                buttonText="Get for iOS"
                buttonIcon={<Smartphone className="w-4 h-4" />}
                badge="Weekly, Monthly, Yearly"
              />

              <AppDownloadCard
                platformIcon={
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.52 14.83L14.75 13.06L4.79 23.02C5.07 23.16 5.39 23.22 5.72 23.15C6.18 23.05 6.6 22.8 7.02 22.56L16.52 14.83ZM16.52 9.17L7.02 1.44C6.6 1.2 6.18 0.95 5.72 0.85C5.39 0.78 5.07 0.84 4.79 0.98L14.75 10.94L16.52 9.17ZM20.16 11.22L17.58 9.73L15.46 11.85L17.58 13.97L20.16 12.48C20.68 12.18 21 11.63 21 11.02C21 10.41 20.68 9.86 20.16 11.22Z" />
                  </svg>
                }
                rating="4.8"
                reviewCount="24k"
                subtitle="Android Ecosystem"
                title="Get it on Google Play"
                description="Engineered with Vulkan C++ acceleration for fast spatial rendering."
                buttonText="Get for Android"
                buttonIcon={<Smartphone className="w-4 h-4" />}
                badge="Weekly, Monthly, Yearly"
              />
            </div>

            <p className="text-xs text-[#575e70]">
              Compatible with iOS 16.0+ and Android 12.0+. Free tier &amp; premium subscriptions available.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

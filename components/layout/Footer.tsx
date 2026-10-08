import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-800 pb-12">
          {/* Left Brand Details */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo-icon.svg"
                alt="Ai Interior Logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <span className="text-xl font-extrabold tracking-tight">Ai Interior</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The ultimate AI architectural & interior design platform. Transform interiors, exteriors, flooring, scenarios, and sketches in seconds.
            </p>
          </div>

          {/* Right Navigation Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm">Company</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#FF7E2C] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/delete-account"
                    className="hover:text-[#FF7E2C] transition-colors"
                  >
                    Delete Account
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm">Legal & Policies</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-[#FF7E2C] transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#FF7E2C] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright © 2026{" "}
            <a
              href="http://www.appnayatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline font-medium"
            >
              AppNaya Technologies
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>iOS &amp; Android App</span>
            <span>•</span>
            <span>Weekly, Monthly &amp; Yearly Subscriptions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

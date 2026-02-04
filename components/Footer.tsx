import React from "react";
import { Link } from "react-router-dom";

import { Facebook, Twitter, Instagram, Youtube, Zap } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className="font-heading font-bold text-xl">
                PRASTUTI '26
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              The annual fest of Electrical Engineering Department, IIT (BHU),
              Varanasi. Igniting minds, illuminating futures.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/sponsors"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>IIT (BHU), Varanasi</li>
              <li>Uttar Pradesh, India - 221005</li>
              <li>prastuti@itbhu.ac.in</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 Prastuti IIT BHU. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

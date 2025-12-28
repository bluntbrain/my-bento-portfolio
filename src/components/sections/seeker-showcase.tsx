"use client";

import React from "react";
import { Card } from "../ui/card";
import { ArrowRight, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SeekerShowcase() {
  return (
    <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5 overflow-hidden relative">
      {/* gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />

      {/* header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-black" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-primary">Solana Seeker Apps</h3>
            <p className="text-gh-400 text-xs">My apps on the dApp Store</p>
          </div>
        </div>
        <Link
          href="/seeker"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30"
        >
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* apps preview */}
      <div className="grid grid-cols-2 gap-3 relative z-10">
        {/* nearme card */}
        <div className="bg-gh-800 rounded-xl border border-gh-700 p-3 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">NM</span>
            </div>
            <div>
              <h4 className="font-bold text-base text-white">NearMe</h4>
              <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded text-[10px] font-medium">
                Live
              </span>
            </div>
          </div>
          <p className="text-gray-300 text-sm line-clamp-2">
            Google Maps for Solana - discover & pay merchants
          </p>
        </div>

        {/* onesol card */}
        <div className="bg-gh-800 rounded-xl border border-gh-700 p-3 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-black text-xs font-bold">1S</span>
            </div>
            <div>
              <h4 className="font-bold text-base text-white">OneSOL</h4>
              <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[10px] font-medium">
                Soon
              </span>
            </div>
          </div>
          <p className="text-gray-300 text-sm line-clamp-2">
            Trading terminal with swaps & NFT rewards
          </p>
        </div>
      </div>

      {/* solana seeker badge */}
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
        <Image src="/images/solana.svg" alt="Solana" width={14} height={14} />
        <span>Available on Solana dApp Store 2.0</span>
      </div>
    </Card>
  );
}

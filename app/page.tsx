"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Orb from "@/components/orb";
import Transcriber from "@/components/transcriber";
import useVapi from "@/hooks/use-vapi";

export default function Home() {
  const { conversation, toggleCall, isSessionActive } = useVapi();

  return (
    <main className="flex flex-col h-full items-center justify-between p-4">
      <div className="flex flex-col gap-5 text-center">
        <div className="text-4xl font-medium tracking-tighter">
          Web Demo
        </div>
        <button
          onClick={toggleCall}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary shadow hover:bg-indigo/30 hover:text-indigo h-9 px-4 py-2"
        >
          {isSessionActive ? "Stop Call" : "Start Call"}
        </button>
      </div>
      
      {/* <div className="relative flex justify-center items-center w-full max-w-4xl aspect-video">
        <div className="w-full h-full">
          <Orb />
        </div>
      </div> */}

      <div className="w-full max-w-4xl h-[400px]">
        <Transcriber conversation={conversation} />
      </div>
    </main>
  );
}

"use client";

interface PlanTabsProps {
  activeTab: "today" | "saved";
  onChange: (tab: "today" | "saved") => void;
}

export default function PlanTabs({
  activeTab,
  onChange,
}: PlanTabsProps) {
  return (
    <div className="flex border-b border-white/10">
      <button
        type="button"
        onClick={() => onChange("today")}
        className={`border-b-2 px-5 py-4 text-xs font-black uppercase tracking-[0.15em] transition ${
          activeTab === "today"
            ? "border-[#ccff00] text-[#ccff00]"
            : "border-transparent text-zinc-500 hover:text-white"
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        type="button"
        onClick={() => onChange("saved")}
        className={`border-b-2 px-5 py-4 text-xs font-black uppercase tracking-[0.15em] transition ${
          activeTab === "saved"
            ? "border-[#ccff00] text-[#ccff00]"
            : "border-transparent text-zinc-500 hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>
  );
}
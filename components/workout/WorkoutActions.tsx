"use client";

import { Bookmark, Check, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface WorkoutActionsProps {
  workoutName: string;
}

export default function WorkoutActions({
  workoutName,
}: WorkoutActionsProps) {
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleAdd = () => {
    setAdded(true);

    toast.success(`${workoutName} added to today's plan`);
  };

  const handleSave = () => {
    setSaved(true);

    toast.success(`${workoutName} saved for later`);
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleAdd}
        disabled={added}
        className="inline-flex items-center justify-center gap-2 bg-[#ccff00] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#d8ff33] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {added ? <Check size={17} /> : <Plus size={17} />}

        {added ? "Added to Plan" : "Add to Today's Plan"}
      </button>

      <button
        type="button"
        onClick={handleSave}
        disabled={saved}
        className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {saved ? <Check size={17} /> : <Bookmark size={17} />}

        {saved ? "Saved" : "Save for Later"}
      </button>
    </div>
  );
}
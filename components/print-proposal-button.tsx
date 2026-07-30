"use client";

export function PrintProposalButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm text-white transition-colors duration-300 hover:bg-graphite"
    >
      Print / Save PDF
    </button>
  );
}

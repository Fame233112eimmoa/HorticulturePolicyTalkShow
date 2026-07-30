import type { Metadata } from "next";

import { StudioFacilitySection } from "@/components/studio-facility-section";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Studio 04 setup, podcast facility bundle, and uploaded studio-option videos for the Horticulture Business Platform proposal.",
};

export default function StudioPage() {
  return (
    <>
      <StudioFacilitySection />
    </>
  );
}

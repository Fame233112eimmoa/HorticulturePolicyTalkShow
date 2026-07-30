import type { Metadata } from "next";

import { PostProductionSection } from "@/components/post-production-section";

export const metadata: Metadata = {
  title: "Post-Production",
  description:
    "Dedicated post-production page covering editorial, synchronisation, audio enhancement, colour work, graphics, mastering, and final delivery.",
};

export default function PostProductionPage() {
  return (
    <>
      <PostProductionSection />
    </>
  );
}

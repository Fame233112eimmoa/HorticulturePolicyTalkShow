import type { Metadata } from "next";

import { ContactApprovalSection } from "@/components/contact-approval-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact and approval page for package selection, proposal questions, revisions, and next-step confirmation.",
};

export default function ContactPage() {
  return (
    <>
      <ContactApprovalSection />
    </>
  );
}

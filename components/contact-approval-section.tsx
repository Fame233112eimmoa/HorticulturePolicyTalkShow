"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  approvalActions,
  contactDetails,
  formatCurrency,
  getBudgetPackage,
  socialLinks,
} from "@/lib/proposal-data";
import { getMediaAsset } from "@/lib/media-library";

type FormValues = {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const initialValues: FormValues = {
  fullName: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export function ContactApprovalSection() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const selectedSelectionRef = useRef<string | null>(null);

  const allContactLinks = useMemo(
    () => [...contactDetails, ...socialLinks],
    [],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedPackageId = params.get("package");
    const selectedStudioId = params.get("studio");

    const selectionKey = `${selectedPackageId ?? ""}|${selectedStudioId ?? ""}`;

    if (
      selectionKey === "|" ||
      selectionKey === selectedSelectionRef.current
    ) {
      return;
    }

    const selectedPackage = selectedPackageId
      ? getBudgetPackage(selectedPackageId)
      : null;
    const selectedStudio = selectedStudioId
      ? getMediaAsset(selectedStudioId)
      : null;

    if (!selectedPackage && !selectedStudio) {
      return;
    }

    const messageParts: string[] = [];

    if (selectedPackage) {
      messageParts.push(
        `We would like to proceed with ${selectedPackage.format} ${selectedPackage.optionLabel} - ${selectedPackage.title} (${formatCurrency(selectedPackage.total)}).`,
      );
    }

    if (selectedStudio) {
      messageParts.push(
        `Our preferred studio choice is ${selectedStudio.title}.`,
      );
    }

    messageParts.push("Please share the next steps for approval and scheduling.");

    setFormValues((current) => ({
      ...current,
      message: messageParts.join(" "),
    }));
    setSubmitted(false);
    setStatusMessage(
      selectedPackage && selectedStudio
        ? `${selectedPackage.title} and ${selectedStudio.title} have been selected. The message below was updated for approval.`
        : selectedPackage
          ? `${selectedPackage.title} has been selected. The message below was updated for approval.`
          : `${selectedStudio?.title} has been selected. The message below was updated for approval.`,
    );
    selectedSelectionRef.current = selectionKey;
    messageRef.current?.focus();
  }, []);

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
    setSubmitted(false);
  }

  function handleAction(label: string) {
    if (label === "Approve Proposal") {
      updateField(
        "message",
        formValues.message ||
          "We would like to approve the preferred production package and proceed with the next production steps.",
      );
      setStatusMessage("Approval message drafted in the form below.");
      messageRef.current?.focus();
      return;
    }

    if (label === "Contact Lifestyle Studios") {
      setStatusMessage("Use the form below to discuss the proposal or request revisions.");
      nameRef.current?.focus();
      return;
    }

    window.open("/proposal", "_blank", "noopener,noreferrer");
    setStatusMessage(
      "The printable proposal has been opened in a new tab. Use the browser print dialog to save it as a PDF.",
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setStatusMessage(
      "Your message has been prepared in the interface. Connect this form to your preferred backend or email workflow when ready.",
    );
  }

  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="page-kicker">Contact And Approval</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Let&apos;s Produce Something Exceptional
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-graphite sm:text-lg">
              If one of the proposal packages meets your expectations, use the
              approval and contact options below to confirm the preferred
              package or share revisions before production scheduling is
              finalised.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {approvalActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => handleAction(action.label)}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-line bg-white px-5 py-3 text-sm text-ink transition-colors duration-300 hover:border-ink hover:bg-surface"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    {action.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-line bg-white px-5 py-5">
              <p className="font-display text-2xl text-ink">Approval Options</p>
              <div className="mt-4 space-y-3">
                {approvalActions.map((action) => (
                  <p key={action.label} className="text-sm leading-7 text-graphite">
                    <span className="text-ink">{action.label}:</span>{" "}
                    {action.description}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {allContactLinks.map((item) => {
                const Icon = item.icon;
                const external =
                  item.href.startsWith("http://") ||
                  item.href.startsWith("https://");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="rounded-[1.5rem] border border-line bg-white px-5 py-5 transition-colors duration-300 hover:border-ink"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-proposal text-graphite">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-ink">{item.value}</p>
                  </a>
                );
              })}
            </div>
          </div>

          <article className="rounded-[2rem] border border-line bg-white p-8 shadow-panel sm:p-10">
            <h3 className="font-display text-3xl text-ink">Proposal Contact Form</h3>
            <p className="mt-4 text-sm leading-7 text-graphite">
              Use the form to approve a package, ask questions, or request
              adjustments before production dates are confirmed.
            </p>

            <form
              id="contact-form"
              className="mt-8 space-y-5"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="full-name"
                  className="text-sm text-ink"
                >
                  Full name
                </label>
                <input
                  id="full-name"
                  ref={nameRef}
                  type="text"
                  required
                  value={formValues.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                  className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label
                  htmlFor="company-name"
                  className="text-sm text-ink"
                >
                  Company name
                </label>
                <input
                  id="company-name"
                  type="text"
                  value={formValues.companyName}
                  onChange={(event) =>
                    updateField("companyName", event.target.value)
                  }
                  className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                  placeholder="Enter company name"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-sm text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formValues.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone-number" className="text-sm text-ink">
                    Phone number
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    value={formValues.phoneNumber}
                    onChange={(event) =>
                      updateField("phoneNumber", event.target.value)
                    }
                    className="mt-2 w-full rounded-2xl border border-line px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="proposal-message" className="text-sm text-ink">
                  Message
                </label>
                <textarea
                  id="proposal-message"
                  ref={messageRef}
                  required
                  value={formValues.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  className="mt-2 min-h-40 w-full rounded-2xl border border-line px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
                  placeholder="Share approval, questions, or revision requests"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-graphite"
                >
                  Send Proposal Response
                </button>

                <Link
                  href="/proposal"
                  className="inline-flex items-center gap-2 text-sm text-graphite transition-colors duration-300 hover:text-ink"
                >
                  Open printable proposal
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </form>

            <div
              aria-live="polite"
              className="mt-6 rounded-[1.5rem] border border-line bg-surface px-5 py-4 text-sm leading-7 text-graphite"
            >
              {statusMessage ??
                "The form interface is active and ready for backend integration."}
            </div>

            {submitted ? (
              <p className="mt-4 text-sm text-accent">
                Form completed in the proposal interface.
              </p>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  );
}

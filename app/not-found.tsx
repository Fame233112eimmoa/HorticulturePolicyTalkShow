import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-surface">
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center lg:px-8">
        <p className="page-kicker">Page Not Found</p>
        <h1 className="mt-4 font-display text-5xl text-ink sm:text-6xl">
          This page is not available.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-graphite sm:text-lg">
          Return to the proposal overview or continue through the dedicated
          pages for scope, studio, equipment, crew, budget, gallery, and
          contact.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

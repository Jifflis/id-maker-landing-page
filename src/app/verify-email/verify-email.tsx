"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type VerificationState =
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

type VerifyEmailProps = {
  token: string;
};

const apiBaseUrl = (
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.id-makers.com"
).replace(/\/$/, "");

export function VerifyEmail({ token }: VerifyEmailProps) {
  const requestStarted = useRef(false);
  const [state, setState] = useState<VerificationState>({ status: "loading" });

  useEffect(() => {
    if (requestStarted.current) return;
    requestStarted.current = true;

    if (!token.trim()) {
      setState({
        status: "error",
        message: "This verification link is missing its token.",
      });
      return;
    }

    async function verify() {
      try {
        const response = await fetch(`${apiBaseUrl}/api/auth/email/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = (await response.json().catch(() => ({}))) as {
          message?: string;
          error?: string;
        };

        if (!response.ok) {
          throw new Error(
            data.message ??
              data.error ??
              "This verification link is invalid or has expired.",
          );
        }

        setState({
          status: "success",
          message: data.message ?? "Your email has been verified.",
        });
      } catch (error) {
        setState({
          status: "error",
          message:
            error instanceof Error
              ? error.message.replaceAll("_", " ")
              : "We could not verify your email. Please try again.",
        });
      }
    }

    void verify();
  }, [token]);

  if (state.status === "loading") {
    return (
      <div className="mt-10 text-center" aria-live="polite">
        <span className="mx-auto block h-12 w-12 animate-spin rounded-full border-4 border-blue-400/25 border-t-blue-400" />
        <h1 className="mt-7 text-2xl font-bold">Verifying your email</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Please keep this page open for a moment.
        </p>
      </div>
    );
  }

  const success = state.status === "success";
  return (
    <div className="mt-10 text-center" aria-live="polite">
      <div
        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
          success
            ? "bg-emerald-400/15 text-emerald-300"
            : "bg-rose-400/15 text-rose-300"
        }`}
        aria-hidden="true"
      >
        <span className="text-3xl">{success ? "✓" : "!"}</span>
      </div>
      <h1 className="mt-7 text-2xl font-bold">
        {success ? "Email verified" : "Verification failed"}
      </h1>
      <p className="mt-3 text-sm leading-6 text-slate-300">{state.message}</p>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {success
          ? "You can close this page and sign in to ID Maker."
          : "Request a new verification email from the sign-in screen if this link has expired."}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Return to ID Maker
      </Link>
    </div>
  );
}

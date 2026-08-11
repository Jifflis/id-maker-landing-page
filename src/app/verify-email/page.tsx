import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { VerifyEmail } from "./verify-email";

export const metadata: Metadata = {
  title: "Verify your email | ID Maker",
  description: "Verify the email address associated with your ID Maker account.",
};

type VerifyEmailPageProps = {
  searchParams: Promise<{ token?: string | string[] }>;
};

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  const params = await searchParams;
  const token = Array.isArray(params.token) ? params.token[0] : params.token;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-12 text-slate-100">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-blue-950/40 sm:p-10">
        <Link href="/" aria-label="Return to ID Maker home">
          <Image
            src="/logo_with_name.svg"
            alt="ID Maker"
            width={190}
            height={64}
            priority
            className="mx-auto h-auto"
          />
        </Link>

        <VerifyEmail token={token ?? ""} />
      </section>
    </main>
  );
}

import { ReactNode } from "react";

interface SectionProps {
  title: string;
  content: ReactNode;
}

function Section({ title, content }: SectionProps) {
  return (
    <section className="mb-8 pb-6 border-b border-gray-200 last:border-none last:pb-0">
      <h2 className="text-gray-700 text-xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-3">{content}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const sections: SectionProps[] = [
    {
      title: "1. No Account or Login Required",
      content: (
        <p>
          You can use the app without creating an account. We do not ask for
          your name, email, or any login credentials.
        </p>
      ),
    },
    {
      title: "2. Local-Only Data Storage",
      content: (
        <>
          <p>
            All data you enter for ID cards (names, photos, etc.) is saved{" "}
            <strong>only on your device’s local storage</strong>.
          </p>
          <p>
            We <strong>do not</strong> upload or store your personal data on any
            server.
          </p>
        </>
      ),
    },
    {
      title: "3. Device ID Collection",
      content: (
        <>
          <p>
            We collect your <strong>device ID</strong> for internal technical
            purposes like:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 marker:text-[#005a9c]">
            <li>Identifying crash reports</li>
            <li>Debugging errors</li>
            <li>Monitoring logs</li>
          </ul>
          <p>
            This data is never shared or linked to your personal identity.
          </p>
        </>
      ),
    },
    {
      title: "4. Error Logging and Diagnostics (Bugfender)",
      content: (
        <>
          <p>
            We use <strong>Bugfender</strong>, a tool that helps us detect bugs
            and crashes in real-time. It may collect:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 marker:text-[#005a9c]">
            <li>App logs and crash details</li>
            <li>Device model and OS</li>
            <li>Device ID (anonymized)</li>
          </ul>
          <p>
            These logs help us troubleshoot issues and improve reliability.
            Bugfender does not access any personal ID card data you create in
            the app.
          </p>
          <p>
            Learn more:{" "}
            <a
              href="https://bugfender.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005a9c] hover:underline"
            >
              Bugfender Privacy Policy
            </a>
          </p>
        </>
      ),
    },
    {
      title: "5. No Ads, No In-App Purchases",
      content: (
        <p>
          Our app is <strong>100% free</strong> to use. There are no ads, no
          subscriptions, and no in-app purchases.
        </p>
      ),
    },
    {
      title: "6. Your Consent",
      content: (
        <p>
          By using this app, you agree to the terms outlined in this Privacy
          Policy.
        </p>
      ),
    },
    {
      title: "7. Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be reflected in the app or published on our official site.
        </p>
      ),
    },
    {
      title: "8. Contact Us",
      content: (
        <>
          <p>
            If you have questions or concerns about your privacy, please contact
            us at:
          </p>
          <p className="font-semibold">jifflisotomier@gmail.com</p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm opacity-90">
            <span className="font-semibold">Effective Date:</span> August 5, 2025
          </p>
          <p className="text-sm opacity-90">
            <span className="font-semibold">App Name:</span> ID Maker
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          {sections.map((section) => (
            <Section key={section.title} {...section} />
          ))}
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 text-center text-gray-500 text-sm py-4 border-t">
          &copy; 2025 ID Maker. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
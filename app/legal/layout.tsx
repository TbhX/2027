import { BackButton } from "@/components/back-button";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <BackButton />
      {children}
    </div>
  );
}
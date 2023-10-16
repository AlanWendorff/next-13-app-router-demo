import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="shadow">{children}</div>;
}

import { Metadata } from "next";
import Client from "./Client";

export const metadata: Metadata = {
  title: "Jorge H. Dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Client>{children}</Client>;
}

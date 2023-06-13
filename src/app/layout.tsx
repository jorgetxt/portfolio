"use client";
import "./globals.css";
import React from "react";
import ThemeProvider from "../components/ThemeContext";
import "../i18n/i18n";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en" className={"main"}>
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}

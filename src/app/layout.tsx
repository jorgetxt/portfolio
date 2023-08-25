"use client";
import "./globals.css";
import React from "react";
import ThemeProvider from "../components/ThemeContext";
import "../i18n/i18n";
import "pathseg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jorge H. Dev",
  description: "Portfolio",
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

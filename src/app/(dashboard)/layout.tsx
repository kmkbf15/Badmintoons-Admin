import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen flex flex-col">
      <div className="w-full bg-main-color-5">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retro Typing Trainer — Learn Typing with Classic Novels",
  description: "Gamified typing practice using classic literature. Track your WPM, earn achievements, and improve your typing speed with timeless passages."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e48a3025-185e-4906-9641-0de3795edf5a"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

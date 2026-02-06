import { DM_Sans } from "next/font/google";
import "./global.css";
import { Providers } from "@/components/providers";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Quiet Hire — AI-Powered Recruitment",
  description:
    "Streamline your recruitment process, automate tasks, and hire top talent faster with Quiet Hire's AI-powered ATS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

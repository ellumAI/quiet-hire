import "@hackhyre/ui/globals.css";
import { Providers } from "@/components/providers";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontBricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable}  ${fontBricolage.variable} font-mono antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

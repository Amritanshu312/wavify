import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserInfoState } from "@/context/userInfoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wavify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <UserInfoState>
            <Navbar />
            {children}
          </UserInfoState>

          <Toaster />
          <ToastContainer draggable theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}

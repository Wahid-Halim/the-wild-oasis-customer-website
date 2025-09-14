// app/layout.js
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
});

import "@/app/_styles/globals.css";
import { ReservationProvider } from "./_context/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100  min-h-screen flex flex-col antialiased`}
      >
        <Header />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

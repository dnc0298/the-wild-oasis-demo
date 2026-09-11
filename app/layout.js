import Header from "./_components/Header";

import { Diplomata, Josefin_Sans, Josefom_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  //title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxuryious cabin, hotel, located in the heart of the italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`bg-primary-900 min-h-screen text-primary-100 ${josefin.className} flex flex-col `}
      >
        <Header />

        <div className=" flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto  w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

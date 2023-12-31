import "./globals.css";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Verbify",
  description: "",
  icons: {
    icon: "./gitpt-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1B1C1E] text-[#c8c8c8] font-montserrat">
        <nav className="flex h-[100px] text-[14px] items-center px-[3rem] justify-between">
          { <Link href="/">
            <Image
              src="/vibewire_white.png"
              alt="verbify-logo"
              width={170}
              height={68}
              className="cursor-pointer text-white"
            />
          </Link> }

          <div className="flex gap-[3rem] items-center">
            <Link
              href="/"
              className="cursor-pointer hover:text-white transition-all"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="cursor-pointer hover:text-white transition-all"
            >
              Smart Contract
            </Link>
            <Link
              href="/about"
              className="cursor-pointer hover:text-white transition-all"
            >
              About
            </Link>
            <Link
              href="/marketplace"
              className="cursor-pointer hover:text-white transition-all"
            >
              Marketplace
            </Link>
            {/* <Link
              href="/explore"
              className="font-bold bg-white text-[#1B1C1E] px-[1.5rem] py-[1rem] rounded-md cursor-pointer hover:bg-[rgba(0,0,0,0)] hover:text-white hover:fill-white border-[1px] transition-all"
            >
              Explore Marketplace
            </Link> */}
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Bunjil Care Service | NDIS Provider in Perth, WA",
  description:
    "Bunjil Care Service is a Perth-based disability support provider helping NDIS participants across Dayton, Midland and the Swan Valley live more independently.",
  keywords: [
    "NDIS provider Perth",
    "disability support services Perth",
    "NDIS Dayton WA",
    "Swan Valley disability support",
  ],
  icons: {
    icon: "/images/bunjil-logo-transparent.png",
    shortcut: "/images/bunjil-logo-transparent.png",
    apple: "/images/bunjil-logo-transparent.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* HEADER (ONLY ONCE) */}
        <Header />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />

        {/* Floating NDIS Logo */}
        <div className="fixed bottom-20 right-5 z-50 lg:bottom-25">
          <img
            src="/images/ndislogos.png"
            alt="NDIS"
            className="h-auto w-20 drop-shadow-lg"
          />
        </div>
      </body>
    </html>
  );
}
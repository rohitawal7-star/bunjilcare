import "./globals.css";

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
        {children}

        {/* Floating NDIS Logo */}
        <div className="fixed lg:bottom-25 bottom-5 right-5 z-50">
          <img
            src="/images/ndislogos.png"
            alt="NDIS"
            className="w-20 h-auto drop-shadow-lg"
          />
        </div>
      </body>
    </html>
  );
}
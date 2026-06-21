import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0077b6] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Brand */}
        <div>
          <p className="text-lg font-bold tracking-wide">
            Bunjil Care Service
          </p>
          <p className="mt-1 text-sm text-sky-100">
            NDIS support across Dayton, Perth's eastern suburbs and the Swan Valley.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/rukesh.paun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-500 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-500 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-400 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-black hover:scale-110"
            aria-label="X"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-4 text-center text-xs text-sky-100">
        © {new Date().getFullYear()} Bunjil Care Service. All rights reserved.
      </div>
    </footer>
  );
}
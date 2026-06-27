import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-[#0077b6] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Brand & NDIS Badge */}
          <div>
            <h3 className="text-2xl font-bold">Bunjil Care Service</h3>

            
              {/* Registered NDIS Provider Badge */}
          <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077b6] text-white">
              <CheckCircleIcon className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Registered NDIS Provider
              </p>
              <p className="text-xs text-slate-500">
                Delivering trusted disability support services across Perth
              </p>
            </div>
          </div>
           

            <p className="mt-4 max-w-md text-sm leading-relaxed text-sky-100">
              Providing compassionate, person-centred NDIS support services
              across Dayton, Perth's eastern suburbs and the Swan Valley,
              helping participants live independently and achieve their goals.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/rukesh.paun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-blue-500"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-black"
              aria-label="X"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-sky-100">
          © {new Date().getFullYear()} Bunjil Care Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
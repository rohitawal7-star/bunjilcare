import { useState } from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ popup states
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setPopupMessage("Message sent successfully! Our Team will contact you soon. Thank you");
        setShowPopup(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setPopupMessage("Failed to send message.");
        setShowPopup(true);
      }
    } catch (error) {
      console.error(error);
      setPopupMessage("Something went wrong.");
      setShowPopup(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.85fr_1fr] lg:px-6">
        
        {/* LEFT SIDE */}
        <div>
          <p className="section-kicker">Contact Us</p>

          <h2 className="section-title">
            Get in touch with Bunjil Care Service
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you are an NDIS participant, family member, support
            coordinator or just asking questions before deciding anything, we
            are happy to talk.
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:+61452584305" className="contact-link">
              <PhoneIcon className="h-5 w-5" />
              0452 584 305
            </a>

            <a
              href="mailto:enquiries@bunjilcareservice.com.au"
              className="contact-link"
            >
              <EnvelopeIcon className="h-5 w-5" />
              enquiries@bunjilcareservice.com.au
            </a>

            <p className="contact-link">
              <MapPinIcon className="h-5 w-5" />
              Dayton, WA 6055
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-3xl border border-slate-100 bg-[#f7fbfa] p-5 shadow-sm sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="form-field">
              Name
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>

            <label className="form-field">
              Contact Number
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
              />
            </label>
          </div>

          <label className="form-field">
            Email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label className="form-field">
            Comment or Message
            <textarea
              rows={5}
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what support you are looking for"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-[#0077b6] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-[#0077b6]/25 transition hover:-translate-y-0.5 hover:bg-[#03045e] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>
        </form>
      </div>

      {/* ✅ POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[90%] max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
            
            <p className="mb-5 text-lg font-semibold text-slate-800">
              {popupMessage}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="rounded-full bg-[#0077b6] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#005f91]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
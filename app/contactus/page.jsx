"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  phone: z
    .string()
    .regex(/^(\+61|0)[2-9]\d{8}$/, "Enter a valid Australian phone number"),

  email: z.string().email("Enter a valid email address"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setPopupMessage(
          "Message sent successfully! Our Team will contact you soon.",
        );

        setShowPopup(true);

        reset();
      } else {
        setPopupMessage("Failed to send message.");
        setShowPopup(true);
      }
    } catch (err) {
      console.error(err);
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
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4 rounded-3xl border border-slate-100 bg-[#f7fbfa] p-5 shadow-sm sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="form-field">
              Name
              <input
                type="text"
                placeholder="Your name"
                {...register("name")}
                className={`${
                  errors.name ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              />
              {errors.name && (
                <span className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>

            <label className="form-field">
              Contact Number
              <input
                type="tel"
                placeholder="0452 584 305"
                {...register("phone")}
                className={`${
                  errors.phone ? "border-red-500 ring-1 ring-red-500" : ""
                }`}
              />
              {errors.phone && (
                <span className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>

          <label className="form-field">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className={`${
                errors.email ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            />
            {errors.email && (
              <span className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>

          <label className="form-field">
            Comment or Message
            <textarea
              rows={5}
              placeholder="Tell us what support you are looking for"
              {...register("message")}
              className={`${
                errors.message ? "border-red-500 ring-1 ring-red-500" : ""
              }`}
            />
            {errors.message && (
              <span className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </span>
            )}
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

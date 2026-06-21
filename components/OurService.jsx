import { useState } from "react";
import {
  CheckCircleIcon,
  HeartIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "../components/ScrollReveal";
const services = [
  {
    title: "Assisted living",
    short: "Daily living support in a home that suits the participant.",
    detail:
      "Accommodation-based support for people who need help with cooking, cleaning, personal care, budgeting, routines and staying safe at home.",
    icon: HomeModernIcon,
  },
  {
    title: "Community Nursing",
    short:
      "Registered nurses delivering clinical care at home or in community.",
    detail:
      "Medication management, wound care, health monitoring, catheter and PEG care, plus liaison with GPs, specialists and allied health teams.",
    icon: HeartIcon,
  },
  {
    title: "Support Coordination",
    short: "Plain-language help to understand and use your NDIS plan well.",
    detail:
      "We connect participants with suitable providers, coordinate supports, prepare for reviews and build confidence to manage more independently.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Community Support",
    short: "Practical support to stay active and connected locally.",
    detail:
      "Shopping, appointments, transport, social activities, local events and one-on-one outings around Midland, Guildford, Bassendean and the Swan area.",
    icon: UserGroupIcon,
  },
  {
    title: "Mentoring & Coaching",
    short: "Confidence, life skills and independence built step by step.",
    detail:
      "Mentors work beside participants on budgeting, cooking, transport, social confidence, study, training and employment goals.",
    icon: SparklesIcon,
  },
  {
    title: "In-Home Support",
    short: "Everyday help with personal care, meals and routines.",
    detail:
      "Support with showering, dressing, grooming, meal preparation, laundry, light cleaning, medication prompts and safe daily routines.",
    icon: CheckCircleIcon,
  },
];

const OurService = () => {
  const [activeService, setActiveService] = useState(0);
  const ActiveIcon = services[activeService].icon;

  return (
    <section id="services" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="rounded-[2rem] bg-[#0077b6] px-5 pb-0 pt-10 text-white shadow-xl shadow-[#0077b6]/20 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
            {/* LEFT SIDE */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-100">
                Our Services
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                NDIS supports across Perth and the Swan Valley
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex min-h-full flex-col justify-between">
              {/* empty top space (or future content) */}
              <div></div>

              {/* paragraph pushed to bottom */}
              <p className="max-w-2xl text-lg leading-8 text-white/85 mt-auto lg:self-end">
                From everyday in-home help to clinical nursing care and support
                coordination, we shape each service around the participant,
                their routines and their goals.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 pb-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal key={service.title} delay={index * 0.1} y={50}>
                  <button
                    type="button"
                    onClick={() => setActiveService(index)}
                    aria-label={`View ${service.title}`}
                    aria-pressed={activeService === index}
                    className={`min-h-[190px] w-full rounded-2xl bg-white p-6 text-left shadow-lg transition hover:-translate-y-1 ${
                      activeService === index ? "ring-4 ring-sky-800/25" : ""
                    }`}
                  >
                    <Icon className="h-9 w-9 text-[#0077b6]" />

                    <h3 className="mt-5 text-xl font-black text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {service.short}
                    </p>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 rounded-3xl border border-[#0077b6]/15 bg-[#caf0f8] p-6 md:grid-cols-[auto_1fr] md:p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0077b6] shadow-sm">
            <ActiveIcon className="h-9 w-9" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0077b6]">
              Selected service
            </p>
            <h3 className="mt-2 text-3xl font-black text-slate-900">
              {services[activeService].title}
            </h3>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
              {services[activeService].detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;

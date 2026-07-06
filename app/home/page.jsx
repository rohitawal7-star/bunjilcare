
import React from 'react'
import Image from "next/image";
import {
    ArrowRightIcon,
    HeartIcon,
  } from "@heroicons/react/24/outline";
  import ScrollReveal from "../../components/ScrollReveal";

  const stats = [
    ["Dayton", "Local base"],
    ["1 day", "Enquiry response"],
    ["6", "NDIS support areas"],
    ["Perth", "Metro service reach"],
  ];
const HomeBunjil = () => {
  return (
    <>
    <section
        id="home"
        className="relative isolate overflow-hidden bg-[#caf0f8] pt-28"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_35%,rgba(255,255,255,0.95),transparent_30%),linear-gradient(135deg,rgba(0,119,182,0.1),rgba(0,119,182,0.04))]" />
        <div className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_0.92fr] lg:px-6 lg:py-24">
          <div className="animate-rise">
            <p className="animate-soft-pulse inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#0077b6] shadow-sm">
              <HeartIcon className="h-4 w-4" />
              From Country to Community
            </p>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] text-slate-900 sm:text-6xl lg:text-7xl">
              Disability Support, Built Around the Life You Want
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Bunjil Care Service is a locally run disability support provider
              based in Dayton, helping NDIS participants across Midland,
              Guildford, Bassendean, Swan View, Ellenbrook, the Swan Valley and
              wider Perth live with more independence and connection.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0077b6] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-[#0077b6]/20 transition hover:-translate-y-1 hover:bg-[#03045e]"
              >
                Contact Us
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[#0077b6]/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0077b6] transition hover:-translate-y-1 hover:border-[#0077b6]/50"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative min-h-[440px] animate-float lg:min-h-[560px]">
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0077b6]/10 bg-white/50 sm:h-[500px] sm:w-[500px]" />
            <div className="animate-logo-glow absolute inset-x-0 top-8 flex justify-center rounded-2xl ">
              <Image
                src="/images/bunjil-logo-transparent.png"
                alt="Bunjil Care Service blue logo"
                width={760}
                height={595}
                className="h-auto w-[min(100%,520px)] drop-shadow-[0_28px_42px_rgba(0,119,182,0.2)]"
                priority
              />
            </div>
            {/* <div className="absolute bottom-0 left-0 max-w-[260px] rounded-2xl bg-[#0077b6] p-5 text-white shadow-xl shadow-[#0077b6]/20 sm:left-8">
              <p className="text-sm font-bold uppercase tracking-wide text-sky-100">We Care With Purpose</p>
              <p className="mt-2 text-sm leading-6 text-white/85">Person-centred care matched to routines, goals, culture and community.</p>
            </div> */}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-12 sm:grid-cols-4 lg:px-6">
      {stats.map(([number, label], index) => (
        <ScrollReveal key={label} delay={index * 0.1} y={50}>
          <div className="rounded-2xl border border-slate-100 bg-white px-5 py-7 text-center shadow-sm">
            <p className="text-3xl font-black text-[#0077b6]">{number}</p>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              {label}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </section>
    </>
    
  )
}

export default HomeBunjil
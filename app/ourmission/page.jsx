"use client";
import React from 'react'
import ScrollReveal from "../../components/ScrollReveal";

const OurMission = () => {
  return (
    <section
        id="mission"
        className="mission-section scroll-mt-28 overflow-hidden bg-[#caf0f8] py-20"
      >
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.85fr] lg:px-6">
          <div className="relative">
            <div className="mission-watermark" aria-hidden="true" />
            <p className="section-kicker">Our Mission</p>
            <h2 className="section-title">
              Fewer barriers, more choice, and support that adds something real
              to daily life.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our mission is straightforward: to help people with disability
              live the life they want, with the support they need to get there.
              We listen first, plan second, and keep reviewing because goals and
              circumstances change.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Listening first, planning second",
              "Matching workers who fit",
              "Working alongside families and guardians",
              "Reviewing plans regularly",
              "Treating every interaction with dignity",
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.1} y={40}>
                <div className="mission-point">
                  <span className="mission-point-number">{index + 1}</span>
                  <p className="font-bold text-slate-900">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OurMission
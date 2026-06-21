import React from "react";
import ScrollReveal from "../components/ScrollReveal";

const OurCore = () => {
  const values = [
    {
      title: "Respect & Cultural Sensitivity",
      desc: "We provide NDIS disability support that respects each participant’s culture, identity, beliefs, and personal preferences to ensure truly inclusive care.",
    },
    {
      title: "Empowerment & Independence",
      desc: "We support individuals to live more independently by building everyday living skills, confidence, and self-reliance. ",
    },
    {
      title: "Inclusivity & Community Connection",
      desc: "We help participants stay connected with their community in Perth through social participation, local activities, and meaningful engagement.",
    },
    {
      title: "Compassion & Quality Care",
      desc: "We deliver compassionate, person-centred disability support services with attention to safety, dignity, and wellbeing at every step.",
    },
    {
      title: "Integrity & Accountability",
      desc: "We operate with transparency, reliable communication, and consistent NDIS-compliant care that families can trust.",
    },
    {
      title: "Innovation & Progress",
      desc: "We continuously improve our support services using modern care practices to deliver better outcomes for participants.",
    },
  ];

  return (
    <section id="values" className="scroll-mt-28 bg-[#f7fbfa] py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="max-w-3xl">
          <p className="section-kicker">Core Values</p>

          <h2 className="section-title">
            What participants and families can expect every time they work with
            us
          </h2>

          <p className="mt-4 text-slate-600">
            Our NDIS support services are built around dignity, independence,
            and community inclusion across Perth.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1} y={50}>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077b6]/10 text-sm font-black text-[#0077b6]">
                  {index + 1}
                </span>

                <h3 className="mt-5 text-xl font-black text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {value.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCore;

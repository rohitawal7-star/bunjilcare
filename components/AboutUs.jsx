import React from 'react'
import ScrollReveal from "../components/ScrollReveal";
import {
    CheckCircleIcon,
  } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <section id="about" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.85fr_1fr] lg:px-6">
          <div>
            <p className="section-kicker">About Us</p>
            <h2 className="section-title">
              Support That Starts With a Conversation, Not a Form
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              We do not believe in handing people a standard package and calling
              it support. Before anything is put in place, we sit down with you
              and your circle to talk through what actually matters: routines,
              goals, the things you want to manage yourself, and where extra
              help would make a real difference.
            </p>
            <p>
              The name Bunjil reflects steady, protective support. Our team
              includes registered nurses, support coordinators, mentors and
              in-home support workers trained in manual handling, medication
              support, complex care and cultural safety.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Consistent workers",
                "Culturally safe care",
                "Person-centred plans",
                "Perth local team",
              ].map((item, index) => (
                <ScrollReveal key={item} delay={index * 0.1} y={30}>
                  <div className="flex items-center gap-3 rounded-2xl bg-sky-50 px-4 py-4 text-base font-bold text-sky-900">
                    <CheckCircleIcon className="h-5 w-5 shrink-0 text-[#0077b6]" />
                    {item}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUs
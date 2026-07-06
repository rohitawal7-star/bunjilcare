import services from "../../../data/Servicesdata";
import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";
import ScrollReveal from "../../../components/ScrollReveal";

export function generateStaticParams() {
  return [
    { slug: "assisted-living" },
    { slug: "community-nursing" },
    { slug: "support-coordination" },
    { slug: "community-support" },
    { slug: "mentoring-coaching" },
    { slug: "in-home-support" },
  ];
}

export default function ServicePage({ params }) {
  const { slug } = params;

  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0077b6] py-20 text-white">
        <div className="relative max-w-6xl mx-auto px-4">
          <Link
            href="/ourservices"
            className="inline-flex items-center gap-2 text-white/80"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Services
          </Link>

          <div className="mt-10 flex gap-5 items-center">
            <Icon className="h-12 w-12 bg-white text-[#0077b6] p-2 rounded-xl" />

            <div>
              <h1 className="text-4xl font-black">{service.title}</h1>
              <p className="mt-2 text-white/90">{service.short}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <ScrollReveal>
            <Image
              src={service.image}
              alt={service.title}
              width={900}
              height={600}
              className="rounded-3xl w-full h-[300px] object-cover"
            />
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="text-2xl font-black">About this Service</h2>
              <p className="mt-4 text-slate-600">{service.intro}</p>

              <div className="mt-6 bg-[#caf0f8] p-6 rounded-2xl">
                <h3 className="font-bold text-xl">Who is it for?</h3>
                <p className="mt-2 text-slate-700">{service.whoItsFor}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black">What's Included</h2>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {service.whatIncluded.map((item) => (
              <div
                key={item}
                className="flex gap-3 bg-white p-4 rounded-xl shadow"
              >
                <CheckCircleIcon className="w-6 h-6 text-[#0077b6]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
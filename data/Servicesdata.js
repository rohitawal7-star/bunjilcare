import {
  CheckCircleIcon,
  HeartIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    slug: "assisted-living",
    title: "Assisted Living",
    short: "Daily living support in a home that suits the participant.",
    detail:
      "Accommodation-based support for people who need help with cooking, cleaning, personal care, budgeting, routines and staying safe at home.",
    icon: HomeModernIcon,
    image: "/images/services/assisted-living.png",
    intro:
      "We help participants live comfortably and safely in a home environment that's shaped around their routines, preferences and goals.",
    whoItsFor:
      "People who want to live independently but need ongoing support with daily tasks, personal care or household management.",
    whatIncluded: [
      "Help with cooking and meal preparation",
      "Cleaning and household upkeep",
      "Personal care and hygiene support",
      "Budgeting and bill management",
      "Building safe, consistent daily routines",
      "Support to stay safe and confident at home",
    ],
  },

  {
    slug: "community-nursing",
    title: "Community Nursing",
    short: "Registered nurses delivering clinical care at home or in community.",
    detail:
      "Medication management, wound care, health monitoring, catheter and PEG care, plus liaison with GPs, specialists and allied health teams.",
    icon: HeartIcon,
    image: "/images/services/community-nursing.png",
    intro:
      "Our registered nurses bring clinical, hospital-grade care into the home or community setting, so participants can receive quality treatment without unnecessary trips to hospital.",
    whoItsFor:
      "Participants with complex or ongoing health needs who require clinical care delivered by a qualified nurse.",
    whatIncluded: [
      "Medication management and administration",
      "Wound care and dressing changes",
      "Ongoing health monitoring",
      "Catheter and PEG (feeding tube) care",
      "Liaison with GPs, specialists and allied health",
      "Clinical support tailored to individual care plans",
    ],
  },

  {
    slug: "support-coordination",
    title: "Support Coordination",
    short: "Plain-language help to understand and use your NDIS plan well.",
    detail:
      "We connect participants with suitable providers, coordinate supports, prepare for reviews and build confidence to manage more independently.",
    icon: ShieldCheckIcon,
    image: "/images/services/support-coordination.png",
    intro:
      "We make the NDIS easier to navigate — translating your plan into practical action so you get the most value from your funding.",
    whoItsFor:
      "Participants who want help understanding their plan, connecting with providers, or building the skills to manage supports independently over time.",
    whatIncluded: [
      "Explaining your plan in plain language",
      "Connecting you with suitable, quality providers",
      "Coordinating supports across multiple services",
      "Preparing for plan reviews",
      "Resolving issues with service delivery",
      "Building your confidence and capacity over time",
    ],
  },

  {
    slug: "community-support",
    title: "Community Support",
    short: "Practical support to stay active and connected locally.",
    detail:
      "Shopping, appointments, transport, social activities, local events and one-on-one outings around Midland, Guildford, Bassendean and the Swan area.",
    icon: UserGroupIcon,
    image: "/images/services/community-support.png",
    intro:
      "We help participants stay active, social and connected to their local community across Midland, Guildford, Bassendean and the wider Swan area.",
    whoItsFor:
      "People who want support to get out, stay social, and take part in everyday community life.",
    whatIncluded: [
      "Shopping and errands",
      "Transport to appointments",
      "Social activities and outings",
      "Local community events",
      "One-on-one companion support",
      "Support building local connections and routines",
    ],
  },

  {
    slug: "mentoring-coaching",
    title: "Mentoring & Coaching",
    short: "Confidence, life skills and independence built step by step.",
    detail:
      "Mentors work beside participants on budgeting, cooking, transport, social confidence, study, training and employment goals.",
    icon: SparklesIcon,
    image: "/images/services/mentoring-coaching.png",
    intro:
      "Our mentors work alongside participants, building practical skills and confidence at a pace that suits them.",
    whoItsFor:
      "Participants working towards greater independence — whether that's daily living skills, study, training or employment goals.",
    whatIncluded: [
      "Budgeting and money management skills",
      "Cooking and household skills",
      "Using public transport confidently",
      "Building social confidence",
      "Support with study or training goals",
      "Steps towards employment readiness",
    ],
  },

  {
    slug: "in-home-support",
    title: "In-Home Support",
    short: "Everyday help with personal care, meals and routines.",
    detail:
      "Support with showering, dressing, grooming, meal preparation, laundry, light cleaning, medication prompts and safe daily routines.",
    icon: CheckCircleIcon,
    image: "/images/services/in-home-support.png",
    intro:
      "We provide hands-on, everyday support so participants can maintain their routines, dignity and independence at home.",
    whoItsFor:
      "People who need regular, reliable help with personal care and household tasks to live comfortably at home.",
    whatIncluded: [
      "Showering, dressing and grooming support",
      "Meal preparation",
      "Laundry and light cleaning",
      "Medication prompts",
      "Safe daily routines",
      "Consistent, respectful in-home care",
    ],
  },
];

export default services;
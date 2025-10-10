"use client";

import React from "react";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";

// ----------------------------------------------------------------------
type SocialPlatform = "instagram" | "linkedin" | "github" | "behance" | "web";

type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

type Person = {
  name: string;
  role: string;
  img: string;
  socials?: SocialLink[];
};

const people: Person[] = [
  {
    name: "Adharsh",
    role: "Full-Stack Developer",
    img: "/people/adharsh.jpg",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/adharsh.r/" },
    ],
  },
  {
    name: "Adhyayan",
    role: "Software Engineer / Dev",
    img: "/people/adhyayan.jpg",
    socials: [{ platform: "github", url: "https://github.com/Adhyayanpradhan" }],
  },
  {
    name: "Adil",
    role: "Designer / Photographer",
    img: "/people/adil.jpg",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/_adil_hamza/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/adilhamza12" },
      { platform: "behance", url: "https://www.behance.net/adilhamza1" },
    ],
  },
  {
    name: "Aman",
    role: "Full-Stack Developer",
    img: "/people/aman.jpg",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/mr__aman044/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/amankr128e" },
      { platform: "github", url: "https://github.com/Amankumar977" },
    ],
  },
  {
    name: "Anil",
    role: "Co-founder",
    img: "/people/anil.jpg",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/anil-nair-43880a3a/" },
    ],
  },
  {
    name: "Bijoy",
    role: "Designer / Photographer",
    img: "/people/bijoy.jpg",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/vampirethoran/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/vampirethoran/" },
      { platform: "behance", url: "https://www.behance.net/vampirethoran" },
    ],
  },
  {
    name: "Girish",
    role: "Co-Founder",
    img: "/people/girish.jpg",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/girish-pallagatti/" },
    ],
  },
  {
    name: "Hashim",
    role: "Full-Stack Developer",
    img: "/people/hashim.jpg",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/hashim-full-stack-developer/" },
      { platform: "github", url: "https://github.com/hashme7" },
    ],
  },
  { name: "Hrithin", role: "Full-Stack Developer", img: "/people/hrithin.jpg" },
  { name: "Orange", role: "Office Cat", img: "/people/orange.jpg" },
  { name: "Rukmani", role: "Cook and Caretaker", img: "/people/rukmani.jpg" },
  {
    name: "Rishabh",
    role: "Full-Stack Developer",
    img: "/people/rishabh.jpg",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/rishabh0049/" },
      { platform: "github", url: "https://github.com/rishabh0049" },
    ],
  },
  {
    name: "Rishi",
    role: "Full-Stack Developer",
    img: "/people/rishi.jpg",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/ris__hi_/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/rishi-releesh-42892a206" },
      { platform: "github", url: "https://github.com/rishi-beneathatree" },
    ],
  },
  {
    name: "Rohit",
    role: "Co-Founder",
    img: "/people/rohit.jpg",
    socials: [{ platform: "linkedin", url: "https://www.linkedin.com/in/rohitshetty00/" }],
  },
  {
    name: "Sachin",
    role: "Co-Founder",
    img: "/people/sachin.jpg",
    socials: [{ platform: "linkedin", url: "https://www.linkedin.com/in/sachin-phatak/" }],
  },
  { name: "Sagar", role: "Operations Manager", img: "/people/sagar.jpg" },
  {
    name: "Shabeera",
    role: "Full-Stack Developer",
    img: "/people/shabeera.jpg",
  },
  {
    name: "Sharikh",
    role: "Full-Stack Developer",
    img: "/people/sharikh.jpg",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/sharikhahmed17/" },
      { platform: "github", url: "https://github.com/sharikhBat" },
    ],
  },
  { name: "Shashank", role: "Co-Founder", img: "/people/shashank.jpg" },
  {
    name: "Sumit",
    role: "Full-Stack Developer",
    img: "/people/sumit.jpg",
    socials: [
      { platform: "web", url: "https://www.sumitsute.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/sumitsute/" },
      { platform: "github", url: "https://github.com/sutesumit" },
    ],
  },
  {
    name: "Srinidhi",
    role: "Co-Founder",
    img: "/people/srinidhi.jpg",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/srinidhiprahlad/" },
    ],
  },
  {
    name: "Tasavour",
    role: "Full-Stack Developer",
    img: "/people/tasavour.jpg",
    socials: [
      { platform: "web", url: "https://syedtasavour.me/" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/syedtasavour" },
      { platform: "github", url: "https://github.com/syedtasavour" },
    ],
  },
  { name: "Tharun", role: "Full-Stack Developer", img: "/people/tharun.jpg" },
  {
    name: "Vijay",
    role: "Cook and Caretaker",
    img: "/people/vijay.jpg",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/vijayraikwar124/" },
    ],
  },
  { name: "Yaana", role: "Office Administrator", img: "/people/yaana.jpg" },
];

// ----------------------------------------------------------------------

export default function OurPeople() {
  // Sort once (stable)
  const sorted = React.useMemo(
    () => [...people].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  // Respect prefers-reduced-motion: reduce or disable animation
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(!!mq?.matches);
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);

  const iconMap: Record<SocialPlatform, string> = {
    instagram: "/icons/instagram.svg",
    linkedin: "/icons/linkedin.svg",
    github: "/icons/github.svg",
    behance: "/icons/behance.svg",
    web: "/icons/web.svg",
  };

  // JSON-LD: ItemList of Person (basic properties)
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sorted.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: p.name,
        jobTitle: p.role,
        image: `https://beneathatree.com${p.img}`, // change to your domain
      },
    })),
  };

  return (
    <div className="bg-[#F4FAF9] min-h-screen px-4 sm:px-6 py-12 sm:py-16">
      {/* JSON-LD for People listing */}
      <Script id="our-people-jsonld" type="application/ld+json">
        {JSON.stringify(jsonld)}
      </Script>

      <div className="max-w-6xl mx-auto">
        <h1 className="font-figtree font-bold text-3xl sm:text-4xl lg:text-[50px] text-black text-center tracking-tight mt-[80px] sm:mt-12 mb-8 sm:mb-12">
          Our People
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {sorted.map((person, idx) => {
            const Card = (
              <div
                className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.03] hover:ring-1 hover:ring-[#D0EAE2]
                transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-full max-w-sm mx-auto bg-white"
                style={{ height: 420 }}
              >
                {/* Image block: fixed-height container to avoid CLS */}
                <div className="relative w-full" style={{ height: 265 }}>
                  <Image
                    src={person.img}
                    alt={`${person.name} — ${person.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                <div
                  className="flex flex-col justify-between items-start px-4 sm:px-6 pt-4 pb-4 bg-white rounded-b-lg"
                  style={{ height: 155 }}
                >
                  <div>
                    <h2 className="font-figtree font-semibold text-2xl sm:text-3xl lg:text-[40px] text-black leading-none tracking-tight">
                      {person.name}
                    </h2>
                    <p className="font-figtree font-medium text-sm sm:text-base lg:text-[17px] text-[#888888] mt-2 tracking-tight">
                      {person.role}
                    </p>
                  </div>

                  {person.socials && (
                    <div className="flex gap-3 mt-4">
                      {person.socials.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener nofollow external"
                          className="w-8 h-8 rounded-full bg-[#EAEAEA] flex items-center justify-center"
                          aria-label={`${person.name} on ${link.platform}`}
                        >
                          <Image
                            src={iconMap[link.platform]}
                            alt={link.platform}
                            width={20}
                            height={20}
                            className="opacity-50"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );

            // Animate unless reduced motion is requested
            return reduced ? (
              <div key={person.name + idx}>{Card}</div>
            ) : (
              <motion.div
                key={person.name + idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.07,
                }}
              >
                {Card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

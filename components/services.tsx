"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const servicesData = [
  {
    id: "electrical",
    title: "Electrical Engineering Services",
    items: [
      "High Tension Electrical Intake Infrastructure System",
      "Low Tension Electrical Reticulation System",
      "Lighting & Small Power Services System",
      "Lightning & Earthing Protection System",
      "Essential Supply Distribution System",
      "Road & Compound Lighting System",
      "Telephone & Communication System",
      "Network Infrastructure & ICT System",
      "Security Alarm & CCTV Surveillance System",
      "Public Address, Audio-Visual & Sound System",
      "SMATV System",
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering Services",
    items: [
      "Air Conditioning & Mechanical Ventilation System",
      "Lift & Escalator System",
      "Fire Fighting Protection System",
      "Mechanical Handling & Storage Racking System",
      "Compressed Air, LPG & Gases System",
      "Hot & Cold Water System",
      "Process Piping & Air System",
      "Plumbing & Sanitary System",
    ],
  },
  {
    id: "other",
    title: "Other Services",
    items: [
      "Economic, Financial & Technical Feasibility Studies",
      "Program & Project Management",
      "Plant Design, Specifications and Equipment Selection",
      "Project Planning, Engineering & Procurement",
      "Inspection & Testing",
      "Review & Implementation of Operational & Maintenance System",
      "Construction Management, Commissioning & Initial Operation",
      "Quality Assurance Assessment",
      "Due Diligence Services",
    ],
  },
]

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="services" className="py-16 px-5">
      <h2 className="text-center text-2xl font-bold mb-6">Our Services</h2>
      <div className="max-w-[1100px] mx-auto space-y-2">
        {servicesData.map((service) => (
          <div key={service.id} className="border-b border-black/5 py-2">
            <button
              onClick={() => setOpenId(openId === service.id ? null : service.id)}
              className="w-full text-left p-4 rounded-lg bg-white border border-black/5 font-bold text-base cursor-pointer flex justify-between items-center hover:border-[#00A651]/20 transition-colors"
            >
              {service.title}
              {openId === service.id ? (
                <Minus className="text-[#00A651] ml-3" size={18} />
              ) : (
                <Plus className="text-[#00A651] ml-3" size={18} />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openId === service.id ? "max-h-[600px] py-3 px-4" : "max-h-0"}`}
            >
              <ul className="list-none p-0 m-0 columns-1 md:columns-2 gap-7">
                {service.items.map((item, idx) => (
                  <li key={idx} className="py-1.5 text-gray-500 text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

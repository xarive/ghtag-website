"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const clienteleData = [
  {
    id: "industrial",
    title: "Industrial",
    sections: [
      {
        heading: "Electronic Industries",
        items: [
          "Hitachi Semiconductor (M) Sdn Bhd",
          "Natsteel Electronics (M) Sdn Bhd",
          "AKN Bhd",
          "Sony EMCS Sdn Bhd",
          "Opulent Sdn Bhd",
          "Ibiden Electronics Malaysia Sdn Bhd",
          "Crest Ultrasonics Sdn Bhd",
          "Comintel Bhd",
          "Caltronics Sdn Bhd",
        ],
      },
      {
        heading: "Food Process",
        items: ["Tiga Gajah Cho-Heng Sdn Bhd", "Jeen Huat Foodstuffs Industries Sdn Bhd", "Alno Industry Sdn Bhd"],
      },
      {
        heading: "Medical Products",
        items: ["Bard Sdn Bhd", "Winwa Medical Sdn Bhd", "Vigilenze Medical"],
      },
      {
        heading: "Chemical Products",
        items: [
          "Euro Chemo-Pharma Sdn Bhd",
          "Acidchem International Sdn Bhd",
          "Widetech Sdn Bhd",
          "BLC Sdn Bhd",
          "Yuasa Battery Sdn Bhd",
          "Frontken Malaysia Sdn Bhd",
        ],
      },
    ],
  },
  {
    id: "residential",
    title: "Residential High Rise / Low Rise",
    sections: [
      {
        heading: "Boon Siew Group",
        items: [
          "Harmony Residence, 1 Block 36-Storey 29 units condo",
          "Mira Residence, 2 Block 33-Storey 323 units condo",
          "Raffel Tower, 2-Block 28-storey 260 units condo",
          "Middleton, 2-Block 32-storey 220 units condo",
          "Central Avenue, 1 Block 30-storey 780 unit LMC",
          "Granito, 2 Block-49 Storey 980 units affordable home",
          "2-Permai, 144 Units 3-Storey Terrace Houses",
          "Permai Gardens, 162 Units 3-Storey Villas Houses",
          "Raffel Residence, 199 Units 3-Storey Terrace Houses",
          "Water Stone, 1 Block 34-Storey 343 units condo",
        ],
      },
      {
        heading: "SP Setia Group",
        items: [
          "The Pinnacle, 1 Block 39-Storey 434 units condo",
          "Setia Sky Vista, 2 Block 32-Storey 426 units condo",
          "V-Residence, 2 Block 48-Storey 180 units condo",
          "Sky Ville, 2 Block 33-storey 550 units condo",
          "Setia Green 1 & 2, landed development",
          "Setia Vista 1 & 2, landed development",
          "Amansara North, Setia Fontaines, landed development",
          "Setia Suria, Setia Fontaines, landed development",
        ],
      },
      {
        heading: "IJM Land Berhad",
        items: [
          "Light Point, 1-Block 28-Storey 80 units condo",
          "Light Collection II, 5-Block 5-storey 300 units Resort condo",
          "Waterside Residence, 3-Block 33-storey 256 units condo",
          "The Mezzo, 2-Block 37-storey 315 units condo",
          "Light Water, 2-Block 28 Storey 262 unit Condo",
          "Bayouri, Mixed landed development",
        ],
      },
      {
        heading: "GSD Group",
        items: [
          "Sky Cube, 2-Block 38-Storey 544 units condo",
          "Sierra Residence, 1-Block 25-storey 323 units condo",
          "Garden Ville, 1-Block 24-storey 476 units condo",
          "Corfield, 1 Block 34 Storey 397 units condo",
          "Ara Kuda mixed landed development",
          "Pavillion Everise mixed landed development",
          "G'Vinton, 1 Block 39-Storey 508 units Service Apt",
          "D'Starlington, 1 Block 40 Storey 820 units condo",
          "D'Tiara, 1 Block 25 Storey 230 unit apartment",
        ],
      },
      {
        heading: "Ideal Group",
        items: [
          "Ideal Residency, 1-Block 49-Storey 1218 units RMM",
          "Havana, 3-Block 55-storey 1342 units RMM",
          "Ideal Venice, 2-Block 46-storey 1632 units RMM",
          "Maldives, 3-Block 47-storey 1665 units RMM",
        ],
      },
      {
        heading: "Hunza Group",
        items: [
          "PICC Muze, 2 block 58-storey 846 units condo",
          "PICC Senze, 3 block 52-storey 1698 units condo",
          "Seri Bayu, 191 units Terrace House development",
          "Seri Embun, 250 units Terrace House development",
        ],
      },
      {
        heading: "EXSIM Group",
        items: [
          "Macalisterz, 1-Block 36-Storey 418 Units Service Apt",
          "Noordinz, 1-Block 29-storey 603 units Service Apt",
          "Lighthauz, 1-Block 57-storey 671 units Service Apt",
          "Keeperz, 4-Block 20-storey 493 units Service Apt",
        ],
      },
      {
        heading: "Monoland Group",
        items: [
          "8 Gurney, 2-Block 37-Storey 90 Units Condo",
          "Quadro, 1-Block 37-storey 240 units condo, KL",
          "V-Pod, 1-Block 37-storey 340 units condo, KL",
          "SOHO, 40 Storey (480 Units) Service Apt, KL",
        ],
      },
      {
        heading: "Eco World Group",
        items: [
          "Eco Terraces, 1 Block 34-Storey 333 units condo",
          "Eco Meadows, Gated landed 375 units",
          "Eco Bloom, 2-Block 34-storey 490 units",
        ],
      },
      {
        heading: "Nusmetro City Group",
        items: [
          "Oasis, 2-Block 30-storey 491 units apartment",
          "Pulse, 1-Block 29-storey 196 units apartment",
          "Arte-S, 2-Block 48-storey 340 units condo",
        ],
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial / Hotels / Public Sector",
    sections: [
      {
        heading: "Commercial",
        items: [
          "Tesco Taiping, hypermarket",
          "Tesco Semenyih, hypermarket",
          "Tesco Prai, hypermarket",
          "Tesco SP Selatan, hypermarket",
          "Tesco Kulim, hypermarket",
          "Aeon Big Alor Setar, hypermarket",
          "SP Setia - sPICE Convention Center",
          "Penang Interchange City 1 & 2, Ideal Group",
          "Setia Fontaines Commercial Hub 1 & 2, SP Setia Group",
          "GBS Techspace, PDC",
          "Tree Square, BSG Group",
          "Feringgi Walk, VST Group",
          "The H2O tower, Jelutong",
          "Beaver Commercial Hub, Kulim",
        ],
      },
      {
        heading: "Hotels / Resorts / Tourism",
        items: [
          "Entopia, Butterfly and Insect Farm",
          "Boulder Valley, glamping resort",
          "Weld Quay hotel, boutique hotel",
          "Corronade Hotel Retrofit, KL",
          "Red Rock Hotel",
          "Hotel Abu Sittee Lane",
          "Westin Hotel, Penang",
          "Queens Marriot Hotel, Ideal Group",
          "Ascott Harris Hotel, Beaver Group",
          "Penang Hill Visitors Gallery, PHC",
        ],
      },
      {
        heading: "Institution / Hospital / Convention",
        items: [
          "Tenby International School",
          "POWIIS International School",
          "Melaka Straits Medical Center Melaka, Oriental Group",
          "Nursing College at Melaka, Oriental Group",
          "SPICE, Convention Center, SP Setia Group",
          "True Light Primary School",
          "Tar Thong Primary School",
          "Eden at Botanica CT, MTT Group",
        ],
      },
      {
        heading: "Public Sector",
        items: [
          "Pembinaan Pengkalan Polis Marin & Associated building, KDN",
          "Upgrading Works of Sungai Pinang, JPS",
          "New Gate House at Butterworth Port, PPC",
          "Rehabilitation of Slipway at Butterworth Port, Penang",
          "Replacement of Existing Lifts, USM",
          "Market Redevelopment, MBSP",
          "Lebuhraya Kembar Paya Terubong, MBPP",
          "Nibong Tebal Bomba Sukarela",
        ],
      },
    ],
  },
  {
    id: "planning",
    title: "Master Planning / Commercial City & Mix-Development",
    sections: [
      {
        heading: "",
        items: [
          "Bandar Perda (500 acres), Aseania Group (1996, HCT)",
          "The Lights (32 ac), IJM Group (2005, GHC)",
          "Setia Peral Island (100ac), (2006, GHC)",
          "SPICE, SP Setia Group (2010)",
          "Setia Fontains Development (1,600ac), SP Setia (2017)",
          "Sg Tiram Development (40ac), Ideal Group (2017)",
          "Penang International Exchange (40ac), Ideal Group (2018)",
          "Globalview Industrial Park@KIC, Kulim (220ac) (Globalview)",
          "Penang Technology Park@Bertam (845ac) (Ideal Group)",
          "Padang Serai Township (140ac) (Globalview)",
        ],
      },
    ],
  },
  {
    id: "fitout",
    title: "Interior Fit-Out, Renovation & Retrofit",
    sections: [
      {
        heading: "",
        items: [
          "Citibank at Menara Citibank, KL (300,000 ft2) (2000-2019)",
          "Citi Group CTSM at CST, KL (140,000 ft2)",
          "Citi Group CTSM at 1-Precint, PG (65,000ft2)",
          "Citi Group CTSM at Menara MPG, PG (90,000ft2)",
          "Citibank Sales & Branch Office at KL, Selangor, JB, Ipoh, PG",
          "CIMB Bank Branch Office at Central & North Region (50 Branches)",
          "CIMB Securities Office at Penang, Melaka & Sg Petani",
          "HSBC at Jalan Pasar, KL (45,000ft2)",
          "HSBC Branches at PG, KL, Selangor",
          "Talisman Group HQ at Menara Citibank, KL (60,000ft2)",
          "Sime Darby Leadership Center at Oasis, Selangor (30,000ft2)",
          "Wilmar International Group at 1-Precint, Penang (30,000ft2)",
          "Air Asia Penang offices at 1-Precinct (45,000 ft2)",
          "Tesco Penang retrofit",
          "British Council Penang",
          "HIS offices at Menara KWSP (42,000 ft2)",
          "BSG Sales Gallery at Permai & Northam Road",
          "Setia Welcome Center, SP Setia",
          "Sales Gallery Macalister Road, Eco World Group",
          "Sales Gallery Eco Terraces & Meadows",
          "PICC sales Gallery, Hunza Group",
          "Setia Experience Center, SP Setia Group",
        ],
      },
    ],
  },
  {
    id: "heritage",
    title: "Heritage / Park Fit-out, Renovation & Retrofit",
    sections: [
      {
        heading: "",
        items: [
          "Ying Oi Tong at Little India, Penang",
          "Co-office and Micro-housing, Lebuh Acheh, BHL Group",
          "Armenia Park, Lebuh Armenia, Think City",
          "Sia Boay Archaeology Park, Prangin Road, GTWHI",
          "Harmony Center, Scotland Road, CMI",
          "Syed Al-Attas Mansion, Lebuh Armenia, Think City",
          "Restoration of Kimberly Street Shop House 92-102A, MBPP",
          "Gua Kepah Archaeological Gallery",
        ],
      },
    ],
  },
  {
    id: "special",
    title: "Special & Miscellaneous Projects",
    sections: [
      {
        heading: "",
        items: [
          "Smoke Detector System, for Citibank Offices at Singapore (2001)",
          "Due Diligence for Menara Lion, Kuala Lumpur (2000)",
          "Diagnosis Study of Mechanical Services at Sheraton Perdana Hotel, Kota Bharu",
          "Diagnosis Study of Mechanical Services at USM",
          "Sg Muara Power Station, Brunei",
          "Kota Tinggi Detention Center, Prisons Dept",
          "CIQ Immigration Control Post at KLIA-2, Immigration Dept",
        ],
      },
    ],
  },
]

export function Clientele() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="clientele" className="max-w-[1200px] mx-auto py-8 px-5">
      <h2 className="text-center text-2xl font-bold mb-6">Our Clientele</h2>
      <div className="space-y-2">
        {clienteleData.map((category) => (
          <div key={category.id} className="border-b border-black/5 py-2">
            <button
              onClick={() => setOpenId(openId === category.id ? null : category.id)}
              className="w-full text-left p-4 rounded-lg bg-white border border-black/5 font-bold text-base cursor-pointer flex justify-between items-center hover:border-[#00A651]/20 transition-colors"
            >
              {category.title}
              {openId === category.id ? (
                <Minus className="text-[#00A651] ml-3" size={18} />
              ) : (
                <Plus className="text-[#00A651] ml-3" size={18} />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openId === category.id ? "max-h-[2000px] py-3 px-4" : "max-h-0"}`}
            >
              {category.sections.map((section, idx) => (
                <div key={idx} className="mb-4">
                  {section.heading && (
                    <h3 className="text-base font-semibold underline underline-offset-4 mb-2">{section.heading}</h3>
                  )}
                  <ul className="list-disc ml-5 p-0 columns-1 md:columns-2 gap-7">
                    {section.items.map((item, i) => (
                      <li key={i} className="py-1 text-gray-500 text-[15px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

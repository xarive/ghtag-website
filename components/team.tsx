export function Team() {
  const leftColumn = [
    {
      title: "Directors",
      members: ["Ir Teh Khian Beng", "Ir Tai Lian Pong", "Lim See Kong"],
    },
    {
      title: "Associates",
      members: ["Lee You Wan", "Foong Chia Sing", "Ir Lim Yean Tit", "Ir Loh Wei Kiat"],
    },
    {
      title: "Engineers",
      members: ["Ng Kai He", "Sim Xuan Wei"],
    },
    {
      title: "Project Exec / IOW",
      members: ["Eruwan Bin Yahya", "Hamizi Bin Abu Seman", "Muhamad Nazrul"],
    },
  ]

  const rightColumn = [
    {
      title: "Contract Administration",
      members: ["Cindy Tan Kay Khi", "Fernny Chee Fung Yun"],
    },
    {
      title: "ACAD Designer",
      members: ["Mah Seok Chin", "Tan Chew Ha", "Tan Moey Leng"],
    },
    {
      title: "Associate Companies",
      members: [
        "WGC Consultant - Ir Chua Wei Ghee",
        "KNS Consultant Sdn Bhd - Ir Wan Shuhaimi Bin Wan Daud",
        "Maha Konsult - Ir Abdul Majid Bin Noor Mohd",
        "ABA Jurutera Perunding - Ir Azman Bin Akop",
      ],
    },
  ]

  return (
    <section id="team" className="max-w-[1200px] mx-auto py-8 px-5">
      <h2 className="text-center text-2xl font-bold mb-6">Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          {leftColumn.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold underline underline-offset-4 mb-2">{group.title}</h3>
              <ul className="list-none p-0 m-0">
                {group.members.map((member) => (
                  <li key={member} className="py-1.5 text-gray-500 font-semibold">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {rightColumn.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold underline underline-offset-4 mb-2">{group.title}</h3>
              <ul className="list-none p-0 m-0">
                {group.members.map((member) => (
                  <li key={member} className="py-1.5 text-gray-500 font-semibold">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Clientele } from "@/components/clientele"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0b1220]">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Clientele />
      <Contact />
      <Footer />
    </div>
  )
}

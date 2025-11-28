export function Contact() {
  return (
    <section id="contact" className="py-16 px-5 text-center">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <p className="text-lg my-2">
        Email:{" "}
        <a href="mailto:ghtag@ghtag.com.my" className="text-[#00A651] font-bold no-underline hover:underline">
          ghtag@ghtag.com.my
        </a>
      </p>
      <p className="text-lg my-2">
        Phone:{" "}
        <a href="tel:+6042270833" className="text-[#00A651] font-bold no-underline hover:underline">
          +604-227 0833
        </a>
      </p>
    </section>
  )
}

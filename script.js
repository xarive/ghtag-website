document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("yr").textContent = new Date().getFullYear()

  const toggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector(".nav")

  toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex"
  })
})

// IntersectionObserver for fade-up elements (staggered reveal)
;(() => {
  try {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".fade-up").forEach((el) => el.classList.add("is-visible"))
      return
    }
    const els = document.querySelectorAll(".fade-up")
    if ("IntersectionObserver" in window && els.length) {
      const io = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible")
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12 },
      )
      els.forEach((el) => io.observe(el))
    } else {
      // fallback: show immediately
      els.forEach((el) => el.classList.add("is-visible"))
    }
  } catch (e) {
    console.warn("Animation observer failed", e)
  }
})()

// Accordion behaviour for Services
;(() => {
  function togglePanel(btn, panel, open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false")
    if (open) {
      panel.classList.add("is-open")
      panel.style.maxHeight = panel.scrollHeight + "px"
    } else {
      panel.classList.remove("is-open")
      panel.style.maxHeight = 0
    }
  }

  document.querySelectorAll(".accordion-toggle").forEach((btn) => {
    const panelId = btn.getAttribute("aria-controls")
    const panel = document.getElementById(panelId)
    if (!panel) return
    // initialize collapsed
    panel.style.maxHeight = 0
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true"
      // close any other open panels
      document.querySelectorAll('.accordion-toggle[aria-expanded="true"]').forEach((other) => {
        if (other !== btn) {
          const otherPanel = document.getElementById(other.getAttribute("aria-controls"))
          togglePanel(other, otherPanel, false)
        }
      })
      togglePanel(btn, panel, !expanded)
    })
  })
})()

// Header show/hide on scroll
;(() => {
  const header = document.querySelector(".site-header")
  let lastScroll = window.pageYOffset || 0
  let ticking = false
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return
        window.requestAnimationFrame(() => {
          const current = window.pageYOffset || 0
          if (current > lastScroll && current > 120) {
            header.classList.add("hidden")
          } else {
            header.classList.remove("hidden")
          }
          lastScroll = current <= 0 ? 0 : current
          ticking = false
        })
        ticking = true
      },
      { passive: true },
    )
  }

  // Add is-loaded class on load
  window.addEventListener("load", () => {
    document.documentElement.classList.add("is-loaded")
  })
})()

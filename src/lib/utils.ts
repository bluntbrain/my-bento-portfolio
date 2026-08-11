import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useRef, useState } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// scroll reveal used across the light home page sections. attach the ref to a
// wrapper and spread the class onto it: `reveal ${inView ? "in-view" : ""}`.
// once=false keeps reporting, for anything that has to react to leaving view too.
export function useInView<T extends HTMLElement>(threshold = 0.1, once = true) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, inView }
}
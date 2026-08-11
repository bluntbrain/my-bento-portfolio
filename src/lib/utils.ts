import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useRef, useState } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// one-shot scroll reveal used across the light home page sections. attach the
// ref to a wrapper and spread the class onto it: `reveal ${inView ? "in-view" : ""}`
export function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
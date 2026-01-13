"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

type Props = {
  text: string
  enabled?: boolean
  speed?: number
}


export default function TypewriterText({ text, speed = 40, enabled}: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
  if (!enabled || !inView) return

  let i = 0
  const interval = setInterval(() => {
    setDisplayedText(text.slice(0, i + 1))
    i++
    if (i >= text.length) clearInterval(interval)
  }, speed)

  return () => clearInterval(interval)
}, [enabled, inView, text, speed])


  return (
    <motion.span
      ref={ref}
      className="inline-block whitespace-pre-line"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.span>
  )
}

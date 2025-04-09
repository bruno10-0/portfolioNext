"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import clsx from "clsx"

type Props = {
  children: ReactNode
  className?: string
  delayIndex?: number
}

const AnimatedSection = ({ children, className, delayIndex = 0 }: Props) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: delayIndex * 0.1 // <-- cascada automática
      }
    }
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={clsx("w-full h-full", className)}
      >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

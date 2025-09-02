'use client'
import React, { useEffect, useRef, useState, useMemo } from 'react'

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: 'words' | 'characters'
  direction?: 'top' | 'bottom' | 'left' | 'right'
  onAnimationComplete?: () => void
  className?: string
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 150,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([])
  const ref = useRef<HTMLDivElement>(null)

  // Memoize items to avoid recalculation on every render
  const items = useMemo(() => (animateBy === 'words' ? text.split(' ') : text.split('')), [text, animateBy])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const newAnimatedItems = new Array(items.length).fill(false)
    setAnimatedItems(newAnimatedItems)

    items.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => {
          const updated = [...prev]
          updated[index] = true
          if (index === items.length - 1 && onAnimationComplete) {
            setTimeout(onAnimationComplete, 100)
          }
          return updated
        })
      }, index * delay)
    })
  }, [isVisible, items, delay, onAnimationComplete]) // added `items` to deps

  const getTransformStyle = (animated: boolean) => {
    const transforms = {
      top: animated ? 'translateY(0)' : 'translateY(-20px)',
      bottom: animated ? 'translateY(0)' : 'translateY(20px)',
      left: animated ? 'translateX(0)' : 'translateX(-20px)',
      right: animated ? 'translateX(0)' : 'translateX(20px)',
    }

    return {
      transform: transforms[direction],
      filter: animated ? 'blur(0px)' : 'blur(10px)',
      opacity: animated ? 1 : 0,
      transition: 'all 0.6s ease-out',
    }
  }

  return (
    <div ref={ref} className={className}>
      {items.map((item, index) => (
        <span key={index} style={getTransformStyle(animatedItems[index])} className="inline-block">
          {item}
          {animateBy === 'words' && index < items.length - 1 && ' '}
        </span>
      ))}
    </div>
  )
}

export default BlurText

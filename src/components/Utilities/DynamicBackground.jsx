"use client"

import { useState, useEffect } from "react"

const DynamicBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 80 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
        color: getRandomColor(),
      }))
    }

    const getRandomColor = () => {
      const colors = [
        "#3b82f6", // blue
        "#22c55e", // green
        "#a855f7", // purple
        "#06b6d4", // cyan
        "#8b5cf6", // violet
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    setParticles(generateParticles())

    const updateParticles = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Bounce off screen edges instead of wrapping
          let newSpeedX = particle.speedX
          let newSpeedY = particle.speedY

          if (newX < 0 || newX > window.innerWidth) {
            newSpeedX = -particle.speedX
            newX = Math.max(0, Math.min(window.innerWidth, newX))
          }
          if (newY < 0 || newY > window.innerHeight) {
            newSpeedY = -particle.speedY
            newY = Math.max(0, Math.min(window.innerHeight, newY))
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
          }
        }),
      )
    }, 16)

    const handleResize = () => {
      setParticles(generateParticles())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(updateParticles)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Function to calculate distance between particles
  const getDistance = (p1, p2) => {
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  // Generate connection lines between nearby particles
  const generateConnections = () => {
    const connections = []
    const maxDistance = 120

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const distance = getDistance(particles[i], particles[j])
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.15
          connections.push({
            x1: particles[i].x,
            y1: particles[i].y,
            x2: particles[j].x,
            y2: particles[j].y,
            opacity: opacity,
          })
        }
      }
    }
    return connections
  }

  const connections = generateConnections()

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      </div>

      <svg className="absolute inset-0 w-full h-full">
        {/* Connection lines */}
        {connections.map((connection, index) => (
          <line
            key={`connection-${index}`}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke="#3b82f6"
            strokeWidth="0.5"
            opacity={connection.opacity}
            className="transition-all duration-200"
          />
        ))}

        {/* Particles */}
        {particles.map((particle, index) => (
          <circle
            key={`particle-${index}`}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.color}
            opacity={particle.opacity}
            className="transition-all duration-200"
          />
        ))}
      </svg>

      <div className="absolute inset-0 backdrop-blur-[0.5px]" />
    </div>
  )
}

export default DynamicBackground

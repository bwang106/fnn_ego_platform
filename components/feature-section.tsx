import type React from "react"
import { Camera, Users, Shield, Zap, Glasses, Globe } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cutting-Edge Features</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our platform combines innovative technology with intuitive design to deliver an unparalleled remote guidance
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Camera className="h-10 w-10 text-blue-600" />}
            title="First-Person Video Streaming"
            description="Share real-time video from your perspective, enabling precise remote guidance and collaboration."
          />
          <FeatureCard
            icon={<Glasses className="h-10 w-10 text-blue-600" />}
            title="Smart Glasses Integration"
            description="Hands-free operation with smart glasses for immersive, first-person perspective sharing."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-blue-600" />}
            title="Multi-User Collaboration"
            description="Connect multiple experts and field workers in real-time for complex problem-solving."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-blue-600" />}
            title="Secure Communication"
            description="End-to-end encryption ensures your sensitive data and communications remain private."
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-blue-600" />}
            title="Low-Latency Streaming"
            description="Optimized for minimal delay, ensuring real-time guidance even in challenging network conditions."
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10 text-blue-600" />}
            title="Cross-Platform Support"
            description="Access from any device - desktop, mobile, or smart glasses - for seamless collaboration."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}


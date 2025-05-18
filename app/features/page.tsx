import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Camera, Glasses, Users, Shield, Zap, Globe } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock the Future of Remote Collaboration</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                At FNN Strategy, we redefine how professionals collaborate remotely. Our cutting-edge technology
                enhances real-time communication by leveraging first-person video streaming, smart glasses integration,
                and low-latency connectivity, ensuring efficiency and precision in every task.
              </p>
              <p className="mt-6 text-blue-200">
                Each feature below includes an interactive animation or a dedicated page where you can explore its full
                capabilities in action.
              </p>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20 bg-white">
          <div className="container">
            <FeatureCard
              number="1"
              icon={<Camera className="h-10 w-10 text-blue-600" />}
              title="First-Person Video Streaming"
              subtitle="See What They See, Instantly"
              tagline="No more fixed camera angles or handheld devices—stream directly from your perspective for unparalleled precision."
              works={[
                "Stream live video from your mobile device, computer, or smart glasses to remote experts.",
                "Remote users see exactly what you see, eliminating miscommunication and delays.",
                "High-quality, low-latency streaming ensures real-time interaction in dynamic environments.",
              ]}
              expect={[
                "Watch a real-time demo of a technician performing maintenance with remote expert guidance via first-person streaming.",
                "Learn how industries like energy, manufacturing, and medical fields are benefiting from this hands-free communication.",
              ]}
              animationDescription="A split-screen view of a field worker streaming from smart glasses while a remote expert annotates the feed with guidance."
              linkText="Explore First-Person Streaming"
              linkHref="/features/first-person-streaming"
            />

            <FeatureCard
              number="2"
              icon={<Glasses className="h-10 w-10 text-blue-600" />}
              title="Smart Glasses Integration"
              subtitle="Hands-Free, Immersive Collaboration"
              tagline="Go beyond mobile and desktop—integrate smart glasses for a truly hands-free workflow."
              works={[
                "Connect supported AR/AI-powered smart glasses to share your real-world view.",
                "Built-in eye-tracking and laser pointers allow remote experts to guide actions interactively.",
                "Ideal for industrial maintenance, field training, and medical operations.",
              ]}
              expect={[
                "View live footage from smart glasses, including gaze tracking, augmented highlights, and remote annotations.",
                "Learn how hands-free operation enables workers to maintain safety protocols while receiving guidance.",
              ]}
              animationDescription="A factory worker using smart glasses to repair a machine while a remote engineer marks components in real-time with laser guidance."
              linkText="Discover Smart Glasses Capabilities"
              linkHref="/features/smart-glasses"
              reverse
            />

            <FeatureCard
              number="3"
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Multi-User Collaboration"
              subtitle="Connect Experts and Field Workers in Real Time"
              tagline="Complex problems require real-time teamwork—collaborate remotely with multiple users."
              works={[
                "Host a live session where multiple remote experts and field workers can join.",
                "Assign a primary view to focus on one user's perspective while others provide input.",
                "Enable interactive annotations, voice commands, and video switching seamlessly.",
              ]}
              expect={[
                "Test our multi-user collaboration mode with real-time role switching (e.g., lead expert vs. observer).",
                "Explore how teams can collaboratively guide on-site workers, making faster, better-informed decisions.",
              ]}
              animationDescription="A field technician streaming from smart glasses while two remote experts highlight key areas and discuss solutions."
              linkText="Try Multi-User Collaboration"
              linkHref="/features/multi-user"
            />

            <FeatureCard
              number="4"
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title="Secure Communication"
              subtitle="Protect Your Data with End-to-End Encryption"
              tagline="Your remote operations require top-level security—our platform ensures complete data protection."
              works={[
                "End-to-end encryption (E2EE) prevents unauthorized access.",
                "Private peer-to-peer (P2P) connections ensure only authorized users can view the feed.",
                "Enterprise-ready compliance with GDPR and industry standards.",
              ]}
              expect={[
                "Learn about how we protect your sensitive communication in industrial, military, and medical applications.",
                "Explore our custom security settings for enterprise clients.",
              ]}
              animationDescription="A locked video feed transitioning into a secured, authorized session for a remote operator."
              linkText="Learn About Security"
              linkHref="/features/security"
              reverse
            />

            <FeatureCard
              number="5"
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title="Low-Latency Streaming"
              subtitle="Real-Time Guidance Without Delays"
              tagline="Time-sensitive tasks require instant feedback—our streaming is optimized for minimal lag."
              works={[
                "Uses WebRTC and AI-based network optimization to minimize lag.",
                "Adaptive bitrate technology ensures smooth video in any network condition.",
                "Keeps latency under 200ms, even in challenging environments.",
              ]}
              expect={[
                "Test our low-latency mode with different network conditions (Wi-Fi, 4G, 5G).",
                "Compare our real-time responsiveness vs. traditional video calling solutions.",
              ]}
              animationDescription="A side-by-side comparison of standard video call delays vs. our near-instantaneous low-latency streaming."
              linkText="Experience Low-Latency Streaming"
              linkHref="/features/low-latency"
            />

            <FeatureCard
              number="6"
              icon={<Globe className="h-10 w-10 text-blue-600" />}
              title="Cross-Platform Support"
              subtitle="Seamless Collaboration Across All Devices"
              tagline="Access your sessions anywhere—on desktop, mobile, or smart glasses."
              works={[
                "Use our platform on any device with a browser—no special software required.",
                "Consistent experience across desktop, mobile, and smart glasses interfaces.",
                "Automatic adaptation to different screen sizes and input methods.",
              ]}
              expect={[
                "Try switching between devices during a live session without interruption.",
                "Experience how our responsive design maintains functionality across all platforms.",
              ]}
              animationDescription="A user seamlessly transitioning from desktop to mobile to smart glasses while maintaining the same collaborative session."
              linkText="See Cross-Platform Support"
              linkHref="/features/cross-platform"
              reverse
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future of Remote Collaboration?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Try our platform today and see how FNN Strategy can transform your remote operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/video-test">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Test Video Streaming
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
                  Sign Up for Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface FeatureCardProps {
  number: string
  icon: React.ReactNode
  title: string
  subtitle: string
  tagline: string
  works: string[]
  expect: string[]
  animationDescription: string
  linkText: string
  linkHref: string
  reverse?: boolean
}

function FeatureCard({
  number,
  icon,
  title,
  subtitle,
  tagline,
  works,
  expect,
  animationDescription,
  linkText,
  linkHref,
  reverse = false,
}: FeatureCardProps) {
  return (
    <div className={`py-16 border-b border-gray-200 ${reverse ? "bg-slate-50" : "bg-white"}`}>
      <div className={`container grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:grid-flow-dense" : ""}`}>
        <div className={reverse ? "md:col-start-2" : ""}>
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mr-4">{icon}</div>
            <div>
              <div className="text-sm font-semibold text-blue-600">Feature {number}</div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-blue-800">{subtitle}</h3>
          <p className="text-lg text-gray-700 mb-6 border-l-4 border-blue-500 pl-4 py-2 italic">{tagline}</p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">How It Works:</h4>
            <ul className="space-y-2">
              {works.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">What You Can Expect:</h4>
            <ul className="space-y-2">
              {expect.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link href={linkHref}>
            <Button className="mt-4">{linkText}</Button>
          </Link>
        </div>

        <div className={`relative rounded-xl overflow-hidden shadow-lg ${reverse ? "md:col-start-1" : ""}`}>
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-blue-500">{icon}</div>
                <p className="text-sm text-gray-600">🎬 Animation: {animationDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Background with tech pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

      <div className="container relative z-10 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Revolutionizing Remote Guidance
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            FNN Strategy empowers industries through intuitive, first-person video communication, making remote
            instruction as natural and effective as being on-site.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/video-test">
            <Button size="lg" variant="outline">
              Try Video Demo
            </Button>
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative w-full max-w-5xl mt-12 rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[url('/placeholder.svg?height=720&width=1280')] bg-cover bg-center opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">First-Person Video Guidance</h3>
                <p className="text-white/80">See exactly what your remote team sees in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


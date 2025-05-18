import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pioneering the Future of Remote Collaboration</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                At FNN Strategy, we are revolutionizing the way industries interact and collaborate remotely. By
                harnessing cutting-edge first-person video streaming, laser highlighting, and gaze tracking technology,
                we empower teams to achieve unparalleled precision and efficiency—even when working from a distance.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  FNN Strategy envisions a world where physical barriers no longer hinder real-time collaboration. We
                  are committed to transforming remote guidance by:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Empowering Hands-Free Operations</h3>
                      <p className="text-gray-600">
                        Our innovative platform liberates operators, allowing them to focus on critical tasks without
                        the distraction of cumbersome devices.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Enhancing Safety & Efficiency</h3>
                      <p className="text-gray-600">
                        By providing an immersive, first-person perspective, our technology enables precise guidance,
                        reducing errors and improving safety in high-risk environments.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Driving Industry Innovation</h3>
                      <p className="text-gray-600">
                        We aim to set a new standard in industrial maintenance, training, and emergency response through
                        seamless integration of advanced smart glasses technology and AI-powered automation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 z-10"></div>
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Operator using smart glasses with digital overlays"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
                  <p className="text-white text-sm">
                    An operator using smart glasses with overlaid digital indicators while a remote expert guides them
                    in real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Outlook Section */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Company Outlook & Mission</h2>
              <p className="text-xl text-gray-700 mb-8">At FNN Strategy, our mission is clear:</p>
              <blockquote className="text-2xl font-medium italic text-blue-800 border-l-4 border-blue-500 pl-4 py-2">
                "To redefine remote collaboration through innovative technology that brings real-world precision to
                virtual environments."
              </blockquote>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Technology Integration</h3>
                <p className="text-gray-600">
                  We are continuously advancing our platform by integrating state-of-the-art hardware (smart glasses
                  with first-person cameras) and AI-driven software solutions to anticipate and meet evolving market
                  demands.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Market Expansion</h3>
                <p className="text-gray-600">
                  Initially targeting industrial maintenance and training, we foresee expansion into healthcare,
                  emergency services, and education, where effective remote guidance can make a transformative impact.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Investor Confidence</h3>
                <p className="text-gray-600">
                  Our unique technology and strategic partnerships with leading industrial and research institutions
                  position FNN Strategy at the forefront of remote collaboration innovation, promising sustainable
                  growth and long-term value creation.
                </p>
              </div>
            </div>

            <div className="mt-16 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-[21/9] bg-gradient-to-r from-blue-900 to-indigo-900">
                <Image
                  src="/placeholder.svg?height=600&width=1400"
                  alt="FNN Strategy growth roadmap"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm">
                    An infographic depicting our roadmap with milestones and future market sectors, highlighting our
                    strategic growth trajectory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Details Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="FNN Strategy team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/0"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm">
                    Our professional team working together to drive innovation in remote collaboration technology
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">About FNN Strategy</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded on the belief that innovation can bridge the gap between physical and digital workspaces, FNN
                  Strategy is at the intersection of product and process innovation. Our platform:
                </p>
                <ul className="space-y-6 mb-8">
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Integrates Advanced Technologies</h3>
                      <p className="text-gray-600">
                        Combining first-person video streaming, real-time interaction via laser guidance, and precise
                        eye-tracking.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Offers Modular Scalability</h3>
                      <p className="text-gray-600">
                        Designed to seamlessly evolve—from computer and mobile video streaming to sophisticated smart
                        glasses integration.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Focuses on User-Centric Design</h3>
                      <p className="text-gray-600">
                        Ensuring that every feature is optimized for ease-of-use, reliability, and enhanced operational
                        performance.
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700">
                  We invite investors, partners, and forward-thinking users to join us as we drive the future of remote
                  collaboration and operational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Shaping the Future</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to experience the next generation of remote collaboration? Connect with FNN Strategy today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
              <Link href="/video-test">
                <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
                  Try Our Technology
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


"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      rememberMe: checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors: { email?: string; password?: string } = {}
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Submit form
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard or home page after successful login
      router.push("/video-test")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            FNN Strategy
          </span>
        </Link>
        <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="hidden md:flex flex-col justify-center p-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white rounded-l-lg">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="opacity-90">
                Log in to access your FNN Strategy account and continue revolutionizing remote collaboration through
                intuitive, first-person video communication.
              </p>
              <div className="border-t border-white/20 pt-4 mt-8">
                <p className="text-sm opacity-80">
                  "FNN Strategy has transformed how we conduct remote training across our global facilities."
                </p>
                <p className="text-sm font-medium mt-2">— Sarah Johnson, Training Director at TechCorp</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-slate-900 rounded-lg md:rounded-l-none md:rounded-r-lg shadow-lg">
            <div className="space-y-6">
              <div className="space-y-2 text-center md:text-left">
                <h1 className="text-2xl font-bold">Log in to your account</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? "border-red-500" : ""}
                  />
                  {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" checked={formData.rememberMe} onCheckedChange={handleCheckboxChange} />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Log in"
                  )}
                </Button>
              </form>

              <div className="text-center text-sm">
                <p className="text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link href="/register" className="text-blue-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Camera,
  CameraOff,
  Glasses,
  Share2,
  Users,
  MessageSquare,
  Pencil,
  Eye,
  EyeOff,
  Grid,
  Maximize,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function VideoTestPage() {
  const [activeStream, setActiveStream] = useState<MediaStream | null>(null)
  const [isStreaming, setIsStreaming] = useState(false)
  const [deviceType, setDeviceType] = useState<"desktop" | "mobile">("desktop")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [sessionKey, setSessionKey] = useState("")
  const [isCreatingSession, setIsCreatingSession] = useState(false)
  const [isJoiningSession, setIsJoiningSession] = useState(false)
  const [activeTab, setActiveTab] = useState<"create" | "join" | "active">("create")
  const [participants, setParticipants] = useState<{ id: string; name: string; isMain: boolean }[]>([])
  const [chatMessages, setChatMessages] = useState<{ sender: string; message: string; time: string }[]>([])
  const [newMessage, setNewMessage] = useState("")
  const videoRef = useRef<HTMLVideoElement>(null)

  // Clean up stream when component unmounts
  useEffect(() => {
    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [activeStream])

  // Simulate joining a session after a delay
  const simulateSessionJoin = () => {
    setIsCreatingSession(true)

    // Simulate API delay
    setTimeout(() => {
      setIsCreatingSession(false)
      setActiveTab("active")

      // Add mock participants
      setParticipants([
        { id: "user-1", name: "You (Host)", isMain: true },
        { id: "user-2", name: "John Smith", isMain: false },
        { id: "user-3", name: "Sarah Johnson", isMain: false },
      ])

      // Add welcome message
      setChatMessages([
        {
          sender: "System",
          message: "Welcome to the collaborative session! You can now communicate with other participants.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
    }, 2000)
  }

  const startStream = async () => {
    try {
      // Reset error state
      setErrorMessage(null)

      // Stop any existing stream
      if (activeStream) {
        activeStream.getTracks().forEach((track) => track.stop())
      }

      // Get user media with video and audio
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })

      // Set the stream as the video source
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }

      setActiveStream(stream)
      setIsStreaming(true)
    } catch (error) {
      console.error("Error accessing media devices:", error)
      setErrorMessage("Could not access camera or microphone. Please check permissions.")
      setIsStreaming(false)
    }
  }

  const stopStream = () => {
    if (activeStream) {
      activeStream.getTracks().forEach((track) => track.stop())
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    setActiveStream(null)
    setIsStreaming(false)
  }

  const toggleStream = () => {
    if (isStreaming) {
      stopStream()
    } else {
      startStream()
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          sender: "You",
          message: newMessage,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setNewMessage("")

      // Simulate response after a delay
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "John Smith",
            message: "I can see the issue now. Try adjusting the component as I'm highlighting.",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }, 3000)
    }
  }

  const setMainView = (id: string) => {
    setParticipants(
      participants.map((p) => ({
        ...p,
        isMain: p.id === id,
      })),
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Collaborative Video Streaming
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Experience real-time multi-user collaboration with FNN Strategy's remote guidance platform.
            </p>
          </div>

          {activeTab !== "active" ? (
            <Tabs
              defaultValue="create"
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as "create" | "join")}
              className="space-y-8"
            >
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="create" className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Create Session
                </TabsTrigger>
                <TabsTrigger value="join" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Join Session
                </TabsTrigger>
              </TabsList>

              <TabsContent value="create" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Create a New Collaboration Session</CardTitle>
                    <CardDescription>Start a new session and invite others to join your video stream.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                      {!isStreaming && !errorMessage && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                          <Camera className="h-12 w-12 mb-2" />
                          <p>Click "Start Camera" to begin testing</p>
                        </div>
                      )}

                      {errorMessage && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500">
                          <CameraOff className="h-12 w-12 mb-2" />
                          <p className="text-center px-4">{errorMessage}</p>
                        </div>
                      )}

                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className={`w-full h-full object-cover ${!isStreaming ? "hidden" : ""}`}
                      />
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button
                        onClick={toggleStream}
                        className={isStreaming ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}
                      >
                        {isStreaming ? (
                          <>
                            <CameraOff className="mr-2 h-4 w-4" />
                            Stop Camera
                          </>
                        ) : (
                          <>
                            <Camera className="mr-2 h-4 w-4" />
                            Start Camera
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium mb-4">Session Settings</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Session Name</label>
                            <Input placeholder="My Collaboration Session" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
                            <Input type="number" defaultValue={5} min={2} max={10} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Session Privacy</label>
                          <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                              <input type="radio" name="privacy" className="mr-2" defaultChecked />
                              <span>Private (Invite Only)</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="privacy" className="mr-2" />
                              <span>Public (Anyone with Link)</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button
                      onClick={simulateSessionJoin}
                      disabled={!isStreaming || isCreatingSession}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isCreatingSession ? (
                        <>Creating Session...</>
                      ) : (
                        <>
                          <Share2 className="mr-2 h-4 w-4" />
                          Create & Share Session
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="join" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Join an Existing Session</CardTitle>
                    <CardDescription>Enter a session key to join an existing collaboration.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Session Key</label>
                      <Input
                        placeholder="Enter session key (e.g., ABC-123-XYZ)"
                        value={sessionKey}
                        onChange={(e) => setSessionKey(e.target.value)}
                      />
                    </div>

                    <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                      {!isStreaming && !errorMessage && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                          <Camera className="h-12 w-12 mb-2" />
                          <p>Click "Start Camera" to prepare for joining</p>
                        </div>
                      )}

                      {errorMessage && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500">
                          <CameraOff className="h-12 w-12 mb-2" />
                          <p className="text-center px-4">{errorMessage}</p>
                        </div>
                      )}

                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className={`w-full h-full object-cover ${!isStreaming ? "hidden" : ""}`}
                      />
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button
                        onClick={toggleStream}
                        className={isStreaming ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}
                      >
                        {isStreaming ? (
                          <>
                            <CameraOff className="mr-2 h-4 w-4" />
                            Stop Camera
                          </>
                        ) : (
                          <>
                            <Camera className="mr-2 h-4 w-4" />
                            Start Camera
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button
                      onClick={simulateSessionJoin}
                      disabled={!isStreaming || !sessionKey || isJoiningSession}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isJoiningSession ? (
                        <>Joining Session...</>
                      ) : (
                        <>
                          <Users className="mr-2 h-4 w-4" />
                          Join Session
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="font-medium">Live Session: FNN Demo Session</span>
                  <span className="ml-4 text-sm text-gray-500">Session Key: FNN-2023-DEMO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Invite</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => {
                      stopStream()
                      setActiveTab("create")
                      setParticipants([])
                      setChatMessages([])
                    }}
                  >
                    End Session
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Main Video View */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-slate-900">
                        {participants.find((p) => p.isMain) ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                            <div className="relative w-full h-full">
                              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-sm">
                                {participants.find((p) => p.isMain)?.name || "Main View"}
                              </div>
                              <div className="absolute top-4 right-4 flex gap-2">
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="bg-black/40 text-white hover:bg-black/60 h-8 w-8"
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="bg-black/40 text-white hover:bg-black/60 h-8 w-8"
                                >
                                  <Maximize className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-white">
                            <p>No active main view selected</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center py-3">
                      <div className="text-sm font-medium">Main View</div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8">
                          <Grid className="h-4 w-4 mr-1" />
                          Layout
                        </Button>
                        <Button size="sm" variant="outline" className="h-8">
                          <Eye className="h-4 w-4 mr-1" />
                          Focus
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>

                  {/* Participants Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {participants.map((participant) => (
                      <div
                        key={participant.id}
                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${participant.isMain ? "border-blue-500" : "border-transparent"}`}
                        onClick={() => setMainView(participant.id)}
                      >
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                          {participant.id === "user-1" ? (
                            <video autoPlay playsInline muted className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                              {participant.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs truncate">
                          {participant.name}
                        </div>
                        <div className="absolute top-2 right-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6 bg-black/40 text-white hover:bg-black/60"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Toggle visibility logic would go here
                            }}
                          >
                            {participant.isMain ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat and Controls */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Session Chat</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] overflow-y-auto mb-4 space-y-3 pr-2">
                        {chatMessages.map((msg, index) => (
                          <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                            <div
                              className={`max-w-[80%] rounded-lg px-3 py-2 ${
                                msg.sender === "System"
                                  ? "bg-gray-100 text-gray-700"
                                  : msg.sender === "You"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                              }`}
                            >
                              {msg.sender !== "You" && <div className="font-semibold text-xs mb-1">{msg.sender}</div>}
                              <p className="text-sm">{msg.message}</p>
                              <div className="text-xs opacity-70 mt-1 text-right">{msg.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSendMessage()
                            }
                          }}
                        />
                        <Button onClick={handleSendMessage}>Send</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Collaboration Tools</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="flex flex-col h-auto py-3">
                          <Pencil className="h-5 w-5 mb-1" />
                          <span className="text-xs">Annotate</span>
                        </Button>
                        <Button variant="outline" className="flex flex-col h-auto py-3">
                          <MessageSquare className="h-5 w-5 mb-1" />
                          <span className="text-xs">Voice Chat</span>
                        </Button>
                        <Button variant="outline" className="flex flex-col h-auto py-3">
                          <Share2 className="h-5 w-5 mb-1" />
                          <span className="text-xs">Share Screen</span>
                        </Button>
                        <Button variant="outline" className="flex flex-col h-auto py-3">
                          <Grid className="h-5 w-5 mb-1" />
                          <span className="text-xs">Layout</span>
                        </Button>
                      </div>

                      <div className="pt-3 border-t">
                        <h4 className="text-sm font-medium mb-2">Session Controls</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Mute All Participants</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Lock Session</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-2 flex items-center">
                  <Glasses className="h-5 w-5 mr-2" />
                  Smart Glasses Integration Coming Soon
                </h3>
                <p className="text-blue-700 text-sm">
                  Our next update will include support for smart glasses, enabling hands-free operation with
                  eye-tracking and laser pointer guidance. Stay tuned for this exciting feature!
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Collaborating?</h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the full power of FNN Strategy's remote guidance platform with your team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  Explore All Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


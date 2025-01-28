import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function DigitalBuskingWaitlist() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">Revolutionizing Digital Busking</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Empowering creators and performers to connect with fans, showcase talents, and earn directly through a seamless, interactive platform.
        </p>
      </motion.div>

      {/* Waitlist Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-lg"
      >
        <Card className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg">
          <CardHeader className="text-center py-6">
            <h2 className="text-2xl font-semibold">Join the Movement</h2>
            <p className="text-gray-400 mt-2">Be the first to access the platform and shape its future.</p>
          </CardHeader>
          <CardContent className="p-6">
            <form className="flex flex-col space-y-4">
              <Input
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                type="email"
                placeholder="Enter your email address"
                required
              />
              <Button className="bg-blue-600 hover:bg-blue-700 transition">Join the Waitlist</Button>
            </form>
            <p className="text-sm text-gray-400 mt-4 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-gray-800 border border-gray-700 rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">🎤 Showcase Talent</h3>
          <p className="text-gray-400 text-sm">
            Perform and engage your audience live or on-demand.
          </p>
        </Card>
        <Card className="bg-gray-800 border border-gray-700 rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">💸 Earn Directly</h3>
          <p className="text-gray-400 text-sm">
            Receive tips and support from fans with zero hassle.
          </p>
        </Card>
        <Card className="bg-gray-800 border border-gray-700 rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">🌍 Global Reach</h3>
          <p className="text-gray-400 text-sm">
            Share your art and performance with fans worldwide.
          </p>
        </Card>
      </motion.div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { connectPhantom, getBalance } from "@/lib/solana";
import { motion } from "framer-motion";
import { BookOpen, Brain, Globe2, GraduationCap, Laptop2, Users2, Wallet } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const features = [
  {
    title: "Digital Classrooms",
    description: "Virtual learning environments with interactive content",
    icon: Laptop2,
    color: "bg-purple-500",
    href: "/digital-classrooms",
  },
  {
    title: "Community Learning",
    description: "Peer-to-peer education networks",
    icon: Users2,
    color: "bg-blue-500",
    href: "/community",
  },
  {
    title: "Global Resources",
    description: "Access to worldwide educational materials",
    icon: Globe2,
    color: "bg-green-500",
    href: "/resources",
  },
  {
    title: "Smart Curriculum",
    description: "AI-powered personalized learning paths",
    icon: Brain,
    color: "bg-yellow-500",
    href: "/curriculum",
  },
  {
    title: "Digital Library",
    description: "Extensive collection of e-books and resources",
    icon: BookOpen,
    color: "bg-red-500",
    href: "/library",
  },
  {
    title: "Skill Certification",
    description: "Blockchain-verified educational credentials",
    icon: GraduationCap,
    color: "bg-indigo-500",
    href: "/certification",
  },
  {
    title: "Token Rewards",
    description: "Incentivized learning through token rewards",
    icon: Wallet,
    color: "bg-pink-500",
    href: "/rewards",
  },
];

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState<number | null>(null);

  const handleConnect = async () => {
    const address = await connectPhantom();
    if (address) {
      setWallet(address);
      const bal = await getBalance(address);
      setBalance(bal);
      toast.success("Wallet connected successfully!");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 animate-gradient">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Digital Solutions for Rural Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Empowering rural communities through Web3 technology and innovative learning
          </p>
          <Button
            onClick={handleConnect}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            {wallet ? "Connected: " + wallet.slice(0, 6) + "..." + wallet.slice(-4) : "Connect Phantom Wallet"}
          </Button>
          {balance !== null && (
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Balance: {balance.toFixed(4)} SOL
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={feature.href}>
                <Card className="p-6 hover-scale backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
                  <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
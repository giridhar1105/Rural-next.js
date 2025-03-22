"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Gift, Star, Trophy } from "lucide-react";

const rewards = [
  {
    title: "Learning Streak",
    description: "Complete lessons for 7 consecutive days",
    tokens: 50,
    progress: 5,
    total: 7,
    icon: Star,
    color: "text-yellow-500",
  },
  {
    title: "Knowledge Master",
    description: "Complete all basic mathematics modules",
    tokens: 100,
    progress: 8,
    total: 10,
    icon: Trophy,
    color: "text-purple-500",
  },
  {
    title: "Community Helper",
    description: "Help 5 other students with their questions",
    tokens: 75,
    progress: 3,
    total: 5,
    icon: Gift,
    color: "text-blue-500",
  },
  {
    title: "Perfect Score",
    description: "Achieve 100% in any module test",
    tokens: 150,
    progress: 90,
    total: 100,
    icon: Award,
    color: "text-green-500",
  },
];

export default function Rewards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 animate-gradient py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Learning Rewards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Earn tokens and achievements as you progress through your learning journey.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-md">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="font-semibold">Your Token Balance: 275</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover-scale">
                <div className="flex items-center justify-center mb-6">
                  <reward.icon className={`h-12 w-12 ${reward.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {reward.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">
                  {reward.description}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress:</span>
                    <span>{reward.progress}/{reward.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(reward.progress / reward.total) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm font-semibold">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    <span>{reward.tokens} tokens</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Redeem Your Tokens</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Use your earned tokens to unlock premium educational content and resources.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                View Rewards Store
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
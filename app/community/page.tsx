"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, Share2, ThumbsUp, Users } from "lucide-react";

const discussions = [
  {
    id: 1,
    title: "How to effectively teach mathematics in rural areas?",
    author: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    content: "I'm looking for innovative ways to teach mathematics to students with limited resources...",
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    title: "Using local resources for science experiments",
    author: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop",
    content: "Let's share ideas about conducting science experiments using materials readily available in rural areas...",
    likes: 32,
    comments: 12,
    shares: 5,
  },
  {
    id: 3,
    title: "Building a supportive learning community",
    author: "Emily Brown",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
    content: "How can we create a strong support system for students and teachers in rural education?",
    likes: 18,
    comments: 6,
    shares: 2,
  },
];

export default function Community() {
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
            Community Learning
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with educators and learners worldwide. Share experiences, resources, and support each other's growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10">
                      <img src={discussion.avatar} alt={discussion.author} />
                    </Avatar>
                    <div className="ml-3">
                      <h3 className="font-semibold">{discussion.author}</h3>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{discussion.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {discussion.content}
                  </p>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {discussion.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {discussion.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      {discussion.shares}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Community Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-purple-600" />
                    <span>Active Members</span>
                  </div>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Discussions</span>
                  </div>
                  <span className="font-semibold">456</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Share2 className="h-5 w-5 mr-2 text-green-600" />
                    <span>Resources Shared</span>
                  </div>
                  <span className="font-semibold">789</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600">
                Start New Discussion
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
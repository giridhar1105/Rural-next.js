"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Download, FileText, Globe, Video } from "lucide-react";

const resources = [
  {
    title: "Mathematics Fundamentals",
    type: "PDF",
    size: "2.5 MB",
    downloads: 1234,
    icon: FileText,
    color: "text-red-500",
  },
  {
    title: "Basic Science Experiments",
    type: "Video",
    size: "45 MB",
    downloads: 890,
    icon: Video,
    color: "text-blue-500",
  },
  {
    title: "English Grammar Guide",
    type: "PDF",
    size: "1.8 MB",
    downloads: 2100,
    icon: FileText,
    color: "text-green-500",
  },
  {
    title: "History Timeline",
    type: "Interactive",
    size: "5 MB",
    downloads: 567,
    icon: Globe,
    color: "text-purple-500",
  },
];

export default function Resources() {
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
            Educational Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Access a wide range of educational materials designed for rural learning environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover-scale">
                <div className="flex items-center justify-center mb-6">
                  <resource.icon className={`h-12 w-12 ${resource.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {resource.title}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span>{resource.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span>{resource.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Downloads:</span>
                    <span>{resource.downloads}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
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
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find what you need?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Request new educational resources or suggest improvements to existing ones.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              Submit Request
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
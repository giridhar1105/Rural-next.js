"use client";

import { Button } from "@/components/ui/button";
import { connectPhantom, getBalance } from "@/lib/solana";
import { BookOpen, Brain, Globe2, GraduationCap, Home, Laptop2, Moon, Sun, Users2, Wallet } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Digital Classrooms", href: "/digital-classrooms", icon: Laptop2 },
  { name: "Community", href: "/community", icon: Users2 },
  { name: "Resources", href: "/resources", icon: Globe2 },
  { name: "Curriculum", href: "/curriculum", icon: Brain },
  { name: "Library", href: "/library", icon: BookOpen },
  { name: "Certification", href: "/certification", icon: GraduationCap },
  { name: "Rewards", href: "/rewards", icon: Wallet },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleConnect = async () => {
    const address = await connectPhantom();
    if (address) {
      setWallet(address);
      const bal = await getBalance(address);
      setBalance(bal);
      toast.success("Wallet connected successfully!");
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold">RuralEd</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
                        : "hover:bg-purple-50 dark:hover:bg-purple-900/50"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={handleConnect}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              {wallet ? wallet.slice(0, 6) + "..." + wallet.slice(-4) : "Connect Wallet"}
            </Button>
            {balance !== null && (
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {balance.toFixed(4)} SOL
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
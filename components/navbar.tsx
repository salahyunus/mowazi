"use client";
import { Menu, Sparkles } from "lucide-react";
import { Varela } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
const gradientColors = ["#33cfff", "#00ffdd", "#33aaff"];

const gradientText = {
  background: `linear-gradient(45deg, ${gradientColors.join(",")})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const font = Varela({ weight: "400", subsets: ["latin"] });
const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className="hidden md:block text-3xl md:text-3xl font-bold"
            style={{
              ...gradientText,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Mowazi
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm" variant="premium">
          Upgrade <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;

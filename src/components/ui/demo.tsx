import { Component } from "@/components/ui/morphing-card-stack";
import { Sparkles, Circle, Grid2X2 } from "lucide-react";

const testimonialData = [
  {
    id: "1",
    title: "Alastair Frankl",
    subtitle: "Regional Distributor",
    description: "As a regional distributor, I appreciate the real-time tracking and robust verification measures WaterAds offers. It has not only simplified our day-to-day operations but also given our clients peace of mind regarding placement.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    icon: <Sparkles className="h-5 w-5 text-[#3333FF]" />,
  },
  {
    id: "2",
    title: "Jason Mueller",
    subtitle: "Print Facility Manager",
    description: "WaterAds has been a game-changer for our printing press. The automated routing functionality allows us to seamlessly accept nearby orders, and the digital asset delivery ensures we print perfectly every time.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    icon: <Circle className="h-5 w-5 text-[#3333FF]" />,
  },
  {
    id: "3",
    title: "Jill Pescosolido",
    subtitle: "Brand Director",
    description: "Working with WaterAds has transformed the way I approach offline marketing. The targeted hydration campaigns allow me to provide more attentive reach to our customers, and the ROI tracking is unmatched.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    icon: <Grid2X2 className="h-5 w-5 text-[#3333FF]" />,
  },
];

export default function DemoOne() {
  return <Component cards={testimonialData} defaultLayout="stack" />;
}

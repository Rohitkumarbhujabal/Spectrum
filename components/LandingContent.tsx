"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

const testimonials = [
  {
    name: "Premium",
    avatar: "J",
    title: "Subscribe for premium",
    description: "Get access to upload your own tracks!",
  },
  {
    name: "Free",
    avatar: "A",
    title: "Listen for free",
    description: "Listen to endless number of songs completely for free!",
  },
  {
    name: "Like",
    avatar: "M",
    title: "Easy access",
    description: "Like and save the songs of your choice!",
  },
  {
    name: "Explore",
    avatar: "M",
    title: "Search your songs",
    description: "Quickly search for songs you love listening to!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10 font-mono">HIGHLIGHTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-black border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
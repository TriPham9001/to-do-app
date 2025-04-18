"use client";

import { Button } from "@heroui/react";
import confetti from "canvas-confetti";
import { useRef } from "react";
import { HandRaisedIcon } from "@heroicons/react/24/outline";

const About = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });
  };
  return (
    <div className="flex flex-col gap-y-3 items-center justify-center">
      <p className="text-lg font-bold">Hi I&apos;m Tri</p>
      <Button
        ref={buttonRef}
        disableRipple
        className="rounded-full hover:-translate-y-1 shadow-xl text-white font-bold bg-gradient-to-r from-indigo-400 to-pink-300 after:content-[''] after:rounded-full after:inset-0 after:bg-pink-400 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
        size="lg"
        onPress={handleConfetti}
        startContent={<HandRaisedIcon className="w-5 h-5" />}
      >
        Press me
      </Button>
    </div>
  );
};

export default About;

"use client";
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const HackerBtn = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50)); // Delay between characters
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
    // Optional: Handle action after animation is done
    setTimeout(() => {
      // For example, trigger a download action
      console.log("Submitted");
    }, label.length * 50);
  };

  useEffect(() => {
    setDisplayText(label); // Set initial text
  }, [label]);

  return (
    <Link href="/resume.pdf" download>
      <Button
        size="lg"
        className="text-base px-5 py-6"
        onMouseEnter={startScrambling}
        aria-label="Download resume"
      >
        <Download className="mx-1" />
        {displayText}
      </Button>
    </Link>
  );
};

export default HackerBtn;

import React from "react";
import { Card } from "../ui/card";
import { ExternalLink } from "lucide-react";

export function Rust() {
  return (
    <Card className="col-span-1 sm:col-span-2 bg-zinc-900" variant="rust">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Rust Experience</h2>
      <p className="mb-4 text-sm sm:text-base">
        Mastered #Rust with not one, but TWO certifications by Nathan Stocks! 🚀
        Stocks! 🚀
      </p>
      <ul className="list-disc list-inside text-sm sm:text-base">
        <li>Memory Safety: Tackled common programming pitfalls</li>
        <li>
          Concurrency: Built-in support for efficient concurrent programming
        </li>
        <li>Performance: Rust&apos;s speed trumps that of Javascript</li>
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.udemy.com/certificate/UC-144bbd90-4f91-4b5a-a1f0-2b26b3d507aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline flex items-center gap-1"
          >
            <ExternalLink size={16} />
            <span>View Certificate </span>
          </a>
          <a
            href="https://www.udemy.com/certificate/UC-c839d9fd-bd30-458d-b431-0213c2cc8c3f/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline flex items-center gap-1"
          >
            <ExternalLink size={16} />
            <span>View Certificate 2</span>
          </a>
        </div>
      </ul>
    </Card>
  );
}

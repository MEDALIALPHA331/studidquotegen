import { Indie_Flower } from "next/font/google";
import { Inter } from "next/font/google";
import { IRandomQuote } from "./types/public_apis";
import ThemeSwitch from "./components/theme";
import Nav from "./components/Nav";
import { Suspense } from "react";

const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  fallback: ["sans-serif"],
  preload: true,
});

export default async function Home() {
  return (
    <main className={`flex min-h-screen flex-col gap-4 py-2`}>
      <Nav />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Quote />
      </Suspense>
    </main>
  );
}

async function Quote() {
  const { content: quote } = await getRandomQuote();

  return (
    <div
      className={` ${indie.className} flex min-h-[80vh] items-center justify-center`}
    >
      <h1 className="max-w-[50ch] bg-gradient-to-br from-teal-500 to-pink-400 bg-clip-text text-4xl text-transparent">
        {quote}
      </h1>

      <h2 className="text-4xl text-white dark:text-red-400">guc</h2>
    </div>
  );
}

async function getRandomQuote(): Promise<IRandomQuote> {
  const res = await fetch("https://api.quotable.io/random", {
    // cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong requesting quote");
  }

  const data = (await res.json()) as IRandomQuote;

  return data;
}

import { Indie_Flower } from "next/font/google";
import { Inter } from "next/font/google";
import { IRandomQuote } from "./types/public_apis";
import ThemeSwitch from "./theme";

const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  fallback: ["sans-serif"],
  preload: true,
});

export default async function Home() {
  //! could throw
  const { content: quote } = await getRandomQuote();

  return (
    <>
      <ThemeSwitch />
      <main
        className={`${indie.className} flex min-h-screen items-center justify-center`}
      >
        <div>
          <h1 className="bg-gradient-to-br from-teal-500 to-pink-400 bg-clip-text text-4xl text-transparent">
            {quote}
          </h1>
        </div>
      </main>
    </>
  );
}

async function getRandomQuote(): Promise<IRandomQuote> {
  const res = await fetch("https://api.quotable.io/random");

  if (!res.ok) {
    throw new Error("Something went wrong requesting quote");
  }

  const data = (await res.json()) as IRandomQuote;

  return data;
}

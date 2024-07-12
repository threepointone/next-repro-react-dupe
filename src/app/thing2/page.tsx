"use client";
import { useMyContext } from "../my-context";

export default function Home() {
  const myString = useMyContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {myString}
    </main>
  );
}

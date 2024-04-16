import Image from "next/image";
import Banner from "./components/banner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Banner />
    </main>
  );
}

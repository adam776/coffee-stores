import Image from "next/image";
import Banner from "./components/banner";
import Link from "next/link";
import Card from "./components/card.server";


export default function Home() {
  const coffeeStoreId = 'darh-horse-coffee'
  return (
    <div className="mb-56">
    <main className="mx-auto mt-10 max-w-6xl px-4">
      <Banner />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
      <Card name="Dark horse coffee" imgUrl="/static/hero-image.png" href={`/coffee-stores/${coffeeStoreId}`} />
      </div>    
    </main>
    </div>
  );
}

import Image from "next/image";
import Banner from "./components/banner";
import Link from "next/link";
import Card from "./components/card.server";


export default function Home() {
  const coffeeStoreId = 'darh-horse-coffee';
  const cofeeStores = [
    {
      name: 'Beans Coffee',
      imgUrl: '/static/nafinia-putra-Kwdp-0pok-I-unsplash.jpg'
    },
    {
      name: 'Younges Cafe',
      imgUrl: '/static/istockphoto-1484464701-1024x1024.jpg'
    }
  ]
  return (
    <div className="mb-56">
    <main className="mx-auto mt-10 max-w-6xl px-4">
      <Banner />
      <div className="mt-20">
        <h2 className="mt-8 pb-8 text-4xl fontbold text-white">
          London Stores
        </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
      {cofeeStores.map((cofeeStores, idx) => (
      <Card key={`${cofeeStores.name}-${idx}`} name={cofeeStores.name} imgUrl={cofeeStores.imgUrl} href={`/coffee-stores/${idx}`} />
      ))}
      </div>    
      </div>
    </main>
    </div>
  );
}

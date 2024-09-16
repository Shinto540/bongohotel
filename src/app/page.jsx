import Image from "next/image";
import trending, { trending_data } from "./data/trending"


export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4">
    <section 
      className="bg-cover bg-center py-10 w-full" 
      style={{ backgroundImage: "url(/assets/pictures/homebg.jpg)" }}
    >
      <div className="container mx-auto text-left text-white">
        <div className="flex items-center">
          <div className="w-1/2">
            <h1 className="text-5xl text-white font-medium mb-6">Welcome to Bongo Hotels</h1>
            <p className="text-xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
              euismod odio, gravida pellentesque urna varius vitae.
            </p>
            <a 
              href="#" 
              className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
            >
              Demo
            </a>
          </div>
          <div className="w-1/2 pl-16">
          <Image 
          src="/assets/pictures/homepic.jpg" // replace with your image path
          alt="Description of image"
          width={1000}
          height={1000}
          className="object-cover" // To control how the image is resized
        />
          </div>
        </div>
      </div>
    </section>

    <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">SearchForm

     
</section>
    <section className="mx-auto max-w-7xl p-6 bg-white rounded-t-lg">
      <div className="pt-5">
        <h3 className="text-xl font-bpld">Trending Destinations</h3>
        <p className="font-light">
          Most popular choices for travellers from around the city
        </p>
      </div>
<div className="flex space-x-4 py-5 overflow-x-scroll">
{trending_data.map((item)=> (
  <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
    <Image
    key={item.id}
    className="w-80 h-72 object-cover rounded-lg pb-2"
    src={item.src}
    alt=""
    width={80}
    height={72}
    />
    <p className="font-bold">{item.title}</p>
    <p className="">{item.location}</p>
    <p className="font-light text-sm">{item.description}</p>
    </div>
))}
</div>
    </section>
     
  </div>
  );
}

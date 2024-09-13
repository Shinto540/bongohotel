import Image from "next/image";



export default function Home() {
  return (
    <div className=" flex items-center">
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
<div>
  
</div>

  </div>
  );
}

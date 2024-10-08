// src/HotelListComponent.jsx
import Image from 'next/image';
import React from 'react';

const HotelListComponent = () => {
  const hotels = [
    {
      id: 1,
      image: '/assets/pictures/1.jpg',
      name: 'Sanna Boutique Hotel',
      location: 'Arusha, Tanzania',
      rating: '8.5',
      reviews: 126,
      oldPrice: '1,419,593',
      newPrice: '1,277,634',
    },
    {
      id: 2,
      image: '/assets/pictures/1.jpg',
      name: 'The Neela Boutique Hotel Stone Town',
      location: 'Zanzibar City, Tanzania',
      rating: '8.9',
      reviews: 69,
      oldPrice: '2,702,687',
      newPrice: '1,702,692',
    },
    {
      id: 3,
      image: '/assets/pictures/homepic.jpg',
      name: 'Olsupat Lodge',
      location: 'Nairobi, Kenya',
      rating: '8.5',
      reviews: 157,
      oldPrice: '270,269',
      newPrice: '216,215',
    },
    {
      id: 4,
      image: '/assets/pictures/1.jpg',
      name: 'Wanyama B&B',
      location: 'Arusha, Tanzania',
      rating: '8.9',
      reviews: 132,
      oldPrice: '221,757',
      newPrice: '188,506',
    },
   
  ];

  return (
    <div className="bg-gray-100 p-4 max-w-full">
       <h3 className="text-xl font-bpld">Discounted Destinations</h3>
      <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {hotels.map(hotel => (
          <div key={hotel.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" /> */}
            <Image
    key={hotel.id}
    className="w-80 h-72 object-cover rounded-lg pb-2"
    src={hotel.image}
    alt=""
    width={300}
    height={300}
    />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-yellow-500">Rating: {hotel.rating}</p>
              <p className="text-gray-500">Reviews: {hotel.reviews}</p>
              <div className="mt-2">
                <span className="text-gray-400 line-through">{hotel.oldPrice}</span>
                <span className="text-red-500 ml-2">{hotel.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelListComponent;

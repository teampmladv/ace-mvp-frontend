// components/PropertyCard.js

import Link from 'next/link';

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300 bg-white">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{property.name}</h2>
      <p className="text-gray-700">{property.location}</p>
      <p className="text-green-600 font-bold">${property.price} / noche</p>
      <Link href={`/property/${property._id}`}>
        <a className="mt-2 inline-block text-blue-600 hover:underline">
          Ver más detalles
        </a>
      </Link>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Reservar
      </button>
    </div>
  );
}


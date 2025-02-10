// pages/index.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/properties')
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
        setError(
          'Hubo un problema al cargar las propiedades. Inténtelo de nuevo más tarde.'
        );
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Bienvenido a ACE</h1>
      {loading ? (
        <p className="text-center text-gray-500">Cargando propiedades...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No se encontraron propiedades disponibles.
            </p>
          )}
        </div>
      )}
    </div>
  );
}


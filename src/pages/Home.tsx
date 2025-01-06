import React, { useState } from 'react';
import Card from '../components/Card'; // Importa il componente Card
import image from '../assets/nft.jpg'; // Sostituisci con l'immagine effettiva

const items = [
  { id: 1, title: 'Vestito 1', price: '79$', image },
  { id: 2, title: 'Vestito 2', price: '89$', image },
  { id: 3, title: 'Camicia 1', price: '59$', image },
  { id: 4, title: 'Pantaloni 1', price: '99$', image },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState(''); // Stato per il testo della barra di ricerca

  // Filtra gli elementi in base al titolo
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" flex flex-col items-center p-4">
      {/* Barra di ricerca */}
      <input
        type="text"
        placeholder="Cerca prodotti..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm mb-4"
      />

      {/* Griglia di prodotti */}
      <div className="w-full pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              onClick={() => console.log(`Hai cliccato su ${item.title}`)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Nessun prodotto trovato.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;

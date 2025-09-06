import React from "react";

const HappyPets = () => {
  const pets = [
    {
      name: "Rocky",
      img: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBldHN8ZW58MHx8MHx8fDA%3D",
      review: "Great service and loving vets!",
    },
    {
      name: "Bella",
      img: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
      review: "They took amazing care of my pet.",
    },
    {
      name: "Max",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      review: "Best clinic experience ever!",
    },
    {
      name: "Buddy",
      img: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
      review: "The staff were so kind and my dog had a wonderful experience.",
    },
    {
      name: "Lucy",
      img: "https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
      review: "Highly recommend! They took excellent care of my cat.",
    },
    {
      name: "Puppy",
      img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c3xlbnwwfHwwfHx8MA%3D%3D",
      review:
        "My cat was so nervous, but the team here made her feel safe and comfortable. Fantastic staff!",
    },
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Meet Our <span className="text-orange-600">Happy Pets</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pets.map((pet, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden p-6"
            >
              <img
                src={pet.img}
                alt={pet.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">{pet.name}</h3>
              <p className="text-gray-600 mt-2">{pet.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyPets;

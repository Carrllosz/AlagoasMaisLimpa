import React from 'react'
import biju17 from '../assets/biju17.png'
import biju13 from '../assets/biju13.png'
import biju12 from '../assets/biju12.png'
import biju16 from '../assets/biju16.png'

const produtos = () => {
    const products = [
        {
          id: 1,
          name: "Colar de sol",
          href: '#',
          price: 'R$15,90',
          imageSrc: biju13,
          imageAlt: 'Colar feito com cápsula de café.',
        },
        {
          id: 2,
          name: "Colar dupla face",
          href: '#',
          price: 'R$30,00',
          imageSrc: biju17,
          imageAlt: 'Colares feitos com cápsulas de café.',
        },
        {
          id: 3,
          name: "Colar verde",
          href: '#',
          price: 'R$29,90',
          imageSrc: biju12,
          imageAlt: 'Colar feito com cápsula de café.',
        },
        {
          id: 4,
          name: "Colar preto com flor",
          href: '#',
          price: 'R$19,90',
          imageSrc: biju16,
          imageAlt: 'Colar feito com cápsula de café.',
        },
    ]
      return (
        <div className="bg-blue-200 w-full md:h-full">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className='pb-10'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-900 border-green-400'>
                Um olhar de sustentabilidade 
              </p>
            </div>
    
            <div className="grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        )
    
}

export default produtos

  
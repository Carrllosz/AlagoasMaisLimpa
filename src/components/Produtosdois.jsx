import React from 'react'
import biju8 from '../assets/biju8.png'
import biju3 from '../assets/biju3.png'
import biju9 from '../assets/biju9.png'
import biju2 from '../assets/biju2.png'
import biju38 from '../assets/biju38.png'
import biju39 from '../assets/biju39.png'
import biju40 from '../assets/biju40.png'
import biju32 from '../assets/biju32.png'

const produtosdois = () => {
    const products = [
        {
          id: 1,
          name: "Brincos duplos",
          href: '#',
          price: 'R$15,90',
          imageSrc: biju3,
          imageAlt: 'Colar feito com cápsula de café.',
        },
        {
          id: 2,
          name: "Brinco roxo",
          href: '#',
          price: 'R$30,00',
          imageSrc: biju8,
          imageAlt: 'Colares feitos com cápsulas de café.',
        },
        {
          id: 3,
          name: "Brinco verde",
          href: '#',
          price: 'R$29,90',
          imageSrc: biju9,
          imageAlt: 'Colar feito com cápsula de café.',
        },
        {
          id: 4,
          name: "Brinco preto marinheiro",
          href: '#',
          price: 'R$19,90',
          imageSrc: biju2,
          imageAlt: 'Colar feito com cápsula de café.',
        },
        {
            id: 5,
            name: "Colar rosa",
            href: '#',
            price: 'R$39,90',
            imageSrc: biju38,
            imageAlt: 'Colar feito com cápsula de café.',
          },
          {
            id: 6,
            name: "Colar e brinco",
            href: '#',
            price: 'R$29,90',
            imageSrc: biju39,
            imageAlt: 'Colar feito com cápsula de café.',
          },
          {
            id: 7,
            name: "Brinco dourado salmão",
            href: '#',
            price: 'R$19,90',
            imageSrc: biju40,
            imageAlt: 'Colar feito com cápsula de café.',
          },
          {
            id: 8,
            name: "Colares",
            href: '#',
            price: 'R$19,90',
            imageSrc: biju32,
            imageAlt: 'Colar feito com cápsula de café.',
          },
    ]
      return (
        <div className="bg-blue-200 w-full md:h-full">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className='pb-10'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-900 border-green-400'>
                Brincos e Colares 
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

export default produtosdois

  
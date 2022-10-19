import React from "react";
import foto from "../assets/foto.png"
import foto2 from '../assets/campanha.png'
import foto3 from '../assets/lampada.png'
import foto4 from '../assets/biju37.png'
import foto5 from '../assets/coleta.png'
import foto6 from '../assets/biju23.png'

const About = () => {
  const products = [
    {
      id: 1,
      imageSrc: foto,
    },
    {
      id: 3,
      imageSrc: foto3,
    },
]
  const images = [
    {
      id:2,
      imageSrc:foto4,
    },
    {
      id:3,
      imageSrc:foto6,
    },
    {
      id:4,
      imageSrc:foto5,
    }
  ]

  return (
    <div className="bg-[#a0e1f7] w-full md:h-full">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className='pb-10'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-900 border-green-400'>
            Sobre o Projeto - Alagoas Mais Limpa
          </p>
        </div>

        <div className="grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
        <div className='mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-green-200 py-3 px-8 text-base font-medium text-black'>
          <p className="font-bold">Com o intuito de minimizar ainda mais o descarte incorreto de lixo e proporcionar uma melhor qualidade de vida e um meio ambiente mais saudável, o projeto “Alagoas mais Limpa” coordenado pela professora Iara Terra de Oliveira, em parceria com o Programa de Educação Tutorial (PET) do curso de Química, sob a tutoria da professora Thaissa Lúcio Silva, instalou na instituição coletores específicos dos seguintes resíduos sólidos: tampinhas plásticas; pilhas e baterias; cartelas de medicamentos vazias e lâmpadas fluorescentes.  </p>
        </div>

        <br/>

        <div className="grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {images.map((images) => (
            <a key={images.id} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={images.imageSrc}
                  alt={images.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
        <div className='mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-green-200 py-3 px-8 text-base font-medium text-black'>
          <p className="font-bold">Este projeto teve início em 2021 e seu objetivo é conscientizar a comunidade acadêmica e a população em geral sobre a importância do consumo consciente e do descarte correto dos resíduos sólidos. Ele foi idealizado pela professora Iara Terra de Oliveira e conta com a participação de professores e estudantes do curso de licenciatura em Química da Universidade Federal de Alagoas (Ufal) de Arapiraca. 
Várias ações já foram propostas e realizadas, inclusive em parceria com o Instituto do Meio Ambiente (IMA), Prefeitura de Arapiraca e Associações de catadores como a coleta de resíduos sólidos, gincanas ambientais, palestras, entre outras. </p>
        </div>
      </div>
    </div>
  );
};

export default About;

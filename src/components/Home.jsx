import React  from 'react'
import mural from '../assets/home.jpg'

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${mural})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
      <div className='h-screen w-full' style={myStyle}>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-8xl font-bold text-black'>#AlagoasMaisLimpa</h1>
        <div className='mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-400 py-3 px-8 text-base font-medium text-black'>
          <p className='font-bold'>Idealizado pela professora Iara Terra de Oliveira e conta com a participação de professores e estudantes do curso de licenciatura em Química da Universidade Federal de Alagoas Ufal de Arapiraca.  
          <a href='/'> Saiba mais sobre o projeto.
          </a>
          </p>
        </div>
        </div>
      </div>
  )
}

export default Home
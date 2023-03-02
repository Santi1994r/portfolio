import React from 'react'

const Proyects = () => {

  const proyects = [
    {
      name: '',
      info: '',
      image: '',
      technologies: '',
      urlCode: '',
      deployment: ''
    }
  ]
  return (
    <section id='Proyects' className=' bg-black'>
      <h5 className=' text-center text-white pt-20 pb-10 text-4xl font-bold'>Proyectos</h5>
      <div className='flex justify-center'>

        <div className='flex flex-col items-center bg-indigo-900 w-96 rounded-xl hover:scale-110 duration-150'>
          <h6 className='text-center text-white p-2 text-xl'>Ecommerce</h6>
          <p className='text-center text-white p-2 text-xl'>
            Simulación de ecommerce de productos de computación. 
          </p>
          <img className=' w-11/12 mt-3' src="https://i.imgur.com/8e0X6rR.png" alt="santiago ruiz" /> 
          <div className='flex justify-center mt-3'>
            <img className=' w-10' src="https://i.imgur.com/F9Up8KU.png" alt="html" />
            <img className=' w-10' src="https://i.imgur.com/1lPbeVN.png" alt="css" />
            <img className=' w-10' src="https://i.imgur.com/yEmOWLP.png" alt="javascript" />
            <img className=' w-10' src="https://i.imgur.com/vucmtIm.png" alt="bootstrap" />

          </div>
          <div className=' my-3 flex p-3'>
            <button className='rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mr-3 flex items-center h-12 w-40'>
              <img className=' w-10 mr-2' src="https://i.imgur.com/FuPrLd7.png" alt="santiago ruiz" />
              <p>Ver código</p></button>
            <button className='rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 flex items-center h-12 w-40'>
              <img className=' w-10 rounded-xl mr-2' src="https://i.imgur.com/vKTfk5I.jpg" alt="santiago ruiz" />
              <p>Ver proyecto</p>
            </button>
          </div>
        </div>

  {/*       {
          proyects.map(proyect => (
            ''
          ))
        } */}
      </div>
    </section>
  )
}

export default Proyects
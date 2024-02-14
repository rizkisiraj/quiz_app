import { useState } from 'react'
import { Welcome } from './components/Welcome/welcome.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-full min-h-screen bg-white flex items-center'>
        <section className='max-w-screen-md mx-auto'>
         <p className='mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est cum eveniet laboriosam, veritatis labore, culpa molestias reprehenderit reiciendis accusamus veniam doloribus sint illum repellat praesentium aliquam illo vel corporis? Nobis corrupti quisquam quia quasi qui id saepe deleniti libero ad dolores! Non eius voluptatibus corrupti illum eligendi. Maxime, voluptas corporis?</p>
          <div className='grid grid-cols-2 gap-4'>
            <button className='transition-all bg-indigo-200 active:border-b-[3px] block w-full border-solid border-indigo-400 rounded-md border-b-[6px] text-start p-4'>Prabowo gibran</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

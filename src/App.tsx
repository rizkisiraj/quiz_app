import { useState } from 'react'
import { Welcome } from './components/Welcome/welcome.component'
import { Button } from './components/Button/button.component'

const answers = ["Periode", "Nematoda", "Narasaki", "Hiroshima"]


function App() {
  const [answer, setAnswer] = useState('')

  return (
    <>
      <main className='w-full min-h-screen bg-slate-700 flex items-center'>
        <section className='max-w-screen-md mx-auto'>
         <p className='mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est cum eveniet laboriosam, veritatis labore, culpa molestias reprehenderit reiciendis accusamus veniam doloribus sint illum repellat praesentium aliquam illo vel corporis? Nobis corrupti quisquam quia quasi qui id saepe deleniti libero ad dolores! Non eius voluptatibus corrupti illum eligendi. Maxime, voluptas corporis?</p>
          <div className='grid grid-cols-2 gap-4'>
            {
              answers.map(answerLabel => (
                <Button isSelected={answerLabel == answer} label={answerLabel} onClick={() => setAnswer(answerLabel)} />
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App

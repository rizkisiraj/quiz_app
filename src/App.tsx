import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-full min-h-screen flex justify-center items-center flex-col'>
        <h1>Welcome to Quizziap</h1>
        <button className='block'>Start</button>
      </main>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    < >
 
    <div className="p-10 m-20  max-w-sm mx-auto color5 rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Welcome, Finders!</h1>
      <p className="text-black-900">Here's your personal app to find your perfect fit in a job.</p>
    </div>
    
    </>
    
  )
}

export default App

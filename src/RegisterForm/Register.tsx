import { useState } from 'react'
import { Link } from 'react-router-dom';




const Register = () => {

  const [ user , setUser ] = useState("");
  const [ password , setPassword ] = useState("");
  const [ email , setEmail ] = useState("");
  const [error , setError ] = useState(false);
  const [submit , setSubmitted ] = useState(false);


 

const handleSubmit = (e:any) => { 

  e.preventDefault();

  if ( user === "" || password === "" || email === ""  ) {
       setError(true);  
       setSubmitted(false);
       return
  } else { 
     setError(false)
     setSubmitted(true); 
      return
  }

}



const handleChange = (setter:any) => (e:any) => { 
  setter(e.target.value);
  setError(false);
  
}



  return (
<section className="flex flex-col items-center justify-center min-h-screen color3">
  <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-center">Register Form</h1>
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
          type="text"
          placeholder="Type your user"
          value={user}
          onChange={handleChange(setUser)}
        />
      </div>
      <div className="space-y-2">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={handleChange(setPassword)}
        />
      </div>
      <div className="space-y-2">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
          type="email"
          placeholder="Type your email"
          value={email}
          onChange={handleChange(setEmail)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1"
        >
          Log In
        </button>

        <Link to={'/App'}>
        <div className='py-2'>  
          <button
          type="submit"
          className="w-full  px-4 py-2 font-bold text-white color2  rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1"
        >
          Cancel Register
        </button> 
         </div>
       
        </Link>
       
      </div>
    </form>
    {error && <p className="text-red-500">Todos los campos son obligatorios</p>}
    {submit && !error && (
          <div className="p-10 mt-10 bg-blue-100 rounded-xl shadow-md space-y-4">
            <h1 className="text-2xl font-bold">Welcome {user}!</h1>
            <p className="text-black-900">Here's your personal app to find your perfect fit in a job.</p>
            <Link to={'/User'} >
            <button
             type="submit"
             className="w-full mt-10 px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1"
            >
          Sign In
        </button>
            </Link>
          </div>
        )}

  </div>
</section>


  )
}

export default Register
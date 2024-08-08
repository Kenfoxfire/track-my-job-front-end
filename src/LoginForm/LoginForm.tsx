import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {

    let [user, setUser] = useState( 'hola')


    setTimeout(() => {
     setUser('Chompipe') 
    }, 2000);

const handleClick = ()=>{

    setUser("Bryan")

}
<button onClick={handleClick}></button> // Prueba de fun



  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen color3">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center">Login Form</h1>
            <form className="space-y-6">
            <div className="space-y-2">
                <input 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
                type="text" 
                placeholder="Type your user"
                // value={user}
                // onChange={handleChange(setUser)}
                />            
            </div>
            <div className="space-y-2">
                <input
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
                 type="password" 
                 placeholder="Type your password"
                 //           value={password}
                 //          onChange={handleChange(setPassword)}
                />
            </div>
            <div>
                <button 
                type="submit"
                className="w-full px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1">Log In</button>
            </div>
            <div>
                <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1">Forgot Password?</button>
            </div>
                <Link to ={'/Register'}>
            <div className="flex justify-end py-6">
                <button
                type="submit"
                className="w-3/12 px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1">Register</button>
            </div>
            </Link>



            </form>
        </div>
      </section>
    </>
  );
};

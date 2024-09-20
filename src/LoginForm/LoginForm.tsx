import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {

// Crear dos estados para el user y el pasword

let [usuario, setUsuario] = useState("")

let [password, setPassword] = useState("")

//agregar los eventos  de clkick a los botones corrsponbdientes

const handleLogIn = ()=>{
    console.log("Funciona el login");
    alert(`${usuario} ${password}`)
    
}
const handleForgotPass = ()=>{
    console.log("Funciona el forgot paswor");
}
//encontrar la forma de obtrener un dato de un input

const onChangeUserInput = (e:any) =>{
    const {value} = e.target
    console.log(value);
    setUsuario(value)
}
const onChangePassInput = (e:any) =>{
    const {value} = e.target
    console.log(value);
    setPassword(value)
}
//al cambiar el dato de un input se deberia de llamar una funcion que modifique el estado adjuntado a ese input 



//al evento del boton login crear una funcion que obtenga los datos del formulkario


  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen color3">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center">Login Form</h1>
            <form className="space-y-6" >
            <div className="space-y-2">
                <input 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
                type="text" 
                placeholder="Type your user"
                onChange = {onChangeUserInput}
/>            
            </div>
            <div className="space-y-2">
                <input
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
                 type="password" 
                 placeholder="Type your password"
                 onChange = {onChangePassInput}
                />
            </div>
            <div>
                <button 
                type="button"
                className="w-full px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1" onClick={handleLogIn}>Log In</button>
            </div>
            <div>
                <button

                type="button"
                className="w-full px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1" onClick={handleForgotPass}>Forgot Password?</button>
            </div>
                <Link to ={'/Register'}>
            <div className="flex justify-end py-6">
                <button
                type="button"
                className="w-3/12 px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1">Register</button>
            </div>
            </Link>



            </form>
        </div>
      </section>
    </>
  );
};

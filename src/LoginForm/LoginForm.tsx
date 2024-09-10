import { checkinAutentication, checkingCredentials  } from "../store/auth/index";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from "../hooks/index";


export const LoginForm = () => {

   
  const dispatch = useDispatch();

const { email, password, onInputChange } = useForm({
  email: "",
  password: ""
});

const onSubmit = (event:any) => {
  event.preventDefault();
  dispatch(checkingCredentials());   
  console.log(email, password);
}

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen color3">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center">Sign In Form</h1>
            <form className="space-y-6" onSubmit={onSubmit}>
            <div className="space-y-2">
                <input 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
                type="text" 
                placeholder="Type your user"
                value={email}
                onChange={ onInputChange }
                />            
            </div>
            <div className="space-y-2">
                <input
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:color1"
                 type="password" 
                 placeholder="Type your password"
                  value={password}
                  onChange={ onInputChange}
                />
            </div>
            <div>
                <button 
                type="submit"
                onClick={checkinAutentication}
                className="w-full px-4 py-2 font-bold text-white color2 rounded-md hover:bg-buttonsHover focus:outline-none focus:ring-2 focus:color1">Sign In</button>
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

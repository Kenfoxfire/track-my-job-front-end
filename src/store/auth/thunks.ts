import { checkingCredentials} from "../auth/authSlice";


export const checkinAutentication = (  ) => { 
    return async (dispatch:any) => { 
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => { 

    return async (dispatch:any) => { 
        dispatch(checkingCredentials());
      
    }
}
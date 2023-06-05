//Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged} from 'firebase/auth';
import { FirebaseAuth } from '../Firebase/Config';

//react
import { useContext, useState, createContext, useEffect} from 'react';

//react router
import { Navigate, useNavigate} from 'react-router-dom';

export const AuthContext = createContext();
const adminList = ['loise.0607@gmail.com', 'speresp23@gmail.com'];

//Globaliza todo nuestro contexto
export function AuthProvider ({children}){
    const navigate = useNavigate();
    const [user, setUser] = useState(null);


    const signup = async (email, password) => { 
        try{
            const res = await createUserWithEmailAndPassword(FirebaseAuth,email, password);
            console.log(res)
            navigate("/login")
        }catch(error){
            console.log('Error :c');
            alert("Ya estás registrado")
            navigate("/login")
        }  
    };

    const login = async (email, password) => { 
        try{
            const res = await signInWithEmailAndPassword(FirebaseAuth,email, password);
            
            const isLoggedin = Object.keys(res).length == 0? false:true;
            const isAdmin = adminList.includes(email);
            if(isAdmin){
                navigate('/AdminPanel');
                alert(`Bienvenido Admi ${email}`)
                setUser(email)
                console.log("holi, soy el usuario admin")
                console.log(user)
            } else if (isLoggedin && !isAdmin){
                navigate("/");
                setUser(email)
                console.log("holi, soy el usuario normi")
                localStorage.setItem('isLoggedIn', 'true')
                console.log(localStorage.getItem('isLoggedIn'))
                console.log(user)
            }
        }
        catch(error){
            console.log('Error :c');
            alert("registrate")
            navigate("/signup")
        }  
    }
    
    const loginWithGoogle = async () => { 
        const resGoogle = new GoogleAuthProvider();
        signInWithRedirect(FirebaseAuth, resGoogle);
        localStorage.setItem('isLoggedIn', 'true');
        };

    const logout = async () => { await signOut(FirebaseAuth);
        navigate("/")
        localStorage.clear()
    };
    
    const value = { signup, login,loginWithGoogle,logout,user}

 return <AuthContext.Provider value = {value}>
    {children}</AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        console.log("error al crear el auth context");
    }
    return context;
}

export const RequireAuth = ({children})=>{
    const auth = useAuth();
    if (!auth.user) {
		return <Navigate to='/login' />;
	} else {
		return children;
	}
}



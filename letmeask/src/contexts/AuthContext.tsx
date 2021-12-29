import firebase from "firebase";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";

//criar tipagens para referenciar os tipos que dados usados pelo JS
type User = {
  id: string;
  name: string;
  avatar: string;
}
type AuthContextType = {
  user: User | undefined;
  singInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);    

type AuthContextProviderProps ={
  children: ReactNode;
}
export function AuthContextProvider(props: AuthContextProviderProps) {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }
        //Se caso der erro é porque faltou declarar as tipagens 
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
        return () => {
          unsubscribe();
        }
      }
    })
  }, [])

  //função de login
  async function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;
      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }
      //Se caso der erro é porque faltou declarar as tipagens 
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }

  }

  return (
    <AuthContext.Provider value={{ user, singInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>

  );
}
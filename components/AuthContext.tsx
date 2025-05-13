import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: "TU_IOS_CLIENT_ID",
      webClientId: "TU_WEB_CLIENT_ID", // Necesario para Android
    });
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        const userInfo = await GoogleSignin.signInSilently();
        setUser(userInfo);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
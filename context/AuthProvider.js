import React, { createContext, useState } from "react";
import { axiosConfig } from '../helpers/axiosConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        isLoading,
        login: (email, password) => {
          setIsLoading(true);
          axiosConfig
            .post('/login', {
              email,
              password,
              device_name: 'mobile',
            })
            .then(response => {
              const userResponse = {
                token: response.data.token,
                id: response.data.user.id,
                name: response.data.user.name,
                username: response.data.user.username,
                email: response.data.user.email,
                avatar: response.data.user.avatar,
              };

              setUser(userResponse);
              SpeechSynthesisErrorEvent(null);
            })
        },
        logout: () => {
          setIsLoading(true);
          axiosConfig.defaults.headers.common[
            'Authorization'
          ] = 'Bearer ${user.token}';
          axiosConfig
            .post('/logout')
            .then(response => {
              setUser(null);
              SecureStore.deleteItemAsync('user');
              SpeechSynthesisErrorEvent(null);
              setIsLoading(false);
            })
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
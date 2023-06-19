import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("wonderboxtoken");
  const auth = getAuth(app);

  // console.log(user);
  const userRefetch = () => {
    setLoading(true);
    fetch(`http://localhost:5000/api/user/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("wonderboxtoken")}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    userRefetch();
  }, [token]);

  // signup with google
  const signupWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // user Logout
  const logout = () => {
    setLoading(true);
    localStorage.removeItem("wonderboxtoken");
    setLoading(false);
    return signOut(auth);
  };

  const imageUpload = async (files) => {
    let images = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=932ae96b4af949bccda61ebea8105393",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      images.push(data?.data?.url);
    }
    return images;
  };

  const authInfo = {
    user,
    userRefetch,
    setUser,
    signupWithGoogle,
    logout,
    loading,
    imageUpload,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

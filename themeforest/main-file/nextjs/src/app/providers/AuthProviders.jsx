"use client";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const user = useState("Mahbubul Alam");

  const auth = { user };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProviders;

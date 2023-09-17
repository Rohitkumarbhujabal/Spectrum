"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return ( 
    <Toaster 
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
          fontFamily: 'monospace'
        }
      }}
    /> 
  );
}
 
export default ToasterProvider;
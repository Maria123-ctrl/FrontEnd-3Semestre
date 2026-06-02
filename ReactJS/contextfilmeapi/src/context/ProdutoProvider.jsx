import { ProdutoContext } from "./ProdutoContext";
import { useState } from "react";

export const ProdutoProvider = ({ children }) =>{
  const [produtos, setProdutos] = useState([]);

  return (
    <ProdutoContext.Provider
      value={{ 
        produtos, 
        setProdutos }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}
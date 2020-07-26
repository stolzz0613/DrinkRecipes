import React, { Fragment } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";

import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <CategoriasProvider>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;

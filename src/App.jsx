import React from 'react';

/* Components */
import {Navbar, SobreNosotros, AreasAccion, Autoridades, Impacto, Contacto, Footer} from './Components/index'

/* Components css */
import "../src/App.css"

function App() {
  return (
    <>
       <Navbar/>
       <SobreNosotros/>
       <AreasAccion/>
       <Autoridades/>
       <Impacto/>
       {/* <Contacto/>
       <Footer/> */}
    </>
  )
}

export default App

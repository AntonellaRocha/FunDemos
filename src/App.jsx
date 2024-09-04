import React from 'react';

/* Components */
import {Navbar, SobreNosotros, AreasAccion, Autoridades, Impacto, Contacto, Footer} from './Components/index'

/* Components css */
import "../src/App.css"

/* Componentes EmailJS */
import 'emailjs-com';

function App() {
  return (
    <>
       <Navbar/>
       <SobreNosotros/>
       <AreasAccion/>
       <Autoridades/>
       <Impacto/>
       <Contacto/>
       <Footer/>
    </>
  )
}

export default App

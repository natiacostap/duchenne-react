import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './sobre-duchenne.css';

class Diagnostic extends Component{
  render(){
   return (
     <div>
       <div className="header">
         <Navbar />
       </div>
       <div className ="body">
         <div className="container-all">
       <h2>Diagnóstico Duchenne</h2>
        <div className="container-p"> 
        <p> Los médicos suelen diagnosticar la distrofia muscular basándose en los antecedentes médicos familiares del niño, los síntomas y un examen físico. </p>
        <p> Las siguientes pruebas sirven para confirmar el diagnóstico y para determinar el tipo de distrofia muscular que padece un niño: </p>
         <ul>
          <li> Concentración de creatina cinasa (CK, por sus siglas en inglés): este análisis de sangre mide la concentración de creatina cinasa, una proteína que normalmente se encuentra dentro de las células musculares. Cuando la distrofia muscular de Duchenne daña las células musculares, éstas liberan una gran cantidad de CK en la sangre.</li>
          <li> Biopsia muscular: los médicos toman una biopsia extrayendo un pequeño fragmento de músculo, generalmente del muslo. Esta prueba puede revelar si la distrofia muscular es de tipo Duchenne o de tipo Becker, siendo más leve la segunda. </li>
          <li> Pruebas genéticas: permiten identificar la alteración en el gen de la distrofina. Esto ayuda al equipo médico a tomar decisiones sobre cómo tratar el problema y a saber qué esperar de cara al futuro. Si tanto las pruebas genéticas, como la concentración de CK y la exploración física apuntan a un diagnóstico de distrofia muscular de Duchenne, es posible que no sea necesario hacer una biopsia muscular. </li>
          </ul>
   </div>
   </div>
   </div>
   <div>
     <Footer/>
   </div>
   </div>
   )
  }
}
export default Diagnostic
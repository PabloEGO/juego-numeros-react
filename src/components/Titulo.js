import React from "react";
import imgJuego from "./imgJuego.jpg";
function Titulo() {
  return (
    <div>
        <div>
            <h1>Juego de numeros de Pablo Eduardo</h1>
            <img src={imgJuego} alt="Imagen juego"/>
        </div>
    </div>
  );
}

export default Titulo;
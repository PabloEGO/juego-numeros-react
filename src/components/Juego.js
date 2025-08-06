import React from "react";
import { useState, useEffect, useRef } from "react"

// function jugar(numMaquina) {
//     console.log(valorInput)
//     if (numMaquina > 5) {
//         alert("Numero mayor a 5");
//     }
// }
function Juego(props) {

    const [valorInput, setValorInput] = useState(0);
    const [random, setRandom] = useState(0);
    const inputRef = useRef();
    useEffect(() => {
        generarNum();
    }, []);


    const generarNum = () => {
        let max = props.maximo;
        max = max + 1;
        let min = 1;
        let num = Math.floor(Math.random() * (max - min) + min);
        setRandom(num);
    };


    // console.log(random);

    const jugar = (numJugador, numMaquina) => {
        if (numJugador === numMaquina) {
            alert("Has ganado");
        } else {
            alert("Suerte para la proxima" + numMaquina);
        }

        inputRef.current.value = "";
    };

    // generarNum();

    return (
        <div>
            <label htmlFor="txtInput" />
            <input type="number" placeholder="0" ref={inputRef} onChange={(e) =>
                setValorInput(parseInt(e.target.value))} />
            <br></br>
            <button onClick={() => {
                jugar(valorInput, random);
                generarNum();

            }}>Jugar</button>
        </div >
    )
}

export default Juego;
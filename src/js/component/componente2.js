import React, { useContext } from "react";
import { Context } from "../store/indexStore";
const Componente2 = () => {

    const {color, setColor} = useContext(Context)

    const cambiarColor = () => {
        if(color === "No hay color"){
            setColor("Rojo")

        }else{
            setColor("No hay color")
        }
    }

    return (
        <div>
            <h1>Aqui cambiamos el el color</h1>
            <button className="btn btn-success" onClick={cambiarColor}>Cambiar el color</button>
        </div>
    )
}

export default Componente2
import React, { useContext } from "react";
import { Context } from "../store/indexStore";
const Componente1 = () => {

    const {color} = useContext(Context)

    return (
        <div>
            <h1>Aqui vemos el color</h1>
            <span>{color}</span>
        </div>
    )
}

export default Componente1
import React, {useState, createContext} from "react";

//creamos el contexto y lo exportamos
export const Context = createContext(null)

// declarar el componente funcional que sera el proveedor
const Provider = (props) => {
    
    const [color, setColor] = useState("No hay color")

    return (
        <Context.Provider value={{color, setColor}}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider
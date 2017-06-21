import React from 'react';
import FilterCol from './FilterCol';

export default (props) => {

        const funciones = ["Coordinador",
                           "Supervisor",
                          "Circuitos",
                          "Alcoholimetros",
                          "Casos Especiales", 
                          "Suplentes"];
        const zonas = ["1" , "2" , "3" , "4", "5", "6"];

        return(
            <div className='filters-panel'>
                <FilterCol id='funcion' label='Función' items={funciones} onClick={props.onClick}  />
                <FilterCol id='zona' label='Zona' items={zonas} onClick={props.onClick}   />
            </div>
        )
}


import React from 'react';
import FilterCol from './FilterCol';

class FiltersPanel extends React.Component{
   
  
    constructor(props){
        super(props);
        this.funciones = ["Supervisor",
                          "Circuitos",
                          "Alcoholimetros",
                          "Casos Especiales", 
                          "Suplentes"];
        
        this.zonas = ["1" , "2" , "3" , "4", "5", "6"];

    }
    render(){
        //let funciones = this.props.toggledFilters.funcion;
        //let zonas = this.props.toggledFilters.zona;
    return(
        <div className='filters-panel'>
            <FilterCol id='funcion' label='Función' items={this.funciones} onClick={this.props.onClick}  />
            <FilterCol id='zona' label='Zona' items={this.zonas} onClick={this.props.onClick}   />
        </div>
    )}
    
};

export default FiltersPanel;
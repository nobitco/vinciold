import React from 'react';
import NavBar from './NavBar';
import FilterableUserTable from '../contenedores/FilterableUserTable';

 var usersList = [
        { 
            name: 'Carlos Aguilar',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Coordinador',
            horario: '4am - 10am',
            direccion: 'Calle 34 8a 70',
            zona: '4'
        },
         { 
            name: 'Antonio Castro',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Casos Especiales',
            horario: '4pm - 10pm',
            direccion: 'Calle 1b 34 78',
            zona: '5'
        },
         { 
            name: 'Lina Burbano',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Suplentes',
            horario: '11pm - 4am',
            direccion: 'Carrera 56 #52 ',
            zona: '2'
        },
         { 
            name: 'Viviana Zapata ',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Alcoholimetros',
            horario: '8am - 12m',
            direccion: 'Carrera 17a #62a 23',
            zona: '7'
        },
         { 
            name: 'Velasquez',
            url: 'http://sto.mv/Uploads/Members/chairman.png',
            funcion: 'Casos Especiales',
            horario: '8am - 12m',
            direccion: 'Calle 1a  #62a 130',
            zona: '4'
        }
        
    ];
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className='container'>
                <NavBar  />
                <FilterableUserTable usersList={usersList} />
            </div> );
        }
}

export default Layout;























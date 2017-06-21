import React from 'react';
import SearchBar from '../componentes/SearchBar';
import FiltersPanel from '../componentes/FiltersPanel';
import UserTable from '../componentes/UserTable';

export default class FilterableUserTable extends React.Component{
    
    constructor(props){
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.isToggled = this.isToggled.bind(this); 
        this.filterData = this.filterData.bind(this);
        this.state = { filterText : '' ,
                       filterToggles : { funcion : [],
                                         zona : []
                                       }
                     };
    }
    
    handleSearchInput(e){
        let searchInputValue = e.target.value;
        this.setState({ filterText : searchInputValue });
        console.log(this.state.filterText);
    }

     
    handleToggleClick(e){
        
        e.preventDefault();
        let toggledId = e.target.id;    
        let toggledClass = e.target.className; // esto permite clasificar el arreglo para saber si son funciones, zona y horario.
        let toggleArray = this.state.filterToggles[toggledClass];
        if(toggleArray.length > 0){
            var repeatedIndex = toggleArray.indexOf(toggledId);
            repeatedIndex >= 0  ?  
                this.setState({ toggleArray : toggleArray.splice(repeatedIndex,1)   }) : 
                this.setState({ toggleArray : toggleArray.push(toggledId)   });
        }else{
            this.setState({ toggleArray : toggleArray.push(toggledId) });;
        }
        
        //console.log(this.state.filterToggles);
        
    }
    isToggled(user){
        let filterFuncion = this.state.filterToggles.funcion.toString().toLowerCase();
        let filterZona = this.state.filterToggles.zona.toString().toLowerCase();
        let userFuncion = user.funcion.toString().toLowerCase();
        let userZona = user.zona.toString().toLowerCase();
        return filterFuncion.indexOf(userFuncion) >= 0 && filterZona.indexOf(userZona) >= 0 ?  true :  false; // aqui hay que aclarar que mientras que alguno de los dos tenga un valor
    }
    
    filterData(data){
        let filteredItems;
        if(this.state.filterToggles.funcion.length > 0 || this.state.filterToggles.zona.length > 0){
         filteredItems = data.filter(this.isToggled);   
        }else{
        filteredItems = data;
        }
        
        /*data.forEach( (user) => {
            
            for(var prop in user){
             if(user[prop].toString().toLowerCase().includes(filterText) && prop !== 'url'){
                filteredItems.push(user);
                 break;
                }          
            }
            });*/
        console.log(filteredItems);
        return filteredItems; 
    }
    
    render(){
        
        let filteredList = this.filterData(this.props.data);
        return(
            <div>
                <SearchBar results={filteredList.length} filterText={this.state.filterText} onSearchInputChange={this.handleSearchInput}/>
                <FiltersPanel onClick={this.handleToggleClick} />
                <UserTable data={filteredList} />
            </div>
        );
    }
}




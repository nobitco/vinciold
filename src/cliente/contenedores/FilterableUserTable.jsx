import React from 'react';
import SearchBar from '../componentes/SearchBar'
import FiltersPanel from '../componentes/FiltersPanel'
import UserTable from '../componentes/UserTable'
class FilterableUserTable extends React.Component{
    
    constructor(props){
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.funcion = [];
        this.zona = [];
        this.state = { filterText : '' ,
                       filterToggles : { funcion : [],
                                         zona : []
                                       }
                     };
        /*this.toggledFilters = {
            funcion : [],
            zona : []
        }*/
        
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
                this.setState({ toggleArray : toggleArray.push(toggledId)});
        }else{
            this.setState({ toggleArray : toggleArray.push(toggledId) });;
        }
        
        console.log(this.state.filterToggles);
        
    }
    
    render(){
        return(
            <div>
                <SearchBar results={this.props.usersList.length} filterText={this.state.filterText} onSearchInputChange={this.handleSearchInput}/>
                <FiltersPanel onClick={this.handleToggleClick} />
                <UserTable usersList={this.props.usersList}  filters={this.state}/>
            </div>
        );
    }
}



export default FilterableUserTable;
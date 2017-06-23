import React from 'react';
import SearchBar from '../componentes/SearchBar';
import FiltersPanel from '../componentes/FiltersPanel';
import UserTable from '../componentes/UserTable';

export default class FilterableUserTable extends React.Component{
    
    constructor(props){
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.validate = this.validate.bind(this); 
        this.filterData = this.filterData.bind(this);
        this.state = { filterText : '' ,
                       funcion : '',
                       zona : ''
                     };
    }
    
    handleSearchInput(e){
        let searchInputValue = e.target.value;
        this.setState({ filterText : searchInputValue });
    }

     
    handleToggleClick(e){
        
        e.preventDefault();
        let toggledId = e.target.id;    
        let toggledClass = e.target.className; // establece a que atributo del estado debe asignarse el valor.
        
        this.setState( (prevState) => {
            console.log(prevState[toggledClass].includes(toggledId));
            prevState[toggledClass].includes(toggledId) ? 
                { [toggledClass] : '' } :
                { [toggledClass] : toggledId };
        });
                      
           
        
        // el condicional sólo debe comparar los estados que contengan un valor para ser comparado, si no lo tiene se debe discrimar este estado a comparar.
        console.log('filterFuncion: ' + this.state.funcion + '  filterzona:  ' + this.state.zona);
        
    }
 
    validate(user){
        let filterFuncion = this.state.funcion.toString().toLowerCase();
        let filterZona = this.state.zona.toString().toLowerCase();
        let userFuncion = user.funcion.toString().toLowerCase();
        let userZona = user.zona.toString().toLowerCase();
        return true;
    }
    
    filterData(data){
    
        if(this.state.funcion || this.state.zona ){
        return data.filter(this.validate)
        }else{
        return data; 
        }
        //console.log(filteredItems);
        
        
        /*data.forEach( (user) => {
            
            for(var prop in user){
             if(user[prop].toString().toLowerCase().includes(filterText) && prop !== 'url'){
                filteredItems.push(user);
                 break;
                }          
            }
            });*/
        
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




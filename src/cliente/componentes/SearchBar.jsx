import React from 'react';

const SearchBar = (props) => {
    
    return(
        <div>
            <input name="searchInput" id="main-searchbar" type='text' value={props.filterText} placeholder='Buscar...' onChange={props.onSearchInputChange}/>
            <span id="list-results">{props.results} Resultados</span>
        </div>   
            
    );
}

export default SearchBar;
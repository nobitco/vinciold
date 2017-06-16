import React from 'react';
import FilterToggle from './FilterToggle';


class FilterCol extends React.Component{
    
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.filters = [];
    }
     
    handleToggle(e){
        e.preventDefault();
       
        let target = e.target;
        this.filters.push(target.id);
       /* let filterName = target.label;
        targetParent.classList.toggle('selected');
        targetParent.classList.includes('selected') ? 
                            filters.push(filterName) :
                            filters.splice(filters.indexOf(filterName),1)*/
        
        console.log(this.filters);
    }
    
    render(){
        //let toggledFilters = this.props.toggledFilters;  
        let toggles = this.props.items.map((item) => {
                           
               return (
                   <FilterToggle class={this.props.id} key={item} label={item} onClick={this.props.onClick}/>
               );
                
            });
        
    return(
        <div className='filter-col' id={this.props.id}>
            <h4>{this.props.label}</h4>
            <ul id={this.props.id}>
              { toggles } 
            </ul>
        </div>
        )}
}

export default FilterCol;
import React from 'react';
import FilterToggle from './FilterToggle';


export default class FilterCol extends React.Component{
    
    constructor(props){
        super(props);
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


import React from 'react';
import FilterToggle from './FilterToggle';


export default (props) => {
    
    let toggles = props.items.map((item) => {
                           return  <FilterToggle class={props.id} key={item} label={item} onClick={props.onClick}/>
                    }); 
    return(
        <div className='filter-col' id={props.id}>
            <h4>{props.label}</h4>
            <ul id={props.id}>
              { toggles } 
            </ul>
        </div>
        )
}


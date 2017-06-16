import React from 'react';

class FilterToggle extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { on : false };
        //this.toggle = this.toggle.bind(this);
    }
    /*toggle(toggled){
        let target = e.target;
        let targetParent = target.parentNode;
        e.preventDefault();
        targetParent.classList.toggle('selected');
        alert(target.id);
    }*/
    
    render(){
        return (
        <li className="filterBtn">
                <a href='' className={this.props.class} id={this.props.label} onClick={this.props.onClick}>{this.props.label}</a>
        </li>
        );
    }
    
    
}

export default FilterToggle;                                                                                                                                                                                                                                                                                                                                                                                                                                              
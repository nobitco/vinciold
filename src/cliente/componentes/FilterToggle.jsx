import React from 'react';

export default class FilterToggle extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { on : false };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(e){
        e.preventDefault();
        
        let targetParent = e.target.parentNode;
        this.setState( (prevState) => 
                      ({ on :  !prevState.on }));
        
        targetParent.classList.toggle('selected');
        this.props.onClick(e);
    }
    
    render(){

        return (
        <li className="filterBtn">
                <a href='' className={this.props.class} id={this.props.label} onClick={this.toggle}>{this.props.label}</a>
        </li>
        );
    }
    
    
}
                                                                                                                                                                                                                                                                                                                                                                                                                                          
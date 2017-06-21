import React from 'react';

export default  (props) => {
    
    const toggle = (e) => {
        let targetParent = e.target.parentNode;
        targetParent.classList.toggle('selected');
        props.onClick(e);
    } 
    return (
        <li className="filterBtn">
                <a href='' className={props.class} id={props.label} onClick={toggle}>{props.label}</a>
        </li>
    )    
}
                                                                                                                                                                                                                                                                                                                                                                                                                                          
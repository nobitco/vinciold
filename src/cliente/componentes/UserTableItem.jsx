import React from 'react';

const UserTableItem = (props) => (
    <div className='user-table-item'>
        <img src={props.user.url} className='circle' alt={props.user.name}/>
        <h3>{props.user.name}</h3>
        <h4>{props.user.funcion}</h4>
        <h4>{props.user.horario}</h4>
        <h4>{props.user.direccion}</h4>
        <h4>{props.user.zona}</h4>
    </div>

);

export default UserTableItem;
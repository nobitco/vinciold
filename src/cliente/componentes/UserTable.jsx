import React from 'react';
import UserTableItem from './UserTableItem';

const UserTable = (props) => {
    
   
    var items = [];
    var filterText = props.filters.filterText.toString().toLowerCase();
    var filterToggles = props.filters.filterToggles.toString().toLowerCase();
    props.usersList.forEach( (user, index) => {
        for(var prop in user){
            if(user[prop].toString().toLowerCase().includes(filterText) && prop !== 'url'){ 
                items.push(<UserTableItem key={index} user={user} />);
                break;
            }
        }
    });
    
    
    return(
        <div id='user-table'>
          {items}
        </div>
    );
}

export default UserTable;
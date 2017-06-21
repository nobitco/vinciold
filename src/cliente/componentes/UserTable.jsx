import React from 'react';
import UserTableItem from './UserTableItem';

export default (props) => {

     let data = props.data;
     let list =  data.map((user, index) => 
      (<UserTableItem key={index} user={user} />)
     );
   
    
    return(    
        <div id='user-table'>
          {list}
        </div>
    );
}

// komponent funkcyjny bo tylko wyswietla
import React from "react";
import './UsersList.css';

function UsersList(props) {
    let usersList = props.usersList;
    // przeiterowanie users list to userslielement
    let usersLiElemenst = usersList.map((user)=>
    {
        return <li key={user.id}>{user.name}<span onClick={()=> props.removeUserMethod(user.id)}>X</span></li>

        
    })
    // console.log(usersList);
    return (
        <ul className="the-list">
            {usersLiElemenst}
            {/* <li>Hans<span>X</span></li>
            <li>Marcin<span>X</span></li> */}
        </ul>
    );
}

export default UsersList;
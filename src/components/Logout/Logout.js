import React from "react";
import './logout.css';
import logout from '../../assets/logout.png';

const Logout = (props) => {
    return (
        <div>
            <img id="logout" alt="logout" src={logout} />
        </div>
    )
}

export default Logout;
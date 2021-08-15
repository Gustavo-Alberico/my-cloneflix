import React from 'react';
import './style.css';

function Header(){ 
    return(
        <header className="headerBlack">
            <div className="headerLogo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                </a>
            </div>
            <div className="headerUser">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
} 

export default Header;
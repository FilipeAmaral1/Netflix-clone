import React from "react";
import './Header.css';

export default ({black}) => {
    return(
         <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/netflix-logo.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/gdruy0cnkgnaadpxiadi" alt="Usuário" />
                </a>
            </div>
         </header>
    );
}
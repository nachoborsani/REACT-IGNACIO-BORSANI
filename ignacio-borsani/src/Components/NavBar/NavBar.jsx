import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <header>
            <h1>Kramer Cerveceria</h1>
            <nav>
                <ul>
                    <li>
                        Inicio
                    </li>
                    <li>
                        Menu
                    </li>
                    <li>
                        Promos
                    </li>
                    <li>
                        Ubicacion
                    </li>
                    <li>
                        Contacto
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar
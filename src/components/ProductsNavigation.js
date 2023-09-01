import { NavLink } from 'react-router-dom'

import './ProductsNavigation.css'


// const jqueryFun = () => { 
//     $('.product-genre').on('mouseenter', function() {
//     console.log('hi');
//     $(this).addClass('white')
//     $('.product-genre').on('mouseout', function() {
//         $(this).removeClass('white')
//     })
// })
// }

function ProductsNavigation() {
    // jqueryFun()
    return<>
        <ul className="nav justify-content-center product-nav">
                <li className="nav-item dropdown ">
                    <NavLink className="nav-link dropdown-toggle profile-nav product-genre" href="/" id="navbarDropdown" role='button' data-bs-toggle="dropdown" aria-expanded="false">
                        Дамски обувки
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>Sandali</li>
                        <li>Sandali</li>
                        <li>Sandali</li>
                        <li>Sandali</li>
                    </ul>
                    </li>
            <li className="nav-item">
                <NavLink className="nav-link product-genre" to="/">Мъжки обувки</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link product-genre" to="/">Детски обувки</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link product-genre" to="/">Намаление</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link product-genre" to="/">Аксесоари</NavLink>
            </li>
        </ul>
    </>
}

export default ProductsNavigation;
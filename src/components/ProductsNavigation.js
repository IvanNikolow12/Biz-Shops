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
                <li className="nav-item">
                    <a className="nav-link profile-nav product-genre" href="/catalog/ladies">Жени</a>
                </li>
            <li className="nav-item">
                <a className="nav-link profile-nav product-genre" href="/catalog/mens">Мъже</a></li>
            <li className="nav-item dropdown">
                <a className="nav-link profile-nav product-genre" href="/catalog/children">Деца</a>
            </li>
            <li className="nav-item">
                <a className="nav-link product-genre" href="/discount">Намаление</a>
            </li>
            <li className="nav-item">
                <a className="nav-link product-genre" href="/accessories">Аксесоари</a>
            </li>
        </ul>
    </>
}

export default ProductsNavigation;




/*
MODEL FOR DROPDOWN MENU !
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle profile-nav product-genre" to="/children" id="navbarDropdownChildren" role='button' data-bs-toggle="dropdown" aria-expanded="false">
                    Детски обувки</NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="children-sport"><li className='list-group-item list-group-item-action'>Детски спортни</li></NavLink>
                        <NavLink to="children-sandals"><li className='list-group-item list-group-item-action'>Детски сандали</li></NavLink>
                        <NavLink to="children-chehli"><li className='list-group-item list-group-item-action'>Детски чехли</li></NavLink>
                        <NavLink to="children-boti"><li className='list-group-item list-group-item-action'>Детски боти</li></NavLink>
                        <NavLink to="children-botushi"><li className='list-group-item list-group-item-action'>Детски ботуши</li></NavLink>
                    </ul>
            </li>
*/ 
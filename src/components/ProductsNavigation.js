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
                    <NavLink className="nav-link dropdown-toggle profile-nav product-genre" to="/" id="navbarDropdownWomen" role='button' data-bs-toggle="dropdown" aria-expanded="false">
                        Дамски обувки
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="ladies-sport"><li className='list-group-item list-group-item-action'>Дамски спортни</li></NavLink>
                        <NavLink to="ladies-sandals"><li className='list-group-item list-group-item-action'>Дамски сандали</li></NavLink>
                        <NavLink to="ladies-chehli"><li className='list-group-item list-group-item-action'>Дамски чехли</li></NavLink>
                        <NavLink to="ladies-boti"><li className='list-group-item list-group-item-action'>Дамски боти</li></NavLink>
                        <NavLink to="ladies-botushi"><li className='list-group-item list-group-item-action'>Дамски ботуши</li></NavLink>
                    </ul>
                </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle profile-nav product-genre" to="/" id="navbarDropdownMen" role='button' data-bs-toggle="dropdown" aria-expanded="false">
                    Мъжки обувки</NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="mens-sport"><li className='list-group-item list-group-item-action'>Mъжки спортни</li></NavLink>
                        <NavLink to="mens-sandals"><li className='list-group-item list-group-item-action'>Mъжки сандали</li></NavLink>
                        <NavLink to="mens-chehli"><li className='list-group-item list-group-item-action'>Mъжки чехли</li></NavLink>
                        <NavLink to="mens-boti"><li className='list-group-item list-group-item-action'>Mъжки боти</li></NavLink>
                        <NavLink to="mens-botushi"><li className='list-group-item list-group-item-action'>Mъжки ботуши</li></NavLink>
                    </ul>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle profile-nav product-genre" to="/" id="navbarDropdownChildren" role='button' data-bs-toggle="dropdown" aria-expanded="false">
                    Детски обувки</NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="children-sport"><li className='list-group-item list-group-item-action'>Детски спортни</li></NavLink>
                        <NavLink to="children-sandals"><li className='list-group-item list-group-item-action'>Детски сандали</li></NavLink>
                        <NavLink to="children-chehli"><li className='list-group-item list-group-item-action'>Детски чехли</li></NavLink>
                        <NavLink to="children-boti"><li className='list-group-item list-group-item-action'>Детски боти</li></NavLink>
                        <NavLink to="children-botushi"><li className='list-group-item list-group-item-action'>Детски ботуши</li></NavLink>
                    </ul>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link product-genre" to="/discount">Намаление</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link product-genre" to="/accessories">Аксесоари</NavLink>
            </li>
        </ul>
    </>
}

export default ProductsNavigation;
import { NavLink } from 'react-router-dom';


import {AiFillHeart} from 'react-icons/ai'
import {FaShoppingCart, FaUserAlt} from 'react-icons/fa';
import {ImLocation} from 'react-icons/im'

import ProductsNavigation from './ProductsNavigation';
import './MainNavigation.css'


function MainNavigation() {

    
    return <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Biz-Shop</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"><ImLocation size={25} className='main-navigation-location'/>Магазини</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle profile-nav" href="/" id="navbarDropdown" role='button' data-bs-toggle="dropdown" aria-expanded="false">
                        <FaUserAlt size={25}/>Профил
                    </a>
                    <ul className="dropdown-menu profile" aria-labelledby="navbarDropdown">
                        <form className="profile-form">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Въведи своя имейл</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Парола</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label forgotten-password" htmlFor="exampleCheck1">Забравена парола ?</label>
                                <button className="btn btn-dark">Влез</button>
                            </div>
                            <hr/>
                            <NavLink to='/auth?mode=register' className='main-navigation-register-link'>Искам да се регистрирам</NavLink>
                        </form>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/favourites"><AiFillHeart className='main-navigation-heart' size={25}/>Любими</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaShoppingCart size={25}/>Количка
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <label className='main-navigation-empty-cart'>Количката e празна</label>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Търси продукти" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Търсене</button>
                </form>
                </div>
            </div>
        </nav>
        <ProductsNavigation/>
    </>
}

export default MainNavigation;
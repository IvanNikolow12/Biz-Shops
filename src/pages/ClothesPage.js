import { useLocation } from 'react-router-dom';

import { FaPlusSquare } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import './LadiesPage.css'

function ClothesPage() {
    const location = useLocation();
    const productData = location.state?.data;

    console.log(productData)

    return <>
    ajsbfsgafjhsabfjsbhafshabfjh
    <div className="container-fluid">
    <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Начало</a></li>
                <li className="breadcrumb-item"><a href="/">Жени</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
        <div className="row ajaxContainer" data-url="/ladies">
            <aside className="col-12 col-lg-3 col-xxlg-2">
                <section className="panel categories-panes">
                    <h2 className="h3 panel-title">Категории</h2>
                    <div className="panel-body">
                        {/* <nav className="sidebar-nav">
                            <ul className="list-unstyled">
                                <li><NavLink to="clothes" >Облекло ({Object.entries(data.clothes).length})</NavLink></li>
                                <li><NavLink to="shoes" state={{data: data.shoes, id: data.shoes}}>Обувки ({Object.entries(data.shoes).length})</NavLink></li>
                                <li><NavLink to="accessoires">Аксесоари (94)</NavLink></li>
                            </ul>
                        </nav> */}
                    </div>
                </section>
                <section className='panel panel-white filters-panel'>
                    <h2 className='h3 panel-title'>Филтри</h2>
                    <div className="panel-body">
                        <nav className="sidebar-nav">
                            <h5 className='filter-title'>Марки</h5>
                            <ul className="list-unstyled">
                                <li><a href="obleklo">Adidas (124)</a></li>
                                <li><a href="obleklo">Nike (240)</a></li>
                                <li><a href="obleklo">Under Armour (94)</a></li>
                            </ul>
                            <hr/>
                            <h5 className='filter-title'>Размер</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">XS</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">S</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">M</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">L</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">XL</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">XXL</label>
                            </div>
                            <hr/>
                            <h5 className='filter-title'>Цена</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">50лв. - 100лв.</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">100лв. - 200лв.</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">200лв. - 300лв.</label>
                            </div>
                        </nav>
                    </div>
                </section>
            </aside>
            <section className="col-12 col-lg-9 col-xxlg-2">
                <header className='catalog-header'>
                    <h1 className='page-title'>Жени - Облекло</h1>
                    <span className='page-result-count text-gray text-sm'> 1520 продукта</span>
                    <NavLink to="/new-product"><FaPlusSquare className='add-product-icon' size={40}/></NavLink>
                    <hr/>
                    <div className='sorting-container'>
                        <div className='list-sorting'>
                            <div className='form-group'>
                                <div className='select-container sorting-item'>
                                <label className='products-per-page'>Покажи по</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">50</option>
                                    <option value="2">60</option>
                                    <option value="3">70</option>
                                </select>
                                </div>
                                <div className='select-container sorting-item'>
                                <label className='products-per-page'>Сортирай по</label>
                                    <select className='form-select' data-filter-single="1" data-filter="showBy">
                                        <option>Най-популярни</option>
                                        <option>Най-нови</option>
                                        <option>Най-скъпи</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="row row-cols-4 row-cols-md-4 g-4"> 
                    {productData && Object.entries(productData).map(clothes => <NavLink to={`/${clothes[0]}`} key={clothes[0]} state={{data: Object.assign(clothes[1], {id: clothes[0]})}}>
                        <div className="col catalog-product-col" key={clothes[0]}>
                            <div className="card h-100">
                            <img src={clothes[1].productImages.imageOne} className="card-img-top catalog-product-image" alt="product"/>
                            <div className="card-body">
                                <h5 className="card-title">{clothes[1].name}</h5>
                                <p className="card-text">Цена: {clothes[1].newPrice}лв.</p>
                            </div>
                            </div>
                        </div>
                        </NavLink>)}
                </div>
            </section>
        </div>
    </div>
    </>
}

export default ClothesPage;
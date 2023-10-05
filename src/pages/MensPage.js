
import { FaPlusSquare } from 'react-icons/fa'
import { NavLink, json, useLoaderData } from 'react-router-dom';
import './LadiesPage.css'
import { useEffect, useState } from 'react';

function MensPage() {
    let [listOfData, setListOfData] = useState([]);
    const [productCounter, setProductCounter] = useState(0);
    const [headerTitle, setHeaderTitle] = useState('');

    const data = useLoaderData();
    console.log(data)

    function clothesFilterHandler() {
        setListOfData(data.clothes);
        setProductCounter(Object.keys(data.clothes).length)
        setHeaderTitle('- Облекло')
    }

    function shoesFilterHandler() {
        setListOfData(data.shoes);
        setProductCounter(Object.keys(data.shoes).length);
        setHeaderTitle('- Обувки');
    }

    function accessoiresFilterHandler() {
        setListOfData(data.accessoires);
        setProductCounter(Object.keys(data.accessoires).length);
        setHeaderTitle('- Аксесоари');
    }

    let unOrderedData = {};
    if (listOfData.length === 0) {
        Object.assign(listOfData, data.shoes, data.clothes || '', data.accessoires || '');  
        unOrderedData = Object.entries(listOfData).sort((a, b) => a[1].articulNumber - b[1].articulNumber);
        
    }
    useEffect(() => {
        setProductCounter(unOrderedData.length)
        // setHeaderTitle('Всичко');
    }, [])

    listOfData = Object.entries(listOfData).sort((a, b) => a[1].articulNumber - b[1].articulNumber);

    return <>
    <div className="container-fluid">
        <nav aria-label="breadcrumb history-bar">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Начало</a></li>
                    <li className="breadcrumb-item"><a href="/">Мъже</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
        </nav>
        <div className="row ajaxContainer">
            <aside className="col-12 col-lg-3 col-xxlg-2">
                <section className="panel categories-panes">
                    <h2 className="h3 panel-title">Категории</h2>
                    <div className="panel-body">
                        <nav className="sidebar-nav">
                            <ul className="list-unstyled">
                                <li><button type='submit' onClick={clothesFilterHandler} >Облекло ({data && Object.entries(data.clothes).length})</button></li>
                                <li><button type='submit' onClick={shoesFilterHandler} >Обувки ({data && Object.entries(data.shoes).length})</button></li>
                                <li><button type='submit' onClick={accessoiresFilterHandler}>Аксесоари ({data && Object.entries(data.accessoires).length})</button></li>
                            </ul>
                        </nav>
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
                    <h1 className='page-title'>Мъже {headerTitle}</h1>
                    <span className='page-result-count text-gray text-sm'> {productCounter} продукта</span>
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
                <div className="row row-cols-1 row-cols-md-4 g-4"> 
                    {listOfData && listOfData.map(item => <NavLink to={`/${item[0]}`} key={item[0]} state={{data: Object.assign(item[1], {id: item[0]})}}>
                        <div className="col h-100" key={item[0]}>
                            <div className="card">
                            <img src={item[1].productImages.imageOne} className="card-img-top catalog-product-image" alt="product"/>
                            <div className="card-body">
                                <h5 className="card-title">{item[1].name}</h5>
                                <p className="card-text">Цена: {item[1].newPrice}лв.</p>
                            </div>
                            </div>
                        </div>
                    </NavLink>)}
                    {/* {unOrderedData && unOrderedData.map(item => <NavLink to={`/${item[0]}`} key={item[0]} state={{data: Object.assign(item[1], {id: item[0]})}}>
                        <div className="col h-100" key={item[0]}>
                            <div className="card">
                            <img src={item[1].productImages.imageOne} className="card-img-top catalog-product-image" alt="product"/>
                            <div className="card-body">
                                <h5 className="card-title">{item[1].name}</h5>
                                <p className="card-text">Цена: {item[1].newPrice}лв.</p>
                            </div>
                            </div>
                        </div>
                    </NavLink>)} */}
                </div>
            </section>
        </div>
    </div>
    </>
}

export default MensPage;

export async function loader({request, params}) {
    const fullUrl = window.location.href;
    const FETCH_PATH = fullUrl.split('/')[4];              ///////////////////////   LADIES / MENS / CHILDRENS

    let url = `https://biz-shops-default-rtdb.europe-west1.firebasedatabase.app/catalog/${FETCH_PATH}.json`

    const response = await fetch(url);

    if(!response.ok) {
        throw json({message: 'Cloud not fetch data'}, {status: 500})
    } else {
        return response;
    }
}
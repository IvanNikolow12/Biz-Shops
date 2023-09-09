
import { NavLink } from 'react-router-dom';
import './LadiesPage.css'

function LadiesPage() {
    return <>
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
                        <nav className="sidebar-nav">
                            <ul className="list-unstyled">
                                <li><NavLink to="clothes">Облекло (124)</NavLink></li>
                                <li><NavLink to="shoes">Обувки (240)</NavLink></li>
                                <li><NavLink to="accessoires">Аксесоари (94)</NavLink></li>
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
                                <label className="form-check-label" for="flexRadioDefault1">XS</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">S</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">M</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">L</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">XL</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">XXL</label>
                            </div>
                            <hr/>
                            <h5 className='filter-title'>Цена</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">50лв. - 100лв.</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">100лв. - 200лв.</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">200лв. - 300лв.</label>
                            </div>
                        </nav>
                    </div>
                </section>
            </aside>
            <section className="col-12 col-lg-9 col-xxlg-2">
                <header className='catalog-header'>
                    <h1 className='page-title'>Жени - Марки</h1>
                    <span className='page-result-count text-gray text-sm'> 1520 продукта</span>
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
                        <a href="/Under-Armour-HOVR-Dragon">
                        <div className="col">
                            <div className="card h-100">
                            <img src="https://www.eschuhe.ch/fr/media/catalog/product/cache/image/650x650/0/0/0000208825573_08_pl.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Under Armour HOVR Dragon</h5>
                                <p className="card-text">Price: 254лв</p>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div className="col">
                            <div className="card h-100">
                            <img src="https://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw508a21ed/images-square/zoom/415944-Black-Black-Grey-Under-Armour-Mens-Charged-Phantom-Spikeless-Golf-Shoes-1.jpg?sw=635" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Under Armour DrumX</h5>
                                <p className="card-text">Цена: 230лв</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                            <img src="https://www.tradeinn.com/f/13941/139418805/under-armour-charged-bandit-tr-2-trail-running-shoes.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Under Armour Charged</h5>
                                <p className="card-text">Цена: 260лв</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://img.eobuwie.cloud/eob_product_656w_656h(2/5/f/7/25f7366970a938722414cb8f543fcb9a1d6fb367_0000207324602_04_rz.jpg,jpg)/chaussures-under-armour-ua-hovr-rise-2-3023009-001-blk.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR</h5>
                                    <p className="card-text">Цена: 200лв</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.tradeinn.com/f/13893/138935811/nike-swim-bikini-toppi-scoop-multi-logo.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR:X</h5>
                                    <p className="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.innovasport.com/medias/top-under-armour-mid-padless-is-1373865-100-1.jpg?context=bWFzdGVyfGltYWdlc3w2MjU5MXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaDZiLzExNDk2MTQwODY1NTY2LmpwZ3xlNDM0ZWMxYTc1ZDMzYzJmNmZjZjliNzdhOWFkY2E3NmE5YmQxYjkyNWJhYTI2MzNiMzg1ODY0ODMxYjdjOTZh" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR:X</h5>
                                    <p className="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw25d67365/images/36944001/Rebel_36944001_black_hi-res.jpg?sw=1000&sh=1000&sm=fit&q=70" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR:X</h5>
                                    <p className="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://thumblr.uniid.it/product/193279/4f5b95b11a61.jpg" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR:X</h5>
                                    <p className="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwee1c17d6/images/66375001/Rebel_66375001_black_hi-res.jpg?sw=750&sh=750&sm=fit&q=60" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR:X</h5>
                                    <p className="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://lb.mikesport.com/cdn/shop/products/IN118064_c5108d63-b224-44d4-b4ca-35cef8b6d819.jpeg?v=1639914619" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR:X</h5>
                                    <p className="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://5.imimg.com/data5/CP/EB/VD/SELLER-18827386/puma-men-s-no-show-bamboo-socks-3-pack.png" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR:X</h5>
                                    <p className="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://static.footshop.com/img/p/6/5/0/7/7/3/650773.jpg" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Under Armour HOVR:X</h5>
                                    <p className="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    </div>
    </>
}

export default LadiesPage;
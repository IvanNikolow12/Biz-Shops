

import Footer from "../components/Footer";
import "./HomePage.css"

function HomePage() {
    return <>
        <section className="upside-carousel">
            <div id="carouselExampleIndicators" className="carousel slide cycle" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://evkimbzxhyk.exactdn.com/wp-content/uploads/2021/09/ENTER2RUN23.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/-4kA5pWgHVg/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://c0.wallpaperflare.com/preview/877/230/517/singapore-sprint-sprinter-spikes.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>
        <section className="home-page-content">
            <section className="home-page-models-section">
                <div className="row row-cols-1 row-cols-md-4 g-1">
                    <div className="col">
                        <div className="card">
                        <img src="https://i.pinimg.com/474x/d2/b7/58/d2b758a99b7319f77882f7030bc79bcb.jpg" className="card-img-top" alt="..."/>
                        <strong className="home-page-card-header">МЪЖЕ</strong>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://i.pinimg.com/736x/e0/eb/cc/e0ebcc7d17c6d9fb7dd0b9d16db33b56.jpg" className="card-img-top" alt="..."/>
                        <button className="home-page-card-look-models">Виж модели</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://newschannel20.com/resources/media/3be5e78e-607d-489f-9d87-88a735771e56-large1x1_1280x720_61115P00LSNBP.jpg?1547237386999" className="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://thumbs.dreamstime.com/b/photographic-film-blue-screen-full-resolution-photographic-film-blue-screen-full-resolution-166202890.jpg" className="card-img-top" alt="..."/>
                        <div className="home-page-last-card">
                            <button className="home-page-last-card-button">Обувки</button>
                            <button className="home-page-last-card-button">Облекло</button>
                            <button className="home-page-last-card-button">Аксесоари</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-page-models-section">
                <div className="row row-cols-1 row-cols-md-4 g-1">
                    <div className="col">
                        <div className="card">
                        <img src="https://thumbs.dreamstime.com/b/beautiful-fitness-model-girl-posing-wearing-sport-clothes-concept-89091820.jpg" className="card-img-top" alt="..."/>
                        <strong className="home-page-card-header">ЖЕНИ</strong>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://filebroker-cdn.lazada.sg/kf/Sabd8e13e00254965b23753ed5ab6b16be.png" className="card-img-top" alt="..."/>
                        <button className="home-page-card-look-models">Виж модели</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://daisy-bella.com/cdn/shop/files/Untitleddesign_80_800x.png?v=1688657622" className="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://w0.peakpx.com/wallpaper/81/189/HD-wallpaper-light-bp-colours-gradient-karmughil-karmughil25-karmughil2576-light-pastel-pink-screen.jpg" className="card-img-top" alt="..."/>
                        <div className="home-page-last-card">
                            <button className="home-page-last-card-button">Обувки</button>
                            <button className="home-page-last-card-button">Облекло</button>
                            <button className="home-page-last-card-button">Аксесоари</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-page-models-section">
                <div className="row row-cols-1 row-cols-md-4 g-1">
                    <div className="col">
                        <div className="card">
                        <img src="https://wezlie.com/cdn/shop/products/796ebdf8-79f2-4f5a-80ad-3f04fe0155a5.jpg?v=1630550105" className="card-img-top" alt="..."/>
                        <strong className="home-page-card-header">ДЕЦА</strong>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://lzd-img-global.slatic.net/g/p/81342337ac7c587262e25480bc629e41.jpg_720x720q80.jpg" className="card-img-top" alt="..."/>
                        <button className="home-page-card-look-models">Виж модели</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://ae01.alicdn.com/kf/S423fc43e89804596a2e76fb210925ae8j/Fashion-Kids-Little-Girls-Clothing-2-Pieces-Sets-Cotton-Solid-Casual-T-shirt-Elastic-Waist-Pants.jpg" className="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://img.freepik.com/premium-photo/abstract-luxury-gold-yellow-gradient-studio-wall-well-use-as-backgroundlayoutbanner-product-pres_1258-88725.jpg" className="card-img-top" alt="..."/>
                        <div className="home-page-last-card">
                            <button className="home-page-last-card-button">Обувки</button>
                            <button className="home-page-last-card-button">Облекло</button>
                            <button className="home-page-last-card-button">Аксесоари</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-page-new-products-section">
                <div className="home-page-new-products-header">Нови</div>
                <hr/>
                <div className="home-page-new-products">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <a href="Under-Armour-HOVR-Dragon">
                        <div class="col">
                            <div class="card h-100">
                            <img src="https://www.eschuhe.ch/fr/media/catalog/product/cache/image/650x650/0/0/0000208825573_08_pl.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Under Armour HOVR Dragon</h5>
                                <p class="card-text">Price: 254лв</p>
                            </div>
                            </div>
                        </div>
                        </a>
                        <div class="col">
                            <div class="card h-100">
                            <img src="https://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw508a21ed/images-square/zoom/415944-Black-Black-Grey-Under-Armour-Mens-Charged-Phantom-Spikeless-Golf-Shoes-1.jpg?sw=635" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Under Armour DrumX</h5>
                                <p class="card-text">Цена: 230лв</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <img src="https://www.tradeinn.com/f/13941/139418805/under-armour-charged-bandit-tr-2-trail-running-shoes.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Under Armour Charged</h5>
                                <p class="card-text">Цена: 260лв</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://img.eobuwie.cloud/eob_product_656w_656h(2/5/f/7/25f7366970a938722414cb8f543fcb9a1d6fb367_0000207324602_04_rz.jpg,jpg)/chaussures-under-armour-ua-hovr-rise-2-3023009-001-blk.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR</h5>
                                    <p class="card-text">Цена: 200лв</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://www.tradeinn.com/f/13893/138935811/nike-swim-bikini-toppi-scoop-multi-logo.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR:X</h5>
                                    <p class="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://www.innovasport.com/medias/top-under-armour-mid-padless-is-1373865-100-1.jpg?context=bWFzdGVyfGltYWdlc3w2MjU5MXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaDZiLzExNDk2MTQwODY1NTY2LmpwZ3xlNDM0ZWMxYTc1ZDMzYzJmNmZjZjliNzdhOWFkY2E3NmE5YmQxYjkyNWJhYTI2MzNiMzg1ODY0ODMxYjdjOTZh" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR:X</h5>
                                    <p class="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw25d67365/images/36944001/Rebel_36944001_black_hi-res.jpg?sw=1000&sh=1000&sm=fit&q=70" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR:X</h5>
                                    <p class="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://thumblr.uniid.it/product/193279/4f5b95b11a61.jpg" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR:X</h5>
                                    <p class="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwee1c17d6/images/66375001/Rebel_66375001_black_hi-res.jpg?sw=750&sh=750&sm=fit&q=60" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR:X</h5>
                                    <p class="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://lb.mikesport.com/cdn/shop/products/IN118064_c5108d63-b224-44d4-b4ca-35cef8b6d819.jpeg?v=1639914619" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR:X</h5>
                                    <p class="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://5.imimg.com/data5/CP/EB/VD/SELLER-18827386/puma-men-s-no-show-bamboo-socks-3-pack.png" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR:X</h5>
                                    <p class="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://static.footshop.com/img/p/6/5/0/7/7/3/650773.jpg" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Under Armour HOVR:X</h5>
                                    <p class="card-text">Цена: 210лв</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        
    </>
}

export default HomePage;
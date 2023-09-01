

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
        </section>
    </>
}

export default HomePage;
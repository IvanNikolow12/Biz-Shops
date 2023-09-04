import {FiMinus, FiPlus} from 'react-icons/fi'
import './DetailsPage.css'

function DetailsPage() {
    return <>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
        <div className="container-fluid container-lg">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div className="ajaxProductGalery">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://www.eschuhe.ch/fr/media/catalog/product/cache/image/650x650/0/0/0000208825573_08_pl.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://www.americangolf.co.uk/dw/image/v2/AAKY_PRD/on/demandware.static/-/Sites-master-catalog/default/dw508a21ed/images-square/zoom/415944-Black-Black-Grey-Under-Armour-Mens-Charged-Phantom-Spikeless-Golf-Shoes-1.jpg?sw=635" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://www.tradeinn.com/f/13941/139418805/under-armour-charged-bandit-tr-2-trail-running-shoes.jpg   " class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <h1 className="details-page-product-title">Under Armour HOVR Dragon</h1>
                    <h4 className="details-page-product-price">189,99 лв.</h4>
                    <hr/>
                    <p className="details-page-product-short-description">Мъжките Under Armour HOVR Dragon омекотяват всяка Ваша стъпка благодарение на пяната в междинната подметка.
                        Леката текстилна горна част осигурява вентилация и опора на стъпалото,
                        a гумената подметка осигурява сцепление върху различни повърхности.
                    </p>
                    <p className="details-page-product-number">АРТИКУЛЕН НОМЕР: 200000350453</p>
                    <hr/>
                    <div className="panel-body">
                        <div className="details-page-product-color-section">
                            <h6>Избери цвят</h6>
                            <div className="details-page-product-color-container">
                                <button data-color="DC3727"></button>
                                <button data-color="DC3728"></button>
                                <button data-color="DC3729"></button>
                            </div>
                        </div>
                        <div className="details-page-product-size-section">
                            <h6>Избери размер</h6>
                            <div className="details-page-product-size-container">
                                <button>40</button>
                                <button>41</button>
                                <button>42</button>
                                <button>43</button>
                                <button>44</button>
                                <button>45</button>
                                <button>46</button>
                                <button>47</button>
                            </div>
                        </div>
                    </div>
                    <div className='product-purchase-section'>
                        <div className='form-group has-icons'>
                            <label for="product-quantity">Количество</label>
                            <input id='product-quantity' className='form-control text-center' type='number' min="1" value="1"/>
                            <button className='btn left' data-handler="subQuantity" type='button'>
                                <FiMinus size={25}/>
                            </button>
                            <button className='btn right' data-handler="addQuantity" type='button'>
                                <FiPlus size={25}/>
                            </button>
                        </div>
                        <div className='mobile-purchase-section'>ДОБАВИ В КОЛИЧКАТА</div>
                    </div>
                </div>
                <div class="col-12">.col-6<br/>Subsequent columns continue along the new line.</div>
            </div>
        </div>
    </>
}

export default DetailsPage;
import { useLocation } from 'react-router-dom';

import {FiMinus, FiPlus, FiHeart} from 'react-icons/fi'
import './DetailsPage.css'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

function DetailsPage() {

    const location = useLocation();
    const productData = location.state?.data;

    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="/">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
        <div className="container-fluid container-lg">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="ajaxProductGalery">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* {Object.entries(productData.productImages).map(image => 
                            <div className="carousel-item active">
                                <img src={image[1]} key={image[0]} className="d-block w-100" alt={image[0]}/>
                            </div>)} */}
                            <div className="carousel-item active">
                            <img src={productData.productImages.imageOne} className="d-block w-100" alt="..."/>
                            </div>
                            {productData.productImages.imageTwo && <div className="carousel-item">
                            <img src={productData.productImages.imageTwo} className="d-block w-100" alt="..."/>
                            </div>}
                            {productData.productImages.imageThree && <div className="carousel-item">
                            <img src={productData.productImages.imageThree} className="d-block w-100" alt="..."/>
                            </div>}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="details-page-product-title">{productData.name}</h1>
                    <div className="details-page-product-price">
                        <h6 className='details-page-old-price'>{productData.oldPrice} {productData.oldPrice ? 'лв.' : ''}</h6>
                        <h4 className='details-page-new-price'>{productData.newPrice} лв.</h4>
                    </div>
                    <hr/>
                    <p className="details-page-product-short-description">{productData.shortDescription}</p>
                    <p className="details-page-product-number">АРТИКУЛЕН НОМЕР: {productData.articulNumber}</p>
                    <hr/>
                    <div className="details-page-panel-body">
                        {/* <div className="details-page-product-color-section">
                            <h6>Избери цвят</h6>
                            <div className="details-page-product-color-container">
                                <button data-color="DC3727"></button>
                                <button data-color="DC3728"></button>
                                <button data-color="DC3729"></button>
                            </div>
                        </div> */}
                        <div className="details-page-product-size-section">
                            <h6>Избери размер</h6>
                            <div className="details-page-product-size-container">
                                {productData.size.split(', ').map(size => <button key={size}>{size}</button>)}
                            </div>
                        </div>
                    </div>
                    <div className='product-purchase-section'>
                        <div className='form-group has-icons'>
                            {/* <label htmlFor="product-quantity">Количество</label> */}
                            <input id='product-quantity' className='form-control text-center details-page-quantity-input' type='number' min="1" defaultValue="1"/>
                            <button className='btn left' data-handler="subQuantity" type='button'>
                                <FiMinus size={25}/>
                            </button>
                            <button className='btn right' data-handler="addQuantity" type='button'>
                                <FiPlus size={25}/>
                            </button>
                        </div>
                        <div className='mobile-purchase-section'>ДОБАВИ В КОЛИЧКАТА</div>
                    </div>
                    <div className='add-to-favorite'><FiHeart/> Добави в Любими</div>
                </div>
                <div className="col-12 product-info-section">
                    <div className='product-info-header'>Информация за продукта</div>
                    <hr/>
                    <ul className='product-info-content'>
                        {productData.longDescription.split('/ ').map(row => <li key={row}>{row}</li>)}
                        
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default DetailsPage;



///////////////////////////////// WITHOUT LOADER !!!

// export async function loader({request, params}) {
//     const fullURL = window.location.href;

//     const FETCH_PATH = {
//         genre:  fullURL.split('/')[4],
//         category: fullURL.split('/')[5],
//         id: fullURL.split('/')[6]
//     }

//     let url = `https://biz-shops-default-rtdb.europe-west1.firebasedatabase.app/catalog/${FETCH_PATH.genre}/${FETCH_PATH.category}/${FETCH_PATH.id}.json`;

//     const response = await fetch(url);

//     return response;

//     ///////////////////////////////////////////////////////////////////////////////////////////// GREDA
// }
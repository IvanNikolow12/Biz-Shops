import { Form, useNavigate, json, redirect } from 'react-router-dom';
import './ProductForm.css'

function ProductForm({method, data}) {
    // console.log(data)
    let title;

    if(method === 'PATCH') {
        title = 'Редактирай продукта'
    } else {
        title = 'Създай нов продукт'
    }

    const navigate = useNavigate();

    function cancelHandler() {
        navigate('..')
    }

    const searchData = {};

    const GenreSelectHandler = ({ target: { name, value } }) => {
        if(value !== 'Пол') {
            searchData.genre = value;
        } else {
            return
        }
    }

    const CategorySelectHandler = ({ target: { name, value } }) => {
        if(value !== 'Категория') {
            searchData.category = value;
        } else {
            return
        }
    }
    // console.log(searchData)

    return<>
    <section className='form-container'>
        <Form method={method}>
            <div className="col-8 col-md-8 text-center product-form">
                <label htmlFor="product-form-header" className="product-form-header">
                  {title}
                </label>
                <div className='check-section'>
                    <div className="check-genre">
                        {/* <label htmlFor="product-title" className="form-label">Пол</label> */}
                        <select className="form-select select-genre" name='genre' value={searchData.genre} onChange={GenreSelectHandler}  defaultValue={data ? data.genre : ''} required>
                            <option value="Пол">Пол</option>
                            <option value="mens">Мъже</option>
                            <option value="ladies">Жени</option>
                            <option value="childrens">Деца</option>
                        </select>
                    </div>
                    <div className="check-category">
                        {/* <label htmlFor="product-title" className="form-label">Категория</label> */}
                        <select className="form-select select-category" name='category' value={searchData.category} onChange={CategorySelectHandler}  defaultValue={data ? data.category : ''} required>
                            <option value="Категория">Категория</option>
                            <option value="shoes">Обувки</option>
                            <option value="clothes">Облекло</option>
                            <option value="accessoires">Аксесоари</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 product-id">
                    <strong htmlFor="product-id" className="form-label">Продукт ID</strong>
                    <input type="text" className="form-control" id="product-id" name='id' defaultValue={data ? data.id : ''}/>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-brand" className="form-label">Марка</strong>
                    <input type="text" className="form-control" id="product-brand" name='brand' placeholder="Пиши тук..." defaultValue={data ? data.brand : ''} required/>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-title" className="form-label">Име на продукта</strong>
                    <input type="text" className="form-control" id="product-title" name='title' placeholder="Пиши тук..." defaultValue={data ? data.name : ''} required/>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-old-price" className="form-label">Стара цена</strong>
                    <input type="text" className="form-control" id="product-old-price" name='oldPrice' placeholder="Пиши тук..." defaultValue={data ? data.oldPrice : ''}/>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-new-price" className="form-label">Нова цена</strong>
                    <input type="text" className="form-control" id="product-new-price" name='newPrice' placeholder="Пиши тук..." defaultValue={data ? data.newPrice : ''} required/>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-short-description" className="form-label">Кратко описание</strong>
                    <textarea type="text" className="form-control" id="product-short-description" name='shortDescription' placeholder="Пиши тук..." defaultValue={data ? data.shortDescription : ''} required></textarea>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-articul-number" className="form-label">Артикулен номер</strong>
                    <input type="text" className="form-control" id="product-articul-number" name='articulNumber' placeholder="Пиши тук..." defaultValue={data ? data.articulNumber : ''} required/>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-size" className="form-label">Размери</strong>
                    <input type="text" className="form-control" id="product-size" name='size' placeholder="Пиши тук..." defaultValue={data ? data.size : ''} required/>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-long-description" className="form-label">Дълго описание</strong>
                    <textarea type="text" className="form-control" id="product-long-description" name='longDescription' placeholder="Пиши тук..." defaultValue={data ? data.longDescription : ''} required></textarea>
                </div>
                <div className="mb-3">
                    <strong htmlFor="product-image-Url" className="form-label">Снимка на продукта</strong>
                    <input type="url" className="form-control" id="product-product-image1" name='image1' placeholder="URL..." defaultValue={data ? data.productImages.imageOne : ''} required/>
                    <hr/>
                    <input type="url" className="form-control" id="product-product-image2" name='image2' placeholder="URL..." defaultValue={data ? data.productImages.imageTwo : ''}/>
                    <hr/>
                    <input type="url" className="form-control" id="product-product-image3" name='image3' placeholder="URL..." defaultValue={data ? data.productImages.imageThree : ''}/>
                </div>
                <button type='submit'  className="form-btn form-submit-btn">Save</button>
                <button type='button' className="form-btn form-cancel-btn" onClick={cancelHandler}>Cancel</button>
            </div>
        </Form>
    </section>
    </>
}

export default ProductForm;

export async function action({request, params}) {
    const method = request.method;
    const data = await request.formData();

    
    const FETCH_PATH = {
        genre: data.get('genre'),
        category: data.get('category')
    }

    const productBody = {
        genre: data.get('genre'),
        category: data.get('category'),
        brand: data.get('brand'),
        name: data.get('title'),
        oldPrice: data.get('oldPrice') || '',
        newPrice: data.get('newPrice'),
        shortDescription: data.get('shortDescription'),
        articulNumber: data.get('articulNumber'),
        size: data.get('size'),
        longDescription: data.get('longDescription'),
        productImages: {
            imageOne: data.get('image1'),
            imageTwo: data.get('image2'),
            imageThree: data.get('image3'),
        }
    }

    let url;
    let id = data.get('id');

    if(method === "PATCH") {
        url = `https://biz-shops-default-rtdb.europe-west1.firebasedatabase.app/catalog/${FETCH_PATH.genre}/${FETCH_PATH.category}/${id}.json`;
    } else {
        url = `https://biz-shops-default-rtdb.europe-west1.firebasedatabase.app/catalog/${FETCH_PATH.genre}/${FETCH_PATH.category}.json`
    }

    const response = await fetch(url, {
        method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productBody)
    })

    if(!response.ok) {
        console.log(response.status)
        throw json(
          { message: "Cloud not fetch data", status: 500 },
          { status: 500 }
        );
      }
    
      return redirect('..');

}


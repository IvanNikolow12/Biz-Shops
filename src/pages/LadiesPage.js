
import './LadiesPage.css'

function LadiesPage() {
    return <>
    <div className="container-fluid">
        <div className="row ajaxContainer" data-url="/ladies">
            <aside className="col-12 col-lg-3 col-xxlg-2">
                <section className="panel categories-panes">
                    <h2 className="h3 panel-title">Категории</h2>
                    <div className="panel-body">
                        <nav className="sidebar-nav">
                            <ul className="list-unstyled">
                                <li><a href="obleklo">Облекло (124)</a></li>
                                <li><a href="obleklo">Обувки (240)</a></li>
                                <li><a href="obleklo">Аксесоари (94)</a></li>
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
                            <h5 className='filter-title'>Цена</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">50лв. - 100лв.</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">100лв. - 200лв.</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">200лв. - 300лв.</label>
                            </div>
                        </nav>
                    </div>
                </section>
            </aside>
            <section className="col-12 col-lg-3 col-xxlg-2">
                asd
            </section>
        </div>
    </div>
    </>
}

export default LadiesPage;
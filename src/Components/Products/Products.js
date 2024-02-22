import { Link } from "react-router-dom";
import ProductRow from "../Common/ProductsTable/ProductsTable";
import PageTitle from "../Common/PageTitle/PageTitle";
import './Products.css'

import { productsList } from "../Common/constans"

const Products = () => {

    return (
        <>
            <PageTitle pageName="Продукти" />
            <div className="new-product-button-container">
                <Link to='/new-product' className="new-product-button">Нов Продукт</Link>
            </div>

            <table className="products-list">
                <thead>
                    <tr>
                        <th className="product-column">Продукт</th>
                        <th className="price-column">Цена</th>
                        <th className="edit-column">Редактирай</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow productsList={productsList} />
                </tbody>
            </table>
        </>
    )
}

export default Products;
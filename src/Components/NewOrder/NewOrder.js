import { useState } from "react";

import PageTitle from "../Common/PageTitle/PageTitle";
import { clientsList, productsList } from "../Common/constans";

import './NewOrder.css'

const NewOrder = () => {

    const [newOrder, setNewOrder] = useState([]);
    const [client, setClient] = useState({});

    const addProductHandler = (e) => {
        e.preventDefault()
        const seletedClient = clientsList.filter(x => x._id == (e.target['client-name'].value));
        const seletedProduct = productsList.filter(x => x._id == (e.target['product'].value));
        const quantity = e.target['quantity'].value;

        seletedProduct[0].quantity = Number(quantity);
        seletedProduct[0].totalPrice = seletedProduct[0].price * quantity;

        setClient(seletedClient[0]);

        //todo: check if product is already in and add the quantity

        setNewOrder([
            ...newOrder,
            seletedProduct[0],
        ]);

    }

    const orderListElement = (
        <>
            <div className="order-owner">
                <p className="order-owner-info">
                    Поръчка за: {client.name} | {client.address} | {client.phoneNumber}
                </p>
            </div>
            <table className="products-list">
                <thead>
                    <tr>
                        <th className="product-column">Продукт</th>
                        <th className="price-column">Цена</th>
                        <th className="quantity-column">Количество</th>
                        <th className="total-price-product-column">Общо за продукт</th>
                        <th className="edit-column">Редактирай</th>
                    </tr>
                </thead>
                <tbody>
                    {newOrder.map(x => {
                        return (
                            <tr key={x._id + 2}>
                                <td className="product-column">{x.product}</td>
                                <td className="price-column">{x.price.toFixed(2)} лева</td>
                                <td className="quantity-column">{x.quantity}</td>
                                <td className="total-price-product-column">{x.totalPrice.toFixed(2)} лева</td>
                                <td className="edit-column">Редактирай</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colspan="3">Обща стойнот:</th>
                        <td>{newOrder.reduce((acc, current) => acc += current.totalPrice, 0).toFixed(2)} лева</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )

    return (
        <>
            <PageTitle pageName="Нова поръчка" />
            <form className="order-form" onSubmit={addProductHandler}>
                <div className="client-name-container">
                    <label>Име на клиент</label>
                    <select name="client-name" required>
                        <option value="">Моля изберете клиент</option>
                        {clientsList
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map(x => <option key={x._id} value={x._id}>{x.name}</option>)
                        }
                    </select>
                </div>
                <div className="product-container">
                    <label>Продукт</label>
                    <select name="product" required>

                        <option value="">Моля изберете продукт</option>
                        {productsList
                            .sort((a, b) => a.product.localeCompare(b.product))
                            .map(x => <option key={x._id} value={x._id}>{x.product}</option>)
                        }

                    </select>
                </div>
                <div className="product-quantity">
                    <label>Количество</label>
                    <input type="number" className="quantity" name="quantity" required />
                </div>
                <button type="submit" className="new-order-submit-button" >Добави в поръчката</button>
            </form>
            {
                client.name
                    ? (orderListElement)
                    : null
            }
        </>
    )
}

export default NewOrder;
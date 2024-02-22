import { Link } from "react-router-dom";
import ClientRow from "../Common/ClientsTable/ClientsTable";
import PageTitle from "../Common/PageTitle/PageTitle";
import './Clients.css'

import { clientsList } from "../Common/constans"

const Clients = () => {
    
    return (
        <>
            <PageTitle pageName="Клиенти" />
            <div className="new-client-button-container">
                <Link to='/new-client' className="new-client-button">Нов клиент</Link>
            </div>

            <table className="clients-list">
                <thead>
                    <tr>
                        <th className="new-order-column">Нова поръчка</th>
                        <th className="name-column">Име</th>
                        <th className="address-column">Адрес</th>
                        <th className="phone-number-column">Телефонен номер</th>
                        <th className="edit-column">Редактирай</th>
                    </tr>
                </thead>
                <tbody>

                    <ClientRow clientsList={clientsList} />


                </tbody>
            </table>
        </>
    )
}

export default Clients;
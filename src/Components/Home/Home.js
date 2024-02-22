import { Link } from 'react-router-dom';

import './Home.css'

const Home = () => {
    return (
        <div className='home-buttons'>
            <Link to="products" className="primary-button">Продукти</Link>
            <Link to="clients" className="primary-button">Клиенти</Link>
            <Link to="orders" className="primary-button">Поръчки</Link>
            <Link to="new-order" className="primary-button">Нова Поръчка</Link>
        </div>
    )
}

export default Home;
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className="nav-buttons">Начална страница</Link>
            <Link to="products" className="nav-buttons">Продукти</Link>
            <Link to="clients" className="nav-buttons">Клиенти</Link>
            <Link to="orders" className="nav-buttons">Поръчки</Link>
            <Link to="new-order" className="nav-buttons">Нова Поръчка</Link>
        </nav>
    )
}

export default Header;
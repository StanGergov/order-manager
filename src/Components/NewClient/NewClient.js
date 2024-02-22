import PageTitle from '../Common/PageTitle/PageTitle'
import './NewClient.css'

const NewClient = () => {

    return (
        <>
            <PageTitle pageName="Нов клиент" />
            <form className="client-form" method="POST">
                <label>Име</label>
                <input type="text" name="client-name" minLength="3" placeholder="Име на клиента" required />

                <label>Адрес</label>
                <input type="text" name="address" minLength="3" placeholder="град, улица, номер" required />

                <label>Телефонен номер</label>
                <input type="number" name="phone-number" minLength="8" placeholder="088....." required />

                <button type='submit' name='submit-button' className='submit-button'>Запази</button>

            </form>
        </>
    )
}

export default NewClient;
import PageTitle from "../Common/PageTitle/PageTitle";


const NewProduct = () => {
    return (
        <>
            <PageTitle pageName="Нов продукт" />
            <form className="client-form" method="POST">
                <label>Име на продукта</label>
                <input type="text" name="product-name" placeholder="Име на продукта" required />

                <label>Цена</label>
                <input type="number" name="price" step="0.01" placeholder="2.50..." required />

                <button type='submit' name='submit-button' className='submit-button'>Запази</button>

            </form>
        </>
    )
}

export default NewProduct;
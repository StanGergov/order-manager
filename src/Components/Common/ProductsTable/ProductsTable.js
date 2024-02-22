
const ProductRow = (props) => {

    return (
        props.productsList.map(x =>
            <tr key={x._id}>
                <td className="product-column">{x.product}</td>
                <td className="price-column">{x.price}</td>
                <td className="edit-column">Редактирай</td>
            </tr>
        )
    )
}

export default ProductRow;
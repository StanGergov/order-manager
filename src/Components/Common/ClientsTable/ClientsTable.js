
const ClientRow = (props) => {

    return (
        props.clientsList.map(x =>
            <tr key={x._id}>
                <td className="new-order-column">Нова поръчка</td>
                <td className="name-column">{x.name}</td>
                <td className="address-column">{x.address}</td>
                <td className="phone-number-column">{x.phoneNumber}</td>
                <td className="edit-column">Редактирай</td>
            </tr>
        )
    )
}

export default ClientRow;
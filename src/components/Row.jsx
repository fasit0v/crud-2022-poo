export default function Row (props){
    const {id,name,lastName,address,phoneNumber,email} = props
    return(
        <tr><td>{id}</td>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{address}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td></tr>
    )
}
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ClientModel } from "../../model/ClientModel";
import { HotelModel } from "../../model/HotelModel";
import { useStore } from "../../store/store";



interface Props {
    client: ClientModel;
    clientId: number;
}

export default observer(function Client({client, clientId}: Props) {

    const {clientStore} = useStore();
    const {clientList, getAll, blockClient} = clientStore;

    useEffect(() => {
        getAll()
    }, [clientList, getAll])
    
    return (
        <>
            <tr>
                <td>{client.username}</td>  
                <th>{client.name}</th>
                <td>{client.surname}</td>
                <td>{client.email}</td>
                <td>
                    {client.isBlocked === false ?
                        <Button onClick={() => {blockClient(client.id)}}>Block</Button>
                     :  <i>Blocked</i> }
                </td>        
            </tr>
        </>
    )
})


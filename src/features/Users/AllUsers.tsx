import { observer } from "mobx-react-lite";
import { useState, ChangeEvent, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HotelModel } from "../../model/HotelModel";
import { SearchHotelModel } from "../../model/SearchHotel";
import { useStore } from "../../store/store";
import EditHotel from "../Hotels/EditHotel";
import Hotel from "../Hotels/Hotel";
import HotelTop10 from "../Hotels/HotelTop10";
import Search from "../Hotels/Search";
import Client from "./Client";

export default observer(function AllUsers() {

    const {clientStore} = useStore();
    const {clientList, getAll} = clientStore;


    useEffect(() => {
        getAll()
    }, [clientList, getAll])
    

    return (
        <div style={{ textAlign: "center"}}>
            <table className="table" style={{width: "90%"}}>
                <thead className="thead-dark">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(clientList.length > 0) ? clientList.map((client, i) => {
                            return <Client client={client} clientId={client.id} key={i} />
                        }) : null}
                    </tbody>
            </table>
        </div>
    );
})

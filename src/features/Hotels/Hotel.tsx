import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HotelModel } from "../../model/HotelModel";
import { useStore } from "../../store/store";



interface Props {
    hotel: HotelModel;
    hotelId: number;
    showEdit: boolean;
    openEdit: () => void;
}

export default observer(function Hotel(props: Props) {

    const {hotelStore, clientStore} = useStore();
    const {loadHotels, hotelList, setSelectedHotel, deleteHotel} = hotelStore;

    useEffect(() => {
        if(hotelList.length === 0) loadHotels()
    }, [loadHotels, hotelList])

    function deleteHotelFunction(id: number) {
        deleteHotel(id);
    }
    
    return (
        <>
            <tr style={{backgroundColor: "rgb(234, 234, 234)"}}>
                <th>{props.hotel.name}</th>
                <td>{props.hotel.description}</td>
                <td>{props.hotel.pricePerDay}</td>
                <td>{props.hotel.capacity}</td>
                <td>{props.hotel.cityName}</td>
                <td>{props.hotel.destinationName}</td>
                {(localStorage.getItem("role") === "ROLE_ADMIN") ? 
                    <td>
                        <Button style={{marginRight: "1%", backgroundColor: "rgb(6, 137, 6)"}} onClick={() => {props.openEdit(); setSelectedHotel(props.hotel);}}>Edit</Button>
                        <Button style={{marginRight: "1%", backgroundColor: "rgb(180, 35, 4)"}} onClick={() => {deleteHotelFunction(props.hotel.id)}}>Delete</Button>
                        <Link to="/bookReservation" onClick={() => {setSelectedHotel(props.hotel)}}><Button style={{backgroundColor: "rgb(6, 93, 137)"}}>Book</Button></Link>
                    </td>
                : (localStorage.getItem("role") === "ROLE_CLIENT") ? 
                    <td>
                        <Link to="/bookReservation" onClick={() => {setSelectedHotel(props.hotel)}}><Button style={{backgroundColor: "rgb(6, 93, 137)"}}>Book</Button></Link>
                    </td>
                : null
                }         
            </tr>
        </>
    )
})


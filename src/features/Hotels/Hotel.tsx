import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
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
    const {isAuthorized} = clientStore;

    useEffect(() => {
        if(hotelList.length === 0) loadHotels()
    }, [loadHotels, hotelList])

    function deleteHotelFunction(id: number) {
        deleteHotel(id);
    }
    
    return (
        <>
            <tr>
                <th>{props.hotel.name}</th>
                <td>{props.hotel.description}</td>
                <td>{props.hotel.pricePerDay}</td>
                <td>{props.hotel.capacity}</td>
                <td>{props.hotel.cityName}</td>
                <td>{props.hotel.destinationName}</td>
                { isAuthorized ?
                    <td>
                        <Button onClick={() => {props.openEdit(); setSelectedHotel(props.hotel);}}>Edit</Button>
                        <Button onClick={() => {deleteHotelFunction(props.hotel.id)}}>Delete</Button>
                    </td>
                : null }       
            </tr>
        </>
    )
})


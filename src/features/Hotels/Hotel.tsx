import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { HotelModel } from "../../model/HotelModel";
import { useStore } from "../../store/store";



interface Props {
    hotel: HotelModel;
    hotelId: number;
}

export default observer(function Hotel({hotel, hotelId}: Props) {

    const {hotelStore} = useStore();
    const {loadHotels, hotelList} = hotelStore;

    useEffect(() => {
        if(hotelList.length === 0) loadHotels()
    }, [loadHotels, hotelList])
    
    return (
        <>
            <tr>
                <th>{hotel.name}</th>
                <td>{hotel.description}</td>
                <td>{hotel.pricePerDay}</td>
                <td>{hotel.capacity}</td>
            </tr>
        </>
    )
})


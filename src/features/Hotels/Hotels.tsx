import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { HotelModel } from "../../model/HotelModel";
import { useStore } from "../../store/store";
import Reservation from "../Reservations/Reservation";
import EditHotel from "./EditHotel";
import Hotel from "./Hotel";
import Search from "./Search";




export default observer(function Hotels() {

    const {hotelStore} = useStore();
    const {loadHotels, hotelList, citiesList, loadCities} = hotelStore;

    const [showEdit, setShowEdit] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState<HotelModel>();

    useEffect(() => {
        if(hotelList.length === 0 && citiesList.length === 0) {
            loadHotels();
            loadCities();
        }

        //if(citiesList.length === 0) loadCities()
    }, [loadHotels, hotelList])
    
    const openEdit = () => {
		setShowEdit(true);
	}

	const closeEdit = () => {
		setShowEdit(false);
	}

    const setHotel = (hotel: HotelModel) => {
        setSelectedHotel(hotel);
    }

    return (
        <div style={{ textAlign: "center"}}>
            <Search></Search>
            { showEdit ?
                <EditHotel closeEdit={closeEdit}></EditHotel>
            : null}
            <table className="table" style={{width: "90%"}}>
                <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price per day</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">City</th>
                            <th scope="col">Destination</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(hotelList.length > 0) ? hotelList.map((hotel, i) => {
                            return <Hotel showEdit={showEdit} openEdit={openEdit}  hotel={hotel} hotelId={hotel.id} key={i} />
                        }) : null}
                    </tbody>
            </table>
        </div>
    );
})


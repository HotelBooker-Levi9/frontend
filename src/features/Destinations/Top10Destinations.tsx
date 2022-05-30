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

export default observer(function Top10Destinations() {

    const {hotelStore} = useStore();
    const {top10Destinations, loadHotels, top10List, citiesList, loadCities} = hotelStore;

    const [showEdit, setShowEdit] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState<HotelModel>();

    useEffect(() => {
        
        if(top10List.length === 0) top10Destinations()

        if(citiesList.length === 0) loadCities()
    }, [top10Destinations, top10List])
    
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
                        {(top10List.length > 0) ? top10List.map((hotel, i) => {
                            return <HotelTop10 hotel={hotel} key={i} />
                        }) : null}
                    </tbody>
            </table>
        </div>
    );
})

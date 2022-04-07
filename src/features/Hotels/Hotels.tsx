import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../store/store";
import Reservation from "../Reservations/Reservation";
import Hotel from "./Hotel";



export default observer(function Hotels() {

    const {hotelStore} = useStore();
    const {loadHotels, hotelList} = hotelStore;

    useEffect(() => {
        if(hotelList.length === 0) loadHotels()
    }, [loadHotels, hotelList])


    return (
        <div style={{ textAlign: "center"}}>
            <table className="table" style={{width: "70%"}}>
                <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price per day</th>
                            <th scope="col">Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(hotelList.length > 0) ? hotelList.map((hotel, i) => {
                            return <Hotel hotel={hotel} hotelId={hotel.id} key={i}/>
                        }) : null}
                    </tbody>
            </table>
        </div>
    );
})


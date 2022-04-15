import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ReservationWithArrangementModel } from "../../model/ReservationWithArrangementModel";
import { useStore } from "../../store/store";
import Reservation from "./Reservation";


export default observer(function Reservations() {

    const {reservationStore} = useStore();
    const {loadReservationsByCartId, reservationWithHotelInfoList, cartResList} = reservationStore;

    useEffect(() => {
        if(reservationWithHotelInfoList.length === 0) loadReservationsByCartId()
    }, [loadReservationsByCartId, reservationWithHotelInfoList, cartResList])


    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                        <tr>
                            <th scope="col">Hotel</th>
                            <th scope="col">City</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Check in</th>
                            <th scope="col">Check out</th>
                            <th scope="col">Price</th>
                            <th scope="col">Guests</th>
                            <th scope="col">Canceled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(reservationWithHotelInfoList.length > 0) ? reservationWithHotelInfoList.map((reservation, i) => {
                            // return <Reservation reservation={reservation} reservationId={reservation.reservation.id} key={i} />
                        }) : null}
                    </tbody>
            </table>
        </>
    );
})
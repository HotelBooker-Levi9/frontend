import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../store/store";
import Reservation from "./Reservation";


export default observer(function Reservations() {

    const {reservationStore} = useStore();
    const {loadReservationsByCartId, reservationList} = reservationStore;

    useEffect(() => {
        if(reservationList.length === 0) loadReservationsByCartId()
    }, [loadReservationsByCartId, reservationList])


    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                        <tr>
                            <th scope="col">CheckInDate</th>
                            <th scope="col">CheckOutDate</th>
                            <th scope="col">Price</th>
                            <th scope="col">Guests</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(reservationList.length > 0) ? reservationList.map((reservation, i) => {
                            return <Reservation reservation={reservation} reservationId={reservation.id} key={i} />
                        }) : null}
                    </tbody>
            </table>
        </>
    );
})
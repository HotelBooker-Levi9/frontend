import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ReservationModel } from "../../model/ReservationModel";
import { useStore } from "../../store/store";


interface Props {
    reservation: ReservationModel;
    reservationId: number;
}

export default observer(function Reservation({reservation, reservationId}: Props) {

    const {reservationStore} = useStore();

    const {loadReservations, reservationList} = reservationStore;

    useEffect(() => {
        if(reservationList.length === 0) loadReservations()
    }, [loadReservations, reservationList])


    return (
        <>
            <tr>
                <th>{reservation.checkInDate}</th>
                <td>{reservation.checkOutDate}</td>
                <td>{reservation.price}</td>
                <td>{reservation.guestNumber}</td>
            </tr>
        </>
    )
})

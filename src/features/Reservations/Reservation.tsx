import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReservationModel } from "../../model/ReservationModel";
import { ReservationWithArrangementModel } from "../../model/ReservationWithArrangementModel";
import { useStore } from "../../store/store";


interface Props {
    reservation: ReservationWithArrangementModel;
    reservationId: number;
}

export default observer(function Reservation({reservation, reservationId}: Props) {

    const {reservationStore} = useStore();

    const {loadReservationsByCartId, removeReservation, reservationList} = reservationStore;

    useEffect(() => {
        if(reservationList.length === 0) loadReservationsByCartId()
    }, [loadReservationsByCartId, reservationList])

    function remove(reservation: ReservationModel) {
        removeReservation(reservation.id);
    }

    return (
        <>
            <tr>
                <th>{reservation.hotelName}</th>
                <th>{reservation.cityName}</th>
                <th>{reservation.destinationName}</th>
                <th>{reservation.reservation.checkInDate}</th>
                <td>{reservation.reservation.checkOutDate}</td>
                <td>{reservation.reservation.price}</td>
                <td>{reservation.reservation.guestNumber}</td>
                <td>{reservation.reservation.isCanceled}</td>
                <td>
                    {/* <Button onClick={() => {props.openEdit(); setSelectedHotel(props.hotel);}}>+</Button> */}
                    <Button onClick={() => {remove(reservation.reservation)}}>-</Button>
                </td>
            </tr>
        </>
    )
})

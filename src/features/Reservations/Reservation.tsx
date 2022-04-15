import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReservationModel } from "../../model/ReservationModel";
import { ReservationWithArrangementModel } from "../../model/ReservationWithArrangementModel";
import { ReservationWithQuantityModel } from "../../model/ReservationWithQuantityModel";
import { useStore } from "../../store/store";


interface Props {
    // reservation: ReservationWithArrangementModel;
    reservation: ReservationWithQuantityModel;
    reservationId: number;
}

export default observer(function Reservation({reservation, reservationId}: Props) {

    const {reservationStore} = useStore();

    const {loadReservationsByCartId, removeReservation, reservationList, cartResList, getResFromCart} = reservationStore;

    useEffect(() => {
        if(reservationList.length === 0) loadReservationsByCartId()
    }, [loadReservationsByCartId, reservationList, cartResList])

    function remove(reservation: ReservationModel) {
        removeReservation(reservation.id);
    }

    return (
        <>
            <tr>
                <th>{reservation.reservation.hotelName}</th>
                <th>{reservation.reservation.cityName}</th>
                <th>{reservation.reservation.destinationName}</th>
                <th>{reservation.reservation.reservation.checkInDate}</th>
                <td>{reservation.reservation.reservation.checkOutDate}</td>
                <td>{reservation.reservation.reservation.price}</td>
                <td>{reservation.reservation.reservation.guestNumber}</td>
                <td>{reservation.reservation.reservation.isCanceled}</td>
                <td>{reservation.queantity}</td>
                <td>
                    {/* <Button onClick={() => {props.openEdit(); setSelectedHotel(props.hotel);}}>+</Button> */}
                    <Button onClick={() => {remove(reservation.reservation.reservation); getResFromCart()}}>-</Button>
                </td>
            </tr>
        </>
    )
})

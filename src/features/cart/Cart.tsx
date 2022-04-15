import { remove } from "mobx";
import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useStore } from "../../store/store";
import Reservation from "../Reservations/Reservation";

export default observer(function Cart() {

    const {reservationStore} = useStore();
    const {getResFromCart, emptyCart, shop, cartResList} = reservationStore;

    useEffect(() => {
        if(cartResList.length === 0) getResFromCart()
    }, [getResFromCart, emptyCart, shop, cartResList])


    return (
        <>
            <div>
                <Button style={{float: "right", marginBottom: "2%", marginLeft: "1%"}} onClick={() => {shop()}}>Shop</Button>
                <Button style={{float: "right", marginBottom: "2%"}} onClick={() => {emptyCart()}}>Empty cart</Button>                
            </div>
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
                        {(cartResList.length > 0) ? cartResList.map((reservation, i) => {
                            return <Reservation reservation={reservation} reservationId={reservation.reservation.id} key={i} />
                        }) : null}
                    </tbody>
            </table>
        </>
    );
})

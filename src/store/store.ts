import { createContext, useContext } from "react";
import ClientStore from "./clientStore";
import HotelStore from "./hotelStore";
import ReservationStore from "./reservationStore";


interface Store {
    clientStore: ClientStore;
    reservationStore: ReservationStore;
    hotelStore: HotelStore;
}

export const store: Store = {
    clientStore: new ClientStore(),
    reservationStore: new ReservationStore(),
    hotelStore: new HotelStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
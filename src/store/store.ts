import { createContext, useContext } from "react";
import ClientStore from "./clientStore";
import HotelStore from "./hotelStore";
import ReservationStore from "./reservationStore";


//definises stores
interface Store {
    clientStore: ClientStore;
    reservationStore: ReservationStore;
    hotelStore: HotelStore;
}

//inicijalizacija
export const store: Store = {
    clientStore: new ClientStore(),
    reservationStore: new ReservationStore(),
    hotelStore: new HotelStore()
}

export const StoreContext = createContext(store);

//react hook
export function useStore() {
    return useContext(StoreContext);
}
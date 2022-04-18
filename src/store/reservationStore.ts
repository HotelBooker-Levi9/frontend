import { makeAutoObservable, runInAction, toJS } from "mobx";
import { ReservationModel } from "../model/ReservationModel";
import { ReservationWithArrangementModel } from "../model/ReservationWithArrangementModel";
import { ReservationWithCartModel } from "../model/ReservationWithCartModel";
import { ReservationWithQuantityModel } from "../model/ReservationWithQuantityModel";
import cartService from "../service/cartService";
import reservationService from "../service/reservationService";
import { useHistory } from "react-router-dom";


export default class ReservationStore {
    reservationRegistry = new Map<string, ReservationModel>();
    reservationList: ReservationModel[] = []; 
    reservationWithHotelInfoList: ReservationWithArrangementModel[] = [];
    cartId: number = 1;
    // cartResList: ReservationWithArrangementModel[] = [];
    cartResList: ReservationWithQuantityModel[] = []; 

    constructor() {
        makeAutoObservable(this)
    }


    loadReservations = async () => { 
        try {
            const list = await reservationService.getAll();
            
            runInAction(() => {
                this.reservationList = toJS(list);
            })
        } catch (error) {
            console.log(error);
        }
    }  
    
    
    loadReservationsByCartId = async () => { 
        try {
            const list = [... await reservationService.getByCartId(this.cartId)];

            runInAction(() => {
                this.reservationWithHotelInfoList = toJS(list);
            })
        } catch (error) {
            console.log(error);
        }
    }

    addToCart = async(reservation: ReservationWithCartModel) => {
        try {
            let response = await cartService.addToCart(reservation);
            runInAction(() => {
                window.location.replace('/my-cart');
            })
        } catch (error) {
            alert("There is not enough space in hotel")
        }
    }

    removeReservation = async(resId: number) => {
        try {
            let response = await cartService.removeFromCart(resId);
            runInAction(() => {
                window.location.reload();
            })
        } catch (error) {
            console.log(error);
        }
    }

    getResFromCart = async () => { 
        try {
            const list = [... await cartService.getResFromCart(this.cartId)];

            runInAction(() => {                           
                let finalList = []   
                list.forEach(res => {
                    let added = false;
                    this.cartResList.forEach(cartRes =>{
                        if(res.reservation.checkInDate == cartRes.reservation.reservation.checkInDate && res.reservation.checkOutDate == cartRes.reservation.reservation.checkOutDate 
                            && res.reservation.guestNumber == cartRes.reservation.reservation.guestNumber && res.reservation.hotelId == cartRes.reservation.reservation.hotelId 
                            && res.reservation.price == cartRes.reservation.reservation.price) {
                                cartRes.queantity += 1;
                                added = true
                            }
                    })
                    if(!added) {
                        let resToCart = new ReservationWithQuantityModel();
                        resToCart.reservation = res;
                        resToCart.queantity = 1;
                        this.cartResList.push(resToCart)
                    }                        
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

    emptyCart = async() => {
        try {
            let response = await cartService.emptyCart(this.cartId);
            runInAction(() => {
                window.location.reload();
            })
        } catch (error) {
            console.log(error);
        }
    }

    shop = async() => {
        try {
            let response = await cartService.shop(this.cartId);
            runInAction(() => {
                alert("You have shoped successfully")
                window.location.replace('/reservations');
            })
        } catch (error) {
            console.log(error);
        }
    }

    cancelReservation = async (id: number) => { 
        try {
            const list = await reservationService.cancel(id);
            runInAction(() => {
                window.location.reload();
            })
        } catch (error) {
            console.log(error);
        }
    }
}
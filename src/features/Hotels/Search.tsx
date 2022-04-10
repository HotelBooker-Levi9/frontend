import moment from "moment";
import { ChangeEvent, useState } from "react";
import searchImage from "../../img/search.png";
import { SearchHotelModel } from "../../model/SearchHotel";
import { useStore } from "../../store/store";
import DatePicker from "react-datepicker";
import { observer } from "mobx-react-lite";

export default observer(function Search() {

    const {hotelStore} = useStore();
    const {searchHotelsByParams} = hotelStore;


    const [searchValues, setSearchValues] = useState({
        hotelName: '',
        pricePerDay: 0,
        cityName: '',
        destinationName: '',
        guestNum: 0
    }); 

    const [selectedCheckInDate, setSelectedCheckInDate] = useState<Date | null>(new Date());
    const [selectedCheckOutDate, setSelectedCheckOutDate] = useState<Date | null>(new Date());

    function handleSubmit(event: any) {
        event?.preventDefault();

        let searchHotel = new SearchHotelModel();
        searchHotel.hotelName = searchValues.hotelName;
        searchHotel.pricePerDay = searchValues.pricePerDay;
        searchHotel.cityName = searchValues.cityName;
        searchHotel.destinationName = searchValues.destinationName;
        searchHotel.guestNum = searchValues.guestNum;

        if(selectedCheckInDate) {
            searchHotel.checkInDate = selectedCheckInDate;
        } else {
            searchHotel.checkInDate = undefined;
        }

        if(selectedCheckOutDate) {
            searchHotel.checkOutDate = selectedCheckOutDate;
        } else {
            searchHotel.checkOutDate = undefined;
        }

        searchHotelsByParams(searchHotel);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setSearchValues({...searchValues, [name]: value})
    }

    return (
        <div className="input-group">
            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                <div className="form-outline">
                    <input type="search" id="hotelName" className="form-control" value={searchValues.hotelName} name='hotelName' onChange={handleInputChange}/>
                    <label className="form-label" htmlFor="form1">Name</label>
                </div>
                <div className="form-outline">
                    <input type="search" id="pricePerDay" className="form-control" value={searchValues.pricePerDay} name='pricePerDay' onChange={handleInputChange}/>
                    <label className="form-label" htmlFor="form1">Price per day</label>
                </div>
                <div className="form-outline">
                    <input type="search" id="city" className="form-control" value={searchValues.cityName} name='cityName' onChange={handleInputChange}/>
                    <label className="form-label" htmlFor="form1">City</label>
                </div>
                <div className="form-outline">
                    <input type="search" id="destination" className="form-control" value={searchValues.destinationName} name='destinationName' onChange={handleInputChange}/>
                    <label className="form-label" htmlFor="form1">Destination</label>
                </div>
                <div className="form-outline">
                    <DatePicker selected={selectedCheckInDate} onChange={(date) => setSelectedCheckInDate(date)}/>
                    <label className="form-label" htmlFor="form1">CheckIn date</label>
                </div>
                <div className="form-outline">
                    <DatePicker selected={selectedCheckOutDate} onChange={(date) => setSelectedCheckOutDate(date)}/>
                    <label className="form-label" htmlFor="form1">CheckOut date</label>
                </div>
                <div className="form-outline">
                    <input type="search" id="guestNumber" className="form-control" value={searchValues.guestNum} name='guestNum' onChange={handleInputChange}/>
                    <label className="form-label" htmlFor="form1">Number of guests</label>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
                    <img className="fas fa-search" src={searchImage} style={{maxHeight: "35px", maxWidth: "35px"}}></img>
                </button>
            </form>
        </div>
    );

})
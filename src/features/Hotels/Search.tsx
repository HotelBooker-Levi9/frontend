import moment from "moment";
import { ChangeEvent, useState } from "react";
import searchImage from "../../img/search.png";
import { SearchHotelModel } from "../../model/SearchHotel";
import { useStore } from "../../store/store";
import DatePicker from "react-datepicker";
import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "react-bootstrap";
import './Search.css'

export default observer(function Search() {

    const {hotelStore} = useStore();
    const {searchHotelsByParams, loadHotels} = hotelStore;


    const [searchValues, setSearchValues] = useState({
        hotelName: '',
        pricePerDay: 500000,
        cityName: '',
        destinationName: '',
        guestNum: 2
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

    function removeFilter(event: any) {
        window.location.reload();
    }

    return (
        <div className="input-group; search-position" >
            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                <Container>
                <div className="search-rows">
                    <Row >
                        <Col xs lg="3">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form1">Hotel</label>
                            <input placeholder="Hotel" type="search" id="hotelName" className="form-control" value={searchValues.hotelName} name='hotelName' onChange={handleInputChange}/>
                        </div>
                        </Col>                        
                        <Col xs lg="3">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form1">City</label>
                            <input placeholder="City" type="search" id="city" className="form-control" value={searchValues.cityName} name='cityName' onChange={handleInputChange}/>
                        </div>
                        </Col> 
                        <Col xs lg="3">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form1">Destination</label>
                            <input placeholder="Destination" type="search" id="destination" className="form-control" value={searchValues.destinationName} name='destinationName' onChange={handleInputChange}/>
                        </div>
                    </Col>                  
                    </Row>
                </div>
                <Row>
                    <Col xs lg="2">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form1">Price per day</label>
                            <input placeholder="Price per day" type="search" id="pricePerDay" className="form-control" value={searchValues.pricePerDay} name='pricePerDay' onChange={handleInputChange}/>
                        </div>
                    </Col>  
                    <Col xs lg="2">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form1">Number of guests</label>
                            <input type="search" id="guestNumber" className="form-control" value={searchValues.guestNum} name='guestNum' onChange={handleInputChange}/>                        
                        </div>
                    </Col>                  
                    <Col>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form1">CheckIn date</label>
                            <DatePicker selected={selectedCheckInDate} onChange={(date) => setSelectedCheckInDate(date)}/>                            
                        </div>
                    </Col>
                    <Col>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form1">CheckOut date</label>
                            <DatePicker selected={selectedCheckOutDate} onChange={(date) => setSelectedCheckOutDate(date)}/>                            
                        </div>
                    </Col>                   
                    <Col>
                    <button title="Search" type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
                        <img className="fas fa-search" src={searchImage} style={{maxHeight: "35px", maxWidth: "35px"}}></img>
                    </button>
                    </Col>
                </Row>
                <Row>
                    <p style={{color: "blue", cursor: "pointer", textAlign: "left"}} onClick={removeFilter}>Remove filters and list all arrangements</p>
                </Row>
                </Container>
            </form>
        </div>
    );

})
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CityModel } from "../../model/CityModel";
import { EditHotelModel } from "../../model/EditHotelModel";
import { useStore } from "../../store/store";



export default function CreateHotel() {

    const {hotelStore} = useStore();
    const {loadCities, citiesList, createNewHotel} = hotelStore;
    const [selectedCity, setSelectedCity] = useState<CityModel>();

    useEffect(() => {
        if(citiesList.length === 0) loadCities()
    }, [loadCities, citiesList]);


    const [editHotelValues, setEditHotelValues] = useState({
        id: 0,
        name: '',
        imageUrl: '',
        description: '',
        pricePerDay: 0,
        capacity: 0,
        isDeleted: false
    }); 

    function handleSubmit(event: any) {
        event?.preventDefault();

        let editHotel = new EditHotelModel();

        editHotel.id = 0;
        editHotel.name = editHotelValues.name;
        editHotel.imageUrl = editHotelValues.imageUrl;
        editHotel.description = editHotelValues.description;
        editHotel.pricePerDay = editHotelValues.pricePerDay;
        editHotel.capacity = editHotelValues.capacity;
        editHotel.isDeleted = editHotelValues.isDeleted;

        if(selectedCity) {
            editHotel.cityDTO = selectedCity;
        }

        createNewHotel(editHotel);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setEditHotelValues({...editHotelValues, [name]: value})
    }

    function handleSelectCityChange(event: any){
        event.preventDefault();
        let city = citiesList.find(x => x.name === event.target.value);
        console.log(city);
        if(city) {
            setTimeout(() => {
                setSelectedCity(city);
                console.log(selectedCity);
            }, 10) 
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"  value={editHotelValues.name} name='name' onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label >Image</label>
                    <input type="text" className="form-control" value={editHotelValues.imageUrl} name='imageUrl' onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label >Description</label>
                    <input type="text" className="form-control" value={editHotelValues.description} name='description' onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Price per day</label>
                    <input type="text" className="form-control" value={editHotelValues.pricePerDay} name='pricePerDay' onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label >Capacity</label>
                    <input type="text" className="form-control" value={editHotelValues.capacity} name='capacity' onChange={handleInputChange} />
                </div>
                <div>
                    <label>City: </label>
                    <select defaultValue={citiesList.find(x => x.id === 1)?.name} onChange={handleSelectCityChange}>
                        <option>Select City</option>
                        {citiesList.map(city => {
                            return <option>{city.name}</option>
                        })}
                        
                    </select>
                </div>
                <Button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Create</Button>
            </form>
        </div>
    )
}
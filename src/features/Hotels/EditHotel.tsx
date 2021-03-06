import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CityModel } from "../../model/CityModel";
import { EditHotelModel } from "../../model/EditHotelModel";
import { HotelModel } from "../../model/HotelModel";
import { useStore } from "../../store/store";


interface Props {
    closeEdit: () => void;
}

export default observer(function EditHotel(props: Props) {

    const {hotelStore} = useStore();
    const {loadCities, citiesList, updateHotel, selectedHotel} = hotelStore;
    const [selectedCity, setSelectedCity] = useState<CityModel>();

    useEffect(() => {
        if(citiesList.length === 0) loadCities()
        
        console.log(selectedHotel?.name);
    }, [loadCities, citiesList, selectedHotel]);


    const [editHotelValues, setEditHotelValues] = useState({
        id: selectedHotel!.id,
        name: selectedHotel!.name,
        imageUrl: selectedHotel!.imageUrl,
        description: selectedHotel!.description,
        pricePerDay: selectedHotel!.pricePerDay,
        capacity: selectedHotel!.capacity,
        isDeleted: false
    }); 

    function handleSubmit(event: any) {
        event?.preventDefault();

        let editHotel = new EditHotelModel();
        if(selectedHotel) {
            editHotel.id = selectedHotel.id;
        }

        editHotel.name = editHotelValues.name;
        editHotel.imageUrl = editHotelValues.imageUrl;
        editHotel.description = editHotelValues.description;
        editHotel.pricePerDay = editHotelValues.pricePerDay;
        editHotel.capacity = editHotelValues.capacity;
        editHotel.isDeleted = false;

        if(selectedCity) {
            editHotel.cityDTO = selectedCity;
        } else {
            editHotel.cityDTO = citiesList.find(x => x.name === selectedHotel?.cityName)!;
        }

        updateHotel(editHotel);
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
                <div style={{marginTop: "10px"}}>
                    <label style={{marginRight: "10px"}}>City: </label>
                    <select defaultValue={citiesList.find(x => x.name === selectedHotel?.cityName)?.name} onChange={handleSelectCityChange}>
                        <option>Select City</option>
                        {citiesList.map(city => {
                            return <option>{city.name}</option>
                        })}
                        
                    </select>
                </div>
                <Button style={{margin: "7px", backgroundColor: "rgb(6, 137, 6)"}} type="submit" className="btn btn-primary" onSubmit={handleSubmit} >Save</Button>
                <Button onClick={() => props.closeEdit()} style={{backgroundColor: "rgb(180, 35, 4)"}}>Close</Button>
            </form>
        </div>
    )
})